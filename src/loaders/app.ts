/*****************************************************
 *
 *  This file load middlewares, Routes & DB connexion
 *
 *****************************************************/

import * as Express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import morganMiddleware from './morgan';
import Logger from './winston';
import * as mongoose from 'mongoose';
import router from '../routes';

import corsOption from '../configs/cors.config';
import { mongoOptions, mongoDBURI } from '../configs/mongo.config';

const app = Express();

/*****************************************************
 *
 *  Static
 *
 *****************************************************/

app.use('/', Express.static('public'));

/*****************************************************
 *
 *  Middlewares
 *
 *****************************************************/

// body parser
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// cross-origin
app.use(cors(corsOption));

// middleware for log http request
app.use(morganMiddleware);

// security
app.use(helmet());

/*****************************************************
 *
 *  Routes
 *
 *****************************************************/

// load router
app.use(router);

/*****************************************************
 *
 *  Error handlers
 *
 *****************************************************/

// Return 404 when not found endpoint
app.use((req: Express.Request, res: Express.Response) => {
  res.status(404).json({
    error: true,
    message: `ressource ${req.originalUrl} n'existe pas`,
  });
});

// Handle syntax error on request
app.use(
  (
    err: any,
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ) => {
    if (err instanceof SyntaxError) {
      return res.status(400).json({
        error: true,
        message: "Le body de la requete n'est pas une JSON valide",
      });
    }
  },
);

/*****************************************************
 *
 *  DB connexion
 *
 *****************************************************/

// connection to mongoDB
mongoose.connect(mongoDBURI, mongoOptions, (error) => {
  if (error) {
    Logger.error(`${error} ❌`);
    throw error;
  } else {
    Logger.info(`Database :: mongodb connection @: ${mongoDBURI} ✅`);
  }
});

export default app;
