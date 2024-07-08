import React from "react";
import './GalaDinner.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinner = () => {
    return (
        <div className={'GalaDinner_wrapper'}>
            <div className={'GalaDinner_image'}>
            <img className={'GalaDinner_image_img'}
            src='/assets/logo.svg'
            alt="123"
                />
            </div>
        <div className={'GalaDinner_text'}>
            <span>Гала-ужин</span>
        </div>
        <div className={'GalaDinner_categories'}>
            <Link to="dresscode">
            <Button className={'primary-button'}>Дресскод</Button>
            </Link>
            <Link to='timing'>
            <Button disabled='true' className={'primary-button'}>Тайминги</Button>
            </Link>
            <Link to='where'>
            <Button disabled='true' className={'primary-button'}>Где находится</Button>
            </Link>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        </div>
        </div>
    );
};

export default GalaDinner;