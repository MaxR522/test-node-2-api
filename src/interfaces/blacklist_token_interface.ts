/*****************************************************
 *
 *  This file contains BlacklistToken interface for type
 *
 *****************************************************/

import { Document } from 'mongoose';

interface IBlacklistToken extends Document {
  token: string;

  // Timestamps
  createdAt: Date;
}

export default IBlacklistToken;
