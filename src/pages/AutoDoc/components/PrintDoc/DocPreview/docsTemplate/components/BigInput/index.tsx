import { useFormData } from 'contexts/FormDataProvider';
import { IInputProps } from '../../@Types/inputProps';
import './index.scss';

/** 높이 72px 긴 입력창 */
const BigInput = ({ label, data, name }: IInputProps) => {
  const { writingItem } = useFormData();
  
  return (
    <div className="big-input">
      <p className="big-input-label">{label}</p>
      <p className={(Object.values(writingItem)[0] === data && Object.keys(writingItem)[0] === name ) ? 
        'big-input-data-color' : 'big-input-data'}>{data}</p>
    </div>
  );
};

export default BigInput;