import express from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import passport from 'passport';
import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}!`));