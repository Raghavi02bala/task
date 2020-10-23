import React,{useContext} from 'react';
import './index.css';
import { UserContext } from './context';

const Pagination = () => {
    const user = useContext(UserContext);
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(user.totalDetails/ user.detailsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} >
                        <ul onClick={() => user.paginate(number)}  className="link" >
                            {number}
                        </ul>
                    </li>
                ))}
            </ul>            
        </nav>
    )
}

export default Pagination;
