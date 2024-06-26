import React from "react";
import './GalaDinner.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinner = () => {
    return (
        <div className={'GalaDinner_wrapper'}>
            <div className={'GalaDinner_image'}>
            <img className={'GalaDinner_image_img'}
            src='/assets/4.jpg'
            alt="123"
                />
            </div>
        <div className={'GalaDinner_text'}>
            <span>Гала-ужин</span>
        </div>
        <div className={'GalaDinner_categories'}>
            <Link to="conception">
            <Button className={'primary-button'}>Концепция</Button>
            </Link>
            <Link to='dresscode'>
            <Button className={'primary-button'}>Дресскод</Button>
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

export default GalaDinner;