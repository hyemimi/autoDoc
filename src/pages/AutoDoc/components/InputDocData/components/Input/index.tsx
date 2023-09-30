import { FC } from 'react';
import './index.scss';
//'text' | 'email' | 'checkbox';
interface IInputProps {
    type: string;
    value: string;
    name: string;
    title?: string;
    placeholder?: string;
    //error?: string | null;
    onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void);
    required?: boolean;
    maxLength: number;
    reason ?: string;
}

const Input :FC<IInputProps> = ({
  type,
  value,
  name,
  title,
  placeholder,
  onChange,
  required,
  maxLength,
  reason
}) => {

  return (
    type !== 'radio' ? (
      <div>
        <p className="input-title">{title}</p>
        <input name={name} type={type} value={value} placeholder={placeholder} 
          onChange={onChange} required={required} maxLength={maxLength} 
          disabled={name === 'currentDate' && true} readOnly={name === 'roadAddress' && true} autoComplete="off" />
      </div> 
    ) : (
      <div className="select-wrapper">
        <input id={title} name={name} type={type} value={title} onChange={onChange} required />
        <label htmlFor={title} className="select-title">{title}</label>
        {(reason === '기타' && title === '기타') && <input className="etc-input" name="reasonText" type="text" placeholder="기타 사유 입력" 
          onChange={onChange} required maxLength={24} />}
      </div> 
    )
  );
};

export default Input;