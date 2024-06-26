import React from "react";
import './GalaDinnerDresscode.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerDresscode = () => {
    return (
        <div className={'GalaDinnerDresscode_wrapper'}>
        <div className={'GalaDinnerDresscode_image'}>
        <img className={'GalaDinnerDresscode_image_img'}
            src='/assets/6.jpg'
            alt="123"
                />
        </div>
        <div className={'GalaDinnerDresscode_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
        </div>
            <div className={'GalaDinnerDresscode-button'}>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default GalaDinnerDresscode;