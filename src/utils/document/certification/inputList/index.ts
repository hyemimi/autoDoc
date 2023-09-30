import { NAME, AFFILIATION, POSITION, WORKING_DEPART, 
  JOB, RRN, ROAD_ADDRESS, DETAIL_ADDRESS, JOINING_DATE, CURRENT_DATE, PHONE, PURPOSE, ETC } from 'utils/inputList';

const cerInputList = { 
  cards: [
    { 
      title: '근무자 정보', 
      inputs: [
        NAME,
        AFFILIATION,
        POSITION,
        JOB,
        WORKING_DEPART,
        RRN
      ] 
    },
    { 
      title: '현주소', 
      inputs: [
        ROAD_ADDRESS,
        DETAIL_ADDRESS
      ] 
    },
    { 
      title: '연락처', 
      inputs: [
        PHONE
      ] 
    },
    { 
      title: '재직기간', 
      inputs: [
        JOINING_DATE,
        CURRENT_DATE
      ] 
    },
    { 
      title: '기타사항', 
      inputs: [
        PURPOSE,
        ETC
      ] 
    }
  ]
};

export default cerInputList;