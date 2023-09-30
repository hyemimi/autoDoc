export const reasonItem = ['정년', '전직', '개인신병', '진학', '결혼', '가사', '권고'];

export type ResigDataType = {
      title: string;
      name: string;
      RRN: string;
      affiliation: string;
      position: string; // 직위
      job: string; // 직무명
      workingDepart: string; // 근무부서
      roadAddress: string;
      detailAddress: string;
      joiningDate: string;
      resignationDate: string;
      phone: string;
      emailID: string;
      emailAddr: string;
      emergency: string;
      relationship: string;
      reason: ''
}

const initialResigData = {
  name: '',
  RRN: '',
  affiliation: '나인라이트',
  position: '',
  joiningDate: '',
  resignationDate: '',
  phone: '',
  address: '',
  emailID: '',
  emailAddr: '',
  emergency: '',
  relationship: '',
  reason: ''
};  

export default initialResigData;