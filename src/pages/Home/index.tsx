import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

  return (
    <div className="home"> 
      <Link to={'/selection'}><button>문서 선택하기</button></Link>
    </div>
  );
};

export default Home;