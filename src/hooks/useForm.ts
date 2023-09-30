import { useFormData } from 'contexts/FormDataProvider';
import validateDate from 'pages/AutoDoc/utils/validateDate';
import validatePhone from 'pages/AutoDoc/utils/validatePhone';
import validateRRN from 'pages/AutoDoc/utils/validateRRN';
import { useState } from 'react';

const useForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { formData, onSetForm } = useFormData();

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone' || name === 'emergency') {
      return onSetForm({ ...formData, [name]: validatePhone(value) }, { [name]: value } );
    }
    else if (name === 'RRN') {
      return onSetForm({ ...formData, [name]: validateRRN(value) }, { [name]: value } );
    }
    else if (name === 'joiningDate' || name === 'resignationDate') {
      return onSetForm({ ...formData, [name]: validateDate(value, isEditing, setIsEditing) },{ [name]: value } );
    }
    else if (name === 'email') {
      const idxOfAt = value.indexOf('@');
      
      const emailID = value.slice(0, idxOfAt);
      const emailAddr = value.slice(idxOfAt);

      return onSetForm({ ...formData, email: value, emailID: emailID, emailAddr: emailAddr }, { emailID: emailID, emailAddr: emailAddr });
    }

    onSetForm({ ...formData, [name]: value }, { [name]: value } );
  };

  return { formData, onChange };
};
export default useForm;
