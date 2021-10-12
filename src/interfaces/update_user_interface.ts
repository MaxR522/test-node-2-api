interface IUpdateReq {
  firstname: string;
  lastname: string;
  date_naissance: Date;
  sexe: 'male' | 'female' | 'others';
}

export default IUpdateReq;
