import { useFormData } from 'contexts/FormDataProvider';
import DocPreview from 'pages/AutoDoc/components/PrintDoc/DocPreview';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './index.scss';

interface IPrintBtnProps {
  isAllFilled: boolean;
}

/** 출력하기 버튼 */
const PrintBtn = ({ isAllFilled }: IPrintBtnProps) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { writingItem, onSetWritingData } = useFormData();
  //const [isReady, setIsReady] = useState(false);

  //useEffect(() => { if ( Object.keys(writingItem).length === 0 ) { setTimeout(() => {setIsReady(true);}, 2000);} },[writingItem]);

  return (
    <>
      <div style={{ display: 'none' }}>
        <DocPreview ref={componentRef} />
      </div>
      <footer className="doc-footer">
        <ReactToPrint
          onBeforeGetContent={async () => await onSetWritingData({})} 
          trigger={() => <button disabled={!isAllFilled}>출력하기</button>}
          content={() => componentRef.current}
        />
      </footer>
    </>
  );
};

export default PrintBtn;