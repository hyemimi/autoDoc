import { Link } from 'react-router-dom';
import './index.scss';

const Selection = () => {
  return (
    <div className="selection">
      <Link to={`/autoDoc/${1}`}><button>재직증명서</button></Link>
      <Link to={`/autoDoc/${2}`}><button>사직원</button></Link>
    </div>
  );
};

export default Selection;