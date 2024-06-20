import React from "react";
import './AllSection.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const AllSection = () => {
    return (
        <div classname={'categories_wrapper'}>
        <div className={'categories_text'}>
            <span>Выбери раздел</span>
            </div>
            <div className={'categories_button'}>
            <Link to="/faq">
            <Button className={'primary-button'}>Общая информация</Button>
            </Link>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Гала-ужин</Button>
            </Link>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Конференция</Button>
            </Link>
            <Link to='/feedback'>
            <Button className={'primary-button'}>Обратная связь</Button>
            </Link>
        
        </div>
        </div>
    );
};

export default AllSection;