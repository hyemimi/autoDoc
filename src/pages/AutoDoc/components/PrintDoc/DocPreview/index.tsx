import { forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import Certification from './docsTemplate/Certification';
import Resignation from './docsTemplate/Resignation';
import './index.scss';

/** 문서 미리보기 */
const DocPreview = forwardRef<HTMLDivElement>((_, ref) => {
  const { id } = useParams();

  return (
    <div ref={ref} className="preview">
      {id === '1' && <Certification />}
      {id === '2' && <Resignation />}
    </div>
  );
});
DocPreview.displayName = 'DocPreview';

export default DocPreview;