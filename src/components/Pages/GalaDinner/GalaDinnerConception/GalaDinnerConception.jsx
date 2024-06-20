import React from "react";
import './GalaDinnerConception.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerConception = () => {
    return (
        <div className={'GalaDinnerConception_wrapper'}>
        <div className={'GalaDinnerConception_image'}>
        </div>
        <div className={'GalaDinnerConception_text'}>
        </div>
            <div className={'GalaDinnerConception-button'}>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default GalaDinnerConception;