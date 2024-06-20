import React from "react";
import './GalaDinner.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinner = () => {
    return (
        <div className={'GalaDinner_wrapper'}>
        <div className={'GalaDinner_text'}>
            <span>Гала-ужин</span>
        </div>
        <div className={'GalaDinner_categories'}>
            
            <Button className={'primary-button'}>Концепция</Button>
            <Button className={'primary-button'}>Дресскод</Button>
            <Button className={'primary-button'}>Тайминги</Button>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        </div>
        </div>
    );
};

export default GalaDinner;