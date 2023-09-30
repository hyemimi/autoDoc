const validatePhone = (value: string) => {
  return (
    value
      .replace(/[^\d-]/g, '') // 숫자와 하이픈만 유효한 문자로 유지
      .replace(/(\d{3})-?(\d{0,4})-?(\d{0,4})/, (_, p1, p2, p3) => { // 3-4-4 숫자 패턴에 맞게 변환
        if (!p2 && !p3) {
          return p1;
        } else if (!p3) {
          return `${p1}-${p2}`;
        } else {
          return `${p1}-${p2}-${p3}`;
        }
      })
  );
};

export default validatePhone;