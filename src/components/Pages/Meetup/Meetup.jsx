import React from "react";
import './Meetup.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const Meetup = () => {
    return (
        <div className={'Meetup_wrapper'}>
            <div className={'Meetup_image'}>
        <img className={'Meetup_image_img'}
            src={require('../../../assets/8.jpg')}
            alt="123"
                />
        </div>
        <div className={'Meetup_text'}>
            <span>Конференция</span>
            </div>
        <div className={'Meetup_categories'}>
            <Link to='conception'>
            <Button className={'primary-button'}>Концепция</Button>
            </Link>
            <Link to='speakers'>
            <Button className={'primary-button'}>Спикеры</Button>
            </Link>
            <Link to='discussion'>
            <Button className={'primary-button'}>Панельная дискуссия</Button>
            </Link>
            <Link to='timing'>
            <Button className={'primary-button'}>Тайминги</Button>
            </Link>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        </div>
        </div>
    );
};

export default Meetup;