import React from "react";
import './FAQ.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const FAQ = () => {
    return (
        <div className={'FAQ_wrapper'}>
        <div className={'FAQ_text'}>
            <span>Общая информация</span>
            </div>
        <div className={'FAQ_categories'}>
            <Link to='/faqabout'>
            <Button className={'primary-button'}>Что входит</Button>
            </Link>
            <Button className={'primary-button'}>Карта</Button>
            <Button className={'primary-button'}>Проживание</Button>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        
        </div>
        </div> 
    );
};

export default FAQ;