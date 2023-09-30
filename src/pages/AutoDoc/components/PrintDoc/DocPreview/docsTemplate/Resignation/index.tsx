import nineRightStamp from 'assets/nineright_stamp.png';
import './index.scss';
import '../styles/docsTemplate.scss';
import SmallInput from '../components/SmallInput';
import { useFormData } from 'contexts/FormDataProvider';
import SelectOption from './components/SelectOption';
import { useEffect, useState } from 'react';
import getToday from 'utils/date/getToday';

/** 사직원 템플릿 */
const Resignation = () => {
  const { formData: ResigFormData, writingItem } = useFormData();
  const [isChecked, setIsChecked] = useState('');
  useEffect(() => {
    setIsChecked(ResigFormData.reason);
  },[ResigFormData.reason]);

  return (
    <div className="docs">
      <div className="res-header">
        <h1 className="res-header-title">사직원</h1>
        <div className="res-header-table">
          <div className="res-header-table-item">결재</div>
          <div className="res-header-table-item">팀장</div>
          <div className="res-header-table-item">대표</div>
          <div className="res-header-table-item">&nbsp;</div>
          <div className="res-header-table-item">&nbsp;</div>
          <div className="res-header-table-item">&nbsp;</div>
          <div className="res-header-table-item">&nbsp;</div>
          <div className="res-header-table-item">&nbsp;</div>
          <div className="res-header-table-item">&nbsp;</div>
        </div>
      </div>
      <div className="res-body">
        <div className="res-body-table grid grid-2">
          <SmallInput name="name" label="성 &nbsp; 명" data={ResigFormData.name} />
          <SmallInput name="affiliation" label="소 &nbsp; 속" data={ResigFormData.affiliation} />
          <SmallInput name="position" label="직 &nbsp; 위" data={ResigFormData.position} />
          <SmallInput name="RRN" label="주민번호" data= {ResigFormData.RRN} />
          <SmallInput name="joiningDate" label="입사일자" data= {ResigFormData.joiningDate} />
          <SmallInput name="resignationDate" label="퇴사일자" data={ResigFormData.resignationDate} />
        </div>
        <div className="res-body-reasons">
          <p className="res-body-reasons-label">사유</p>
          <div className="res-body-reasons-select">
            <SelectOption className={Object.values(writingItem)[0] === '정년' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option' } label="정 &nbsp; 년" isChecked={isChecked === '정년'} />
            <SelectOption className={Object.values(writingItem)[0] === '전직' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'} label="전 &nbsp; 직" isChecked={isChecked === '전직'}/>
            <SelectOption className={Object.values(writingItem)[0] === '개인신병' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'} label="개인신병" isChecked={isChecked === '개인신병'}/>
            <SelectOption className={Object.values(writingItem)[0] === '진학' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'} label="진 &nbsp; 학" isChecked={isChecked === '진학'}/>
            <SelectOption className={Object.values(writingItem)[0] === '결혼' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'} label="결 &nbsp; 혼" isChecked={isChecked === '결혼'}/>
            <SelectOption className={Object.values(writingItem)[0] === '가사' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'} label="가 &nbsp; 사" isChecked={isChecked === '가사'}/>
            <SelectOption className={Object.values(writingItem)[0] === '권고' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'} label="권 &nbsp; 고" isChecked={isChecked === '권고'}/>
            <div className={Object.values(writingItem)[0] === '기타' ? 
              'res-body-reasons-select-option-color' : 'res-body-reasons-select-option'}>
              <div>{isChecked === '기타' ? <div>■</div> : <div>□</div> }</div>
              <p>기 &nbsp; 타</p>
              <p className={(Object.values(writingItem)[0] === ResigFormData.reasonText && Object.keys(writingItem)[0] === 'reasonText') ? 
                'res-body-reasons-select-option-text-color' : 'res-body-reasons-select-option-text'}>
                {(isChecked === '기타' && ResigFormData.reasonText) && '(' + ResigFormData.reasonText + ')'}
              </p>
            </div>
          </div>
        </div>
        <div className="res-body-additional">
          <p className="res-body-additional-label">사직후연락처</p>
          <div className="res-body-additional-table">
            <div className="res-body-additional-table-1st">
              <p className="res-body-additional-table-1st-label">현 주 소</p>
              <div className={(Object.values(writingItem)[0] === ResigFormData.roadAddress && Object.keys(writingItem)[0] === 'roadAddress') ||
                  (Object.values(writingItem)[0] === ResigFormData.detailAddress && Object.keys(writingItem)[0] === 'detailAddress') ? 
                'res-body-additional-table-1st-data-color' : 'res-body-additional-table-1st-data'}>
                <p>{ResigFormData.roadAddress}</p>
                <p>{ResigFormData.detailAddress}</p>
              </div>
            </div>
            <div className="res-body-additional-table-2nd">
              <div className="res-body-additional-table-2nd-phone">
                <p className="res-body-additional-table-2nd-phone-label">전화번호</p>
                <p className={(Object.values(writingItem)[0] === ResigFormData.phone && Object.keys(writingItem)[0] === 'phone') ? 
                  'res-body-additional-table-2nd-phone-data-color' : 'res-body-additional-table-2nd-phone-data'}>
                  {ResigFormData.phone}
                </p>
              </div>
              <div className="res-body-additional-table-2nd-email">
                <p className="res-body-additional-table-2nd-email-label">e-mail</p>
                <div className={(Object.values(writingItem)[0] === ResigFormData.emailID && Object.keys(writingItem)[0] === 'emailID' ) ||
                  (Object.values(writingItem)[0] === ResigFormData.emailAddr && Object.keys(writingItem)[0] === 'emailAddr') ? 
                  'res-body-additional-table-2nd-email-data-color' : 'res-body-additional-table-2nd-email-data'}>
                  <p>{ResigFormData.emailID}</p>
                  <p>{ResigFormData.emailAddr}</p>
                </div>
              </div>
            </div>
            <div className="res-body-additional-table-3rd">
              <div className="res-body-additional-table-3rd-emergency">
                <p className="res-body-additional-table-3rd-emergency-label">긴급연락처</p>
                <p className={(Object.values(writingItem)[0] === ResigFormData.emergency && Object.keys(writingItem)[0] === 'emergency') ? 
                  'res-body-additional-table-3rd-emergency-data-color' : 'res-body-additional-table-3rd-emergency-data'}>{ResigFormData.emergency}</p>
              </div>
              <div className="res-body-additional-table-3rd-relationship">
                <p className="res-body-additional-table-3rd-relationship-label">본인과의 관계</p>
                <p className={(Object.values(writingItem)[0] === ResigFormData.relationship && Object.keys(writingItem)[0] === 'relationship' ) ? 
                  'res-body-additional-table-3rd-relationship-data-color' : 'res-body-additional-table-3rd-relationship-data'}>
                  {ResigFormData.relationship}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="res-body-description">
          <p>&nbsp; 본인은 본인의 자유의사에 따라(단, 별도의 사유시 퇴직사유에 기재) 위와 같은 사유로 인하여 사직코자 하오니 승인하여 주시기 바랍니다. 또한 회사를 퇴직함에 있어 아래와 같이 서약합니다.</p>
          <div className="res-body-description-list">
            <p className="res-body-description-list-label">-서약사항-</p>
            <div className="res-body-description-list-data">
              <div className="res-body-description-list-data-item">
                <p>1.</p>
                <p>&nbsp;본인은 퇴직과 동시에 재직 기간 중 가지고 있던 회사의 영업 및 고객관련 비밀이 기록된 일체의 자료를 반납하겠으며, 재직시 업무상 제반 비밀사항을 타인에게 누설 하지 않겠습니다.</p>
              </div>
              <div className="res-body-description-list-data-item">
                <p>2.</p>
                <p>&nbsp;물품반납, 업무인수인계 등 회사와 관련한 제반사항을 퇴직일 전일까지 처리하겠습니다.</p>
              </div>
              <div className="res-body-description-list-data-item">
                <p>3.</p>
                <p>&nbsp;본인은 회사를 퇴직함에 있어 재직기간 중 발생한 모든 금전 채권관계가 일체 정산 완료되었음을 확인하며, 향후 이에 관하여 민·형사상, 행정상 이의제기를 하지 않을 것임을 확인합니다.</p>
              </div>
            </div>
          </div>
          <p>&nbsp; 본인은 상기 내용을 충분히 이해하며, 만일 서약사항을 위반하였을 경우 관련 법령에 의거 손해 배상할 것을 서약합니다.</p>
          <p className="res-body-description-today">{getToday()}</p>
          <div className="res-body-description-signature">
            <p className={(Object.values(writingItem)[0] === ResigFormData.name && Object.keys(writingItem)[0] === 'name' ) ? 
              'footer-name-color' : 'footer-name'}>신청인 : {ResigFormData.name} (인)</p>
            <p className={(Object.values(writingItem)[0] === ResigFormData.confirm && Object.keys(writingItem)[0] === 'confirm' 
            && ResigFormData.confirm !== undefined ) ? 
              'footer-confirm-color' : 'footer-confirm'}>인수인계 확인필 : {ResigFormData.confirm} (인)</p>
          </div>
          <div className="res-body-description-representative">
            <p>나인라이트 대표 귀중</p>
            <img src={nineRightStamp} alt="nine_right_stamp" width={70} height={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resignation;