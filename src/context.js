import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    useEffect(() => {
        const fetchdetails = async () => {
            setLoading(true);
            const resp = await axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json');
            setDetails(resp.data);
            setLoading(false);
        }
        fetchdetails();
    }, []);

       

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [detailsPerPage] = useState(20);

    const [sorting, setSorting] = useState({field:"", order:""})

    const header = [
        { name: "First Name", field: "first" },
        { name: "Last Name", field: "last" },
        { name: "Age", field: "age" },
        { name: "Email", field: "email" },
        { name: "Website", field: "web" }
    ]

    const indexofLastDetail = currentPage * detailsPerPage;
    const indexofFirstDetail = indexofLastDetail - detailsPerPage;
    const currentDetails = details.slice(indexofFirstDetail, indexofLastDetail);
    const totalDetails= details.length;
    const paginate = (number) => setCurrentPage(number);

    return (
        <UserContext.Provider
            value={{ details, header, detailsPerPage, loading, currentDetails, paginate, totalDetails, currentPage}}
        >
            {children}
        </UserContext.Provider>
    );
}