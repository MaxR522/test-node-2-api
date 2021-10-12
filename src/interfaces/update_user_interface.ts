/*****************************************************
 *
 *  This file contains interface for types declaration of update user request
 *
 *****************************************************/

interface IUpdateReq {
  firstname: string;
  lastname: string;
  date_naissance: Date;
  sexe: 'male' | 'female' | 'others';
}

export default IUpdateReq;
