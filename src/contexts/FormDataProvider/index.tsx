import { PropsWithChildren, createContext, useState, useContext } from 'react';

/* interface IFormDataContextProps {
  onSetForm ?: (title:string, data: CerDataType | ResigDataType) => void;
}  */

const FormDataContext = createContext<any>({
  formData: [],
  onSetForm: (data) => {},
  onWritingItem: []
});

const FormDataProvider = ({ children }: PropsWithChildren) => {
  const [formData, setFormData] = useState([]);
  const [writingItem,setWritingItem] = useState([]);

  const onSetForm = (data: any, writingdata: any) => {
    setFormData({ ...data });
    setWritingItem({ ...writingdata });
  };

  const onSetWritingData = (data: any) => {
    setWritingItem(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, onSetForm, writingItem, onSetWritingData }} >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
export const useFormData = () => useContext(FormDataContext);