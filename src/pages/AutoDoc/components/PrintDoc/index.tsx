import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import DocPreview from './DocPreview';

/** 출력하기 버튼 */
const PrintDoc = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <DocPreview ref={componentRef} />
      {/* <footer className="doc-footer">
        <ReactToPrint
          trigger={() => <button>출력하기</button>}
          content={() => componentRef.current}
        />
      </footer> */}
    </>
  );
};

export default PrintDoc;