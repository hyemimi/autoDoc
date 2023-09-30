import getToday from 'utils/date/getToday';

const today = getToday();

const NAME = { title: '성명', name: 'name', type: 'text', placeholder: '김나인', required: true , maxLength: 10 };
const AFFILIATION = { title: '소속', name: 'affiliation', type: 'text',placeholder: undefined, required: true, maxLength: 10 };
const POSITION = { title: '직위', name: 'position', type: 'text', placeholder: '이사', required: true, maxLength: 10 };
const JOB = { title: '직무명', name: 'job', type: 'text', placeholder: undefined, required: true, maxLength: 10 };
const WORKING_DEPART = { title: '근무부서', name: 'workingDepart', type: 'text', placeholder: '개발팀', required: true, maxLength: 10 };
const RRN = { title: '주민번호', name: 'RRN', type: 'text', placeholder: '숫자만 입력', required: true, maxLength: 14 };
const ROAD_ADDRESS = { title: undefined, name: 'roadAddress', type: 'text', placeholder: '클릭시 주소 검색', required: true, maxLength: 50 };
const DETAIL_ADDRESS = { title: undefined, name: 'detailAddress', type: 'text', placeholder: '상세 주소 입력', required: true, maxLength: 80 };
const PHONE = { title: '전화번호', name: 'phone', type: 'text', placeholder: '숫자만 입력', required: true, maxLength: 13 };
const JOINING_DATE = { title: '입사일자', name: 'joiningDate', type: 'text', placeholder: '숫자만 입력 ex) 20230301', required: true, maxLength: 13 };
const RESIGNATION_DATE = { title: '퇴사일자', name: 'resignationDate', type: 'text', placeholder: '숫자만 입력 ex) 20230724', required: true, maxLength: 13 };
const CURRENT_DATE = { title: '현재일자', name: 'currentDate', type: 'text', placeholder: `${today}`, required: false, maxLength: 13 };
const PURPOSE = { title: '용도', name: 'purpose', type: 'text', placeholder: undefined, required: false, maxLength: 160 };
const ETC = { title: '기타', name: 'etc', type: 'text', placeholder: undefined, required: false, maxLength: 160 };
const RESIGNATION_REASON = 
    [{ title: '정년', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '전직', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '개인신병', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '진학', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '결혼', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '가사', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '권고', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 },
      { title: '기타', name: 'reason', type: 'radio', placeholder: undefined, required: true, maxLength: 11 }];

const EMAIL = { title: 'e-mail', name: 'email', type: 'text',placeholder: 'ex) nine@nieright.com', required: true, maxLength: 48 };
const EMERGENCY = { title: '긴급연락처', name: 'emergency', type: 'text', placeholder: '숫자만 입력', required: true, maxLength: 13 };
const RELATIONSHIP = { title: '본인과의 관계', name: 'relationship', type: 'text', placeholder: undefined, required: true, maxLength: 10 };
const CONFIRM = { title: undefined, name: 'confirm', type: 'text',placeholder: undefined, required: true, maxLength: 10 };

export { NAME, AFFILIATION, POSITION, JOB, WORKING_DEPART,RRN, ROAD_ADDRESS,DETAIL_ADDRESS,PHONE,JOINING_DATE,RESIGNATION_DATE,
  CURRENT_DATE, PURPOSE,ETC, RESIGNATION_REASON ,EMAIL,EMERGENCY,RELATIONSHIP,CONFIRM };
