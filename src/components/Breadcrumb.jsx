/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';


const Breadcrumb = ({ home, currentPage }) => {
    return (
      <nav className="text-white text-sm">
        <ol className="flex space-x-2">
          <li>
            <Link to="/javascript" className="hover:underline">
              {home}
            </Link>
          </li>
          <li>/</li>
          <li className="font-semibold">{currentPage}</li>
        </ol>
      </nav>
    );
  };
  
  export default Breadcrumb;