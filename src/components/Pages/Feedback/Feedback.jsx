import React from "react";
import './Feedback.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const Feedback = () => {
    return (
        <div className={'Feedback_wrapper'}>
        <div className={'Feedback_text'}>
            <span>Обратная связь</span>
            </div>
        <div className={'Meetup_categories'}>

            <a href="https://t.me/feyhoa779"><Button className={'primary-button'}>Хакимов Фаридун</Button></a>
            <a href='tel:+79969184707'><Button className={'primary-button'}>+7 (996) 918-47-07</Button></a>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        </div>
        </div>
    );
};

export default Feedback;