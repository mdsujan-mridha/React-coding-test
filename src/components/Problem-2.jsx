import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ModalComponent from './ModalComponent';
import { Link } from 'react-router-dom';



Modal.setAppElement('#root');



const Problem2 = () => {
    const [modalIsOpenA, setIsOpenA] = useState(false);
    const [modalIsOpenB, setIsOpenB] = useState(false);
    const [modalIsOpenC, setIsOpenC] = useState(false);
    const [dataA, setDataA] = useState([]);
    const [dataB, setDataB] = useState([]);
    const [checked, setChecked] = useState(false);


    // Fetching data from the API
    useEffect(() => {
        const fetchDataA = async () => {
            const result = await axios('https://contact.mediusware.com/api-doc/all');
            setDataA(result.data);
        };

        const fetchDataB = async () => {
            const result = await axios('https://contact.mediusware.com/api-doc/us');
            setDataB(result.data);
        };

        fetchDataA();
        fetchDataB();
    }, []);

    // functions for handling modals, checkboxes, and API data

    const openModalA = () => {
        setIsOpenA(true);
    };

    const openModalB = () => {
        setIsOpenB(true);
    };

    const openModalC = () => {
        setIsOpenC(true);
    };

    const closeModalA = () => {
        setIsOpenA(false);
    };

    const closeModalB = () => {
        setIsOpenB(false);
    };

    const closeModalC = () => {
        setIsOpenC(false);
    };
    // Function to handle the checkbox change
    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
    // Function to handle API data fetching with pagination

    const fetchDataWithPagination = async (url, setData) => {
        try {
            const response = await axios.get(url);
            const newData = response.data; 
            setData((prevData) => [...prevData, ...newData]); // Append new data to the existing data
        } catch (error) {
            // Handle error
            console.error("Error fetching data: ", error);
        }
    };
    // Function to handle searching contacts
    const handleSearch = (event, dataList, setData) => {
        const searchQuery = event.target.value.toLowerCase(); 
        if (searchQuery === '') {
            // If the search input is empty, reset the data to the original full list
            
            setData(dataList);
        } else {
            // Filter the data based on the search query
            
            const filteredData = dataList.filter(
                (contact) => contact.name.toLowerCase().includes(searchQuery)
            );
            setData(filteredData);
        }
    };

    const handleScroll = (event, page, setPage, fetchData) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            const nextPage = page + 1;
            setPage(nextPage); 
            // Call the fetchData function to fetch data for the next page
          
            fetchData(`https://contact.mediusware.com/api-doc/all?page=${nextPage}`);
        }
    };

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">

                    <button  className="btn btn-lg btn-outline-primary" type="button" onClick={openModalA}>All Contacts</button>
                    <ModalComponent
                        isOpen={modalIsOpenA}
                        closeModal={closeModalA}
                        title="Modal A"
                        data={dataA}
                    />

                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={openModalB} >US Contacts</button>
                    <ModalComponent
                        isOpen={modalIsOpenB}
                        closeModal={closeModalB}
                        title="Modal B"
                        data={dataB}
                    />
                </div>

            </div>
        </div>
    );
};

export default Problem2;