import { useFormData } from 'contexts/FormDataProvider';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';

const searchAddress = () => {
  const { formData, onSetForm } = useFormData();

  const open = useDaumPostcodePopup(
    import.meta.env.VITE_DAUM_POSTCODE_URL
  );

  /** 선택된 주소를 형식에 맞게 문자열로 만들어 저장*/
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    
    onSetForm({ ...formData, roadAddress: fullAddress },{ roadAddress: fullAddress });
  };

  /** 주소지 검색 서비스 popup 열기 */
  const searchAddressHandler = () => {
    open({ onComplete: handleComplete, autoClose: true });
  };

  return { searchAddressHandler };

};

export default searchAddress;