import { AFFILIATION, CONFIRM, DETAIL_ADDRESS, EMAIL, EMERGENCY, JOINING_DATE, NAME, PHONE, POSITION, RELATIONSHIP, 
  RESIGNATION_DATE, RESIGNATION_REASON, ROAD_ADDRESS, RRN } from 'utils/inputList';

const resigInputList = { 
  cards: [
    { 
      title: '근무자 정보', 
      inputs: [
        NAME,
        AFFILIATION,
        POSITION,
        RRN
      ] 
    },
    
    { 
      title: '퇴사일', 
      inputs: [
        JOINING_DATE,
        RESIGNATION_DATE
      ] 
    },
    { 
      title: '퇴사사유',
      inputs: [
        RESIGNATION_REASON[0],
        RESIGNATION_REASON[1],
        RESIGNATION_REASON[2],
        RESIGNATION_REASON[3],
        RESIGNATION_REASON[4],
        RESIGNATION_REASON[5],
        RESIGNATION_REASON[6],
        RESIGNATION_REASON[7]
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
        PHONE,
        EMAIL,
        EMERGENCY,
        RELATIONSHIP
      ] 
    },
    { 
      title: '업무인수인계 확인필', 
      inputs: [
        CONFIRM
      ] 
    }
  ]
};

export default resigInputList;