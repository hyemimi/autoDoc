import Card from './components/Card';
import Input from './components/Input';
import useForm from 'hooks/useForm';
import { useFormData } from 'contexts/FormDataProvider';
import { useEffect, useRef } from 'react';
import { Fragment, useState } from 'react';
import PrintBtn from './components/PrintBtn';
import './index.scss';
import searchAddress from 'pages/AutoDoc/utils/searchAddress';

const InputDocData = ({ inputList }: any) => {
  const isFilled = useRef(true);

  const [isAllFilled, setIsAllFilled] = useState(false);
  
  const inputListLen = inputList.cards.length;
  const { formData, onChange } = useForm();
  const { onSetForm, onSetWritingData } = useFormData();
  const { searchAddressHandler } = searchAddress();

  useEffect(() => {
    isFilled.current = true;

    for (const card of inputList.cards) {
      for (const input of card.inputs) {
        if (input.required && !formData[input.name]) {
          isFilled.current = false;
          break;
        }
      }
    }

    setIsAllFilled(isFilled.current);
  }, [formData]);
  
  useEffect(() => {
    onSetForm({ affiliation: '나인라이트' });
    onSetWritingData({});
  },[]); // 폼 데이터 초기화
  
  return (
    <>
      {inputList.cards.map((card, index) => (
        <Card key={card.title} title={card.title} num={`${index + 1}/${inputListLen}`}>
          {card.inputs.map((item, index) =>
            <Fragment key={item.name + index}>
              {item.name === 'roadAddress' ? 
                /** 주소 검색 */
                <input className="address-search" onClick={searchAddressHandler} value={formData[item.name]} placeholder={item.placeholder} /> : 
                /** 공통 부분 */
                <Input title={item.title} name={item?.name} type={item.type} value={formData[item.name]} onChange={onChange} 
                  placeholder={item?.placeholder} required={item.required} maxLength={item?.maxLength} reason={formData?.reason} />}
            </Fragment>
          )}
        </Card>
      )
      )}
      <PrintBtn isAllFilled={isAllFilled} />
    </>
  );

};

export default InputDocData;
