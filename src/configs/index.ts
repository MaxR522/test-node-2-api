/*****************************************************
 *
 *  This file load configs for running the app from .env
 *
 *****************************************************/

require('dotenv').config();

const port: number = parseInt(process.env.PORT || '7777');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env: string = process.env.NODE_ENV;

export { port, env };
