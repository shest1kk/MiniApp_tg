import React from "react";
import './GalaDinnerTiming.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerTiming = () => {
    return (
        <div className={'GalaDinnerTiming_wrapper'}>
        <div className={'GalaDinnerTiming_image'}>
        </div>
        <div className={'GalaDinnerTiming_text'}>
        </div>
            <div className={'GalaDinnerTiming-button'}>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default GalaDinnerTiming;