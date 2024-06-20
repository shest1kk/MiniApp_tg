import React from "react";
import './GalaDinnerDresscode.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerDresscode = () => {
    return (
        <div className={'GalaDinnerDresscode_wrapper'}>
        <div className={'GalaDinnerDresscode_image'}>
        </div>
        <div className={'GalaDinnerDresscode_text'}>
        </div>
            <div className={'GalaDinnerDresscode-button'}>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default GalaDinnerDresscode;