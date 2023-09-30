import getToday from 'utils/date/getToday';

export type CerDataType = {
    title: string;
    name: string;
    RRN: string;
    affiliation: string;
    position: string; // 직위
    job: string; // 직무명
    workingDepart: string; // 근무부서
    joiningDate: string; //currentDate: string;
    phone: string;
    address: string;
    purpose: string;
    etc: string;
}

const initialCerData = {
  name: '',
  RRN: '',
  affiliation: '나인라이트',
  position: '', // 직위
  job: '', // 직무명
  workingDepart: '', // 근무부서
  joiningDate: '',
  currentDate: getToday(),
  phone: '',
  address: '',
  purpose: '',
  etc: ''
};  

export default initialCerData;