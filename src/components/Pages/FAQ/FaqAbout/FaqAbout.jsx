import React from "react";
import './FaqAbout.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const FaqAbout = () => {
    return (
        <div className={'FaqAbout_wrapper'}>
        <div className={'FaqAbout_image'}>
        </div>
        <div className={'FaqAbout_text'}>
        </div>
            <div className={'FaqAbout-button'}>
            <Link to='/FAQ'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default FaqAbout;