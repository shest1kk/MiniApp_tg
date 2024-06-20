import React from "react";
import './FaqLiving.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const FaqLiving = () => {
    return (
        <div className={'FaqLiving_wrapper'}>
        <div className={'FaqLiving_image'}>
        </div>
        <div className={'FaqLiving_text'}>
        </div>
            <div className={'FaqLiving-button'}>
            <Link to='/faq'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default FaqLiving;