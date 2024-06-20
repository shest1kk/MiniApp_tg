import React from "react";
import './Meetup.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const Meetup = () => {
    return (
        <div className={'Meetup_wrapper'}>
        <div className={'Meetup_text'}>
            <span>Конференция</span>
            </div>
        <div className={'Meetup_categories'}>
            <Button className={'primary-button'}>Концепция</Button>
            <Button className={'primary-button'}>Спикеры</Button>
            <Button className={'primary-button'}>Панельная дискуссия</Button>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        </div>
        </div>
    );
};

export default Meetup;