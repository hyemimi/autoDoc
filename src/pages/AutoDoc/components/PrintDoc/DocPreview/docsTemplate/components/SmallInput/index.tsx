import { useFormData } from 'contexts/FormDataProvider';
import { IInputProps } from '../../@Types/inputProps';
import './index.scss';

/** 높이 36px 작은 인풋창 */
const SmallInput = ({ label, data, name }: IInputProps) => {
  const { writingItem } = useFormData();

  return (
    <div className="small-input">
      <p className="small-input-label">{label}</p>
      <p className={(Object.values(writingItem)[0] === data && Object.keys(writingItem)[0] === name) ? 
        'small-input-data-color' : 'small-input-data'}>{data}</p>
    </div>
  );
};

export default SmallInput;
