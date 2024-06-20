import React from "react";
import './FaqAbout.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const FaqAbout = () => {
    return (
        <div className={'FaqAbout_wrapper'}>
        <div className={'FaqAbout_image'}>
        <img className={'FaqAbout_image_img'}
                src={require('../../../../assets/background-main.jpg')}
                alt="FaqAbout"
                />
        </div>
        <div className={'FaqAbout_text'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Ex sunt, cum quaerat excepturi vitae et accusantium perspiciatis! Sequi, dolores itaque facilis nulla, 
            et odio optio esse non laborum fugiat ipsam.
        </div>
            <div className={'FaqAbout-button'}>
            <Link to='/FAQ'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default FaqAbout;