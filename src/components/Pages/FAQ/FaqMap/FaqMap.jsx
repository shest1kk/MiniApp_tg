import React from "react";
import './FaqMap.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const FaqMap = () => {
    return (
        <div className={'FaqMap_wrapper'}>
        <div className={'FaqMap_image'}>
        </div>
        <div className={'FaqMap_text'}>
        </div>
            <div className={'FaqMap-button'}>
            <Link to='/faq'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default FaqMap;