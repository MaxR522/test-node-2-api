/*****************************************************
 *
 *  This file contains payload interface for type,
 *  payload is an information about the user stored inside JWT
 *
 *****************************************************/

interface IPayload {
  sub: string;
  email: string;
}

export default IPayload;
