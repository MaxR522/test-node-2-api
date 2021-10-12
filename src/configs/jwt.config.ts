/*****************************************************
 *
 *  This file contains jwt variables config from .env
 *
 *****************************************************/

require('dotenv').config();

const accessTokenSecret: string =
  process.env.ACCESS_TOKEN_SECRET || 'myaccesstoken';

const refreshTokenSecret: string =
  process.env.REFRESH_TOKEN_SECRET || 'myRefreshToken';

const accessTokenExpiry: string = process.env.ACCESS_TOKEN_EXPIRY || '24h';

const refreshTokenExpiry: string = process.env.REFRESH_TOKEN_EXPIRY || '60d';

export {
  accessTokenSecret,
  refreshTokenSecret,
  accessTokenExpiry,
  refreshTokenExpiry,
};
