import React, {useContext} from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import './TableDetail.css';
import { Link } from 'react-router-dom';
import { UserContext } from './context';


const TableDetail = () => {

const user = useContext(UserContext);
    return (
        <>
            <div>
                <div className="head">
                    <Link to="/">
                    <IoMdArrowRoundBack />
                    </Link>
                    <h1>Details</h1></div>
                <div>{user.details.first_name}</div>
                <div>
                    {user.details.map(details => <div key={details.id}>
                        <div>{details.first_name}</div>
                        <div>{details.last_name}</div>
                        <div>{details.age}</div>
                        <div>{details.email}</div>
                        <div>{details.web}</div>
                    </div>)}
                </div>

            </div>
        </>
    )
}

export default TableDetail;

