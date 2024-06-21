import React from "react";
import './FaqMap.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import Image from '../../../../assets/2.jpg';

const FaqMap = () => {
    return (
        <div className={'FaqMap_wrapper'}>
        <div className={'FaqMap_image'}>
        <img className={'FaqMap_image_img'}
            src={Image}
            alt="123"
                />
        </div>
        <div className={'FaqMap_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
        </div>
            <div className={'FaqMap-button'}>
            <Link to='/faq'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default FaqMap;