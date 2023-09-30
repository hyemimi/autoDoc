import React from 'react';
import './index.scss';

interface ICardProps {
  title : string,
  num : string,
  children: React.ReactNode;
}

const Card = ({ children, title, num } : ICardProps) => {
  
  return (
    <div className="card">
      <div className="card-title">
        <div>{title}</div><div>{num}</div>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );

};

export default Card;

//유저카드.
{/* <Input title="성명" name="name" type="text" value={formData.name} onChange={onChange} placeholder="김나인" required />
      <Input title="소속" name="affiliation" type="text" value={formData.affiliation} onChange={onChange} required />
      <Input title="직위" name="position" type="text" value={formData.position} onChange={onChange} placeholder="이사" required />
      {title === '근무자 정보' && 
        <>
          <Input title="직무명" name="job" type="text" value={formData.job} onChange={onChange} required />
          <Input title="근무부서" name="workingDepart" type="text" value={formData.workingDepart} onChange={onChange} placeholder="개발팀" required />
        </>
      }
      <Input title="주민번호" name="RRN" type="text" value={formData.RRN?.replace(/[^0-9.]/g, '').replace(/([\d|*]{6})([\d|*]{7})/, '$1-$2')} onChange={onChange} maxLength={14} 
        placeholder="ex) 010326-1234567" required /> */}