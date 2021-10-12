/*****************************************************
 *
 *  This file contains custom type declaration for express
 *
 *****************************************************/

import 'express';

declare module 'express' {
  interface Request {
    userData?: any;
    token?: any;
  }
}
