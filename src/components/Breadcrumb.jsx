/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Breadcrumb = ({ home, currentPage }) => {
  return (
    <nav className="text-white text-sm" aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link
            to="/javascript"
            className="hover:underline"
            title="Vai alla pagina principale" 
          >
            {home}
          </Link>
        </li>
        <li>/</li>
        <li className="font-semibold" aria-current="page">
          {currentPage}
        </li> 
      </ol>
    </nav>
  );
};

export default Breadcrumb;
