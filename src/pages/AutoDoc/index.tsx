import './index.scss';
import PrintDoc from './components/PrintDoc';
import FormDataProvider from 'contexts/FormDataProvider';
import InputDocData from './components/InputDocData';
import { useNavigate, useParams } from 'react-router-dom';
import cerInputList from 'utils/document/certification/inputList';
import resigInputList from 'utils/document/resignation/inputList';

const AutoDoc = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const chooseCategory = () => {
    switch (String(id)) {
    case '1' :
      return <InputDocData inputList={cerInputList}/>;
    case '2' :
      return <InputDocData inputList={resigInputList}/>;
    }
  };

  const backwardHandler = () => {
    navigate(-1);
  };

  return (
    
    <div className="container">
      <header className="header">
        <p>문서 자동화</p>
        <button onClick={backwardHandler}>뒤로가기</button>
      </header>
      <FormDataProvider>
        <main className="auto-doc">
          <section className="input-section">
            {(() => chooseCategory())()}
          </section>
          <section className="output-section">
            <PrintDoc />
          </section>
        </main>
      </FormDataProvider>
    
    </div>
  );
};

export default AutoDoc;
