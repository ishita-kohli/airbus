
import React, { useRef } from "react";
import './Search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons'; 
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';// The faUsers icon represents a group of people
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert("All fields are required !")
        }
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
        if (!res.ok) alert("something went wrong");

        const result = await res.json();

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data }
        );
    };



    // return <Col lg='12'>
        {/* <div className='search__bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#81b254" }} />

                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where you want to go?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                    <FontAwesomeIcon icon={faWallet} style={{ color: "#81b254" }} />
                    </span>
                    <div>
                        <h6>Budget</h6>
                        <input type="number" placeholder='Enter your budget...'  ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                    <FontAwesomeIcon icon={faUsers} style={{ color: "#81b254" }} />
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>

                <span className='search__icon' type="submit"
                    onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form> */}

        {/* </div> */}
    {/* </Col> */}

};

export default SearchBar