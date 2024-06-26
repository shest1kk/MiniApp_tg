import React from "react";
import LazyLoad from "react-lazyload";
import './FaqLiving.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import Image from '../../../../assets/3.jpg';

const FaqLiving = () => {
    return (
        <div className={'FaqLiving_wrapper'}>
            <div className={'FaqLiving_image'}>
                <LazyLoad height={200} offset={100}>
                    <img className={'FaqLiving_image_img'}
                        src={Image}
                        alt="123"
                    />
                </LazyLoad>
            </div>
            <div className={'FaqLiving_text'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
                Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
            </div>
            <div className={'FaqLiving-button'}>
                <Link to='/faq'>
                    <Button className={'primary-button'}>Назад</Button>
                </Link>
            </div>
        </div>
    );
};

export default FaqLiving;
