/*****************************************************
 *
 *  This file contains interface for types declaration of register request
 *
 *****************************************************/

interface IReqRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  date_naissance: Date;
  sexe: 'male' | 'female' | 'others';
}

export default IReqRegister;
