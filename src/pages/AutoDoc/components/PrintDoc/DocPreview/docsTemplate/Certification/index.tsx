import nineRightStamp from 'assets/nineright_stamp.png';
import './index.scss';
import '../styles/docsTemplate.scss';
import { useFormData } from 'contexts/FormDataProvider';
import getToday from 'utils/date/getToday';
import getPeriod from 'utils/date/getPeriod';
import SmallInput from '../components/SmallInput';
import BigInput from '../components/BigInput';
import { useEffect, useState } from 'react';
/** 재직증명서 템플릿 */
const Certification = () => {
  const { formData: cerFormData, writingItem } = useFormData();
  const [workPeriod, setWorkPeriod] = useState<string | undefined>('');

  useEffect(() => {if (cerFormData.joiningDate !== '') {setWorkPeriod(() => getPeriod(cerFormData.joiningDate));} }, [cerFormData.joiningDate]);

  return (
    <div className="docs">
      <h1 className="cer-header">재직증명서</h1>
      <div className="cer-body">
        <div className="grid grid-2 cer-body-table">
          <SmallInput name="name" label="성 &nbsp; 명" data={cerFormData?.name} />
          <SmallInput name="affiliation" label="소  &nbsp; 속" data={cerFormData?.affiliation} />
          <SmallInput name="position" label="직  &nbsp; 위" data={cerFormData?.position} />
          <SmallInput name="job" label="직 무 명" data={cerFormData?.job} />
          <SmallInput name="joiningDate" label="입사일자" data={cerFormData?.joiningDate} />
          <SmallInput name="workingDepart" label="근무부서" data={cerFormData?.workingDepart} />
          <SmallInput name="RRN" label="주민번호" data={cerFormData?.RRN} />
          <SmallInput name="phone" label="전화번호" data={cerFormData?.phone} />
        </div>
        <div className="cer-body-address">
          <p className="cer-body-address-label">현 주 소</p>
          <div className={(Object.values(writingItem)[0] === cerFormData.roadAddress && Object.keys(writingItem)[0] === 'roadAddress' ) ||
            (Object.values(writingItem)[0] === cerFormData.detailAddress && Object.keys(writingItem)[0] === 'detailAddress') ? 
            'cer-body-address-data-color' : 'cer-body-address-data'}>
            <p>{cerFormData?.roadAddress}</p>
            <p>{cerFormData?.detailAddress}</p>
          </div>
        </div>
        <div className="cer-body-duration">
          <p className="cer-body-duration-label">재직기간</p>
          <div className="cer-body-duration-data">
            <div className="cer-body-duration-data-left">
              <p>{cerFormData?.joiningDate}</p>
              <p>{getToday()}</p>
            </div>
            <p className="">{workPeriod}</p>
          </div>
        </div>
        <div className="grid grid-1 cer-body-etc">
          <BigInput name="purpose" label="용 &nbsp; 도" data={cerFormData?.purpose} />
          <BigInput name="etc" label="기타사항" data={cerFormData?.etc} />
        </div>
        <div className="cer-body-description">
          <p>상기와 같이 재직하고 있음을 증명합니다.</p>
          <p className="cer-body-description-today">{getToday()}</p>
          <div className="cer-body-description-representative">
            <p>주식회사 나인라이트 대표 : 김제언 &nbsp; (인)</p>
            <img src={nineRightStamp} alt="nine_right_stamp" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;

{/* <div>재직 증명서</div>
<table className="table" style={{ border: '1px solid #000' }}>
  <thead>
    <tr>
      <th>성명</th>
      <th>직위</th>
      <th>입사일자</th>
      <th>근무부서</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>이빵빵</td>
      <td>인턴</td>
      <td>1998년 11월 02일</td>
      <td>개발</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>소속</th>
      <th>직무명</th>
      <th>주민번호</th>
      <th>전화번호</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>나인라이트</td>
      <td>프론트엔드 개발자</td>
      <td>981102-1112333</td>
      <td>010-1123-4459</td>
    </tr>
  </tbody>
</table>
<table className="table">
  <thead>
    <tr>
      <th>현주소</th>
      <th>재직기간</th>
      <th>용도</th>
      <th>기타사항</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>경기도 용인시 흥덕구 흥덕 it 밸리 21-3번 길</p>
        <p>102동 2345호</p>
      </td>
      <td>
        <div>
          <p>1998년 11월 02일부터</p>
          <p>1998년 11월 02일까지</p>
        </div>
        <p>( 12년 11개월 )</p>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<div>123</div> */}