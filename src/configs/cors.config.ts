/*****************************************************
 *
 *  This file contains cors config
 *
 *****************************************************/

require('dotenv').config();
import * as cors from 'cors';

const requestOrigin: string = process.env.ORIGIN || '*';

const corsOption: cors.CorsOptions = {
  origin: requestOrigin,
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ],
  // exposedHeaders: '',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

export default corsOption;
