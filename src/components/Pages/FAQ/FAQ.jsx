import React from "react";
import './FAQ.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const FAQ = () => {
    return (
        <div className={'FAQ_wrapper'}>
        <div className={'FAQ_image'}>
        <img className={'Faq_image_img'}
            src={require('../../../assets/1.jpg')}
            alt="123"
                />
        </div>
        <div className={'FAQ_text'}>
            <span>Общая информация</span>
            </div>
        <div className={'FAQ_categories'}>
            <Link to='about'>
            <Button className={'primary-button'}>Что входит</Button>
            </Link>
            <Link to='map'>
            <Button className={'primary-button'}>Карта</Button>
            </Link>
            <Link to='living'>
            <Button className={'primary-button'}>Проживание</Button>
            </Link>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        
        </div>
        </div> 
    );
};

export default FAQ;