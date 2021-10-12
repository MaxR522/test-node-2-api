/*****************************************************
 *
 *  This file contains mongoDB connexion config
 *
 *****************************************************/

require('dotenv').config();
import { env } from './index';
import * as mongoose from 'mongoose';

// Change to DB test for testing environment
if (env === 'test') {
  process.env.MONGOOSE_URL = process.env.MONGODB_URI_TEST;
} else {
  process.env.MONGOOSE_URL = process.env.MONGODB_URI;
}

const mongoOptions: mongoose.ConnectOptions = {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const mongoDBURI: string = process.env.MONGOOSE_URL || '';

export { mongoOptions, mongoDBURI };
