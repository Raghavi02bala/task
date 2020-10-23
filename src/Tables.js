import React, { useContext, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from './context';
import orderBy from 'lodash/orderBy';


const Tables = () => {

    const user = useContext(UserContext);
    let history = useHistory();

    const [columnToSort, setColumnToSort] = useState('');
    const [sortDirection, setSortDirection] = useState('desc');

    const [q, setQ] = useState("");
    function search(rows) {
        return rows.filter(row =>
            row.first_name.toLowerCase().indexOf(q) > -1 ||
            row.last_name.toLowerCase().indexOf(q) > -1
        );
    }

    function handleClick() {
        history.push("/details");
    }


    if (user.loading) {
        return <h2>Loading...</h2>;
    }

    function handleSort(field) {
        setColumnToSort(field);
        if(columnToSort){
            setSortDirection('asc')
        }
    }

    return (
        <>
            <div>
                <h1 className="users">Users</h1>
                <div className="search">
                    <input type="text" value={q} onChange={(event) => setQ(event.target.value)} />
                </div>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            {
                                user.header.map(({ field, name }) => (
                                    <th key={field} onClick={ () => handleSort(field)} >{name}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {search(orderBy(
                            user.currentDetails, 
                            columnToSort, 
                            sortDirection)).map(details => <tr key={details.id}>
                            <td
                                onClick={handleClick}
                                className="td_first"
                            >{details.first_name}</td>
                            <td>{details.last_name}</td>
                            <td>{details.age}</td>
                            <td>{details.email}</td>
                            <td><a href={`${details.web}`}>{details.web}</a></td>
                        </tr>)}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        </>
    )
}

export default Tables;
