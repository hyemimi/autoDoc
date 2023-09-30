const validateRRN = (value: string) => {
  return (
    value
      .replace(/[^\d-]/g, '')
      .replace(/(\d{6})-?(\d{0,7})/, (_, front, back) => {
        if (!back) {
          return front;
        } else {
          return `${front}-${back}`;
        }
      })
  );
};

export default validateRRN;