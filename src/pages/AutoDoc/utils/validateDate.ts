import { SetStateAction } from 'react';
import { Dispatch } from 'react';

const validateDate = (value: string, isEditing: boolean, setIsEditing: Dispatch<SetStateAction<boolean>>) => {
  return (
    value
      .replace(/[^\d가-힣]/g, '') // 숫자 외의 값 받지 못하도록 설정
      .replace(/(\d{4})년? ?(\d{0,2})월? ?(\d{0,2})일?/, (_, year, month, day) => { // 4 2 2 패턴에 맞게 변환
        if (!month && !day) { // 년도만 입력 되었을 때
          return year;
        } else if (!day) { // 년도와 월까지만 입력 되었을 때
          if (+month.slice(0, 1) > 1 || month === '00') { // 00 또는 20 이상의 숫자 입력 못하게 하기
            return `${year}년 `;
          } 
          if (+month.slice(0 ,1) === 1 && +month.slice(1, 2) > 2) { // 13~19 사이의 숫자 입력 시 '1'만 남기기
            return `${year}년 1`;
          }
  
          return `${year}년 ${month}`;
        } else if (day.length === 1) { // '일' 한 자리만 입력 되었을 시
          if (+day.slice(0, 1) > 3) { // 40일 이상의 숫자 입력 못하게 하기
            return `${year}년 ${month}월 `;
          } 
  
          return `${year}년 ${month}월 ${day}`;
        } else if (day.length === 2 && !isEditing) { // '일' 두 자리 입력 다 되었을 시
          setIsEditing(true);
  
          if ((+day.slice(0, 1) === 3 && +day.slice(1, 2) > 2) || day === '00') { // 33~39 사이의 숫자 입력 시 '3'만 남기기
            return `${year}년 ${month}월 3`;
          }
  
          return `${year}년 ${month}월 ${day}일`;
        } else if (day.length === 2 && isEditing) { // 수정하려고 back space 누를 시, '일' 지우기
          setIsEditing(false);
  
          return `${year}년 ${month}월 ${day.slice(0, 1)}`;
        }
      }) 
  );
};

export default validateDate;