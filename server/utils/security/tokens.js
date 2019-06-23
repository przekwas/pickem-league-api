import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import config from '../../config';
import queries from '../../db';

const generateExpireDate = () => {
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 30);
    return expireDate;
}

export const createToken = async (payload) => {
    let [resultId] = await queries.tokens.insertUserid({ user_id: payload.userid });
    payload.accesstokenid = resultId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    let _expires = generateExpireDate();
    await queries.tokens.updateWithToken(payload.accesstokenid, { token, _expires });
    return token;
}

const isExpired = expireDate => {
    let now = new Date();
    if (expireDate >= now) {
        return false;
    } else {
        return true;
    }
}

export const validateToken = async (token) => {
    let payload = jwt.decode(token);
    let [info] = await queries.tokens.findOne({ id: payload.accesstokenid, token });
    if (!info) {
        throw new Error('Invalid Token!');
    } else {
        if (isExpired(info._expires)) {
            await queries.tokens.deleteOne({ id: info.id });
            throw new Error('Invalid Token!');
        } else {
            return payload;
        }
    }
}