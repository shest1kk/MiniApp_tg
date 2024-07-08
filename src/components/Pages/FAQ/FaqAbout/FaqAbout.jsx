import React from "react";
import './FaqAbout.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const FaqAbout = () => {
    return (
        <div className={'FaqAbout_wrapper'}>
            <div className={'FaqAbout_image'}>
                <div className="FaqAbout_headerText">
                    <img classname={'FaqAbout_headerText_img'} 
                    src='/assets/testimfonts.svg'
                    alt='123'/>
                </div>
                <img className={'FaqAbout_image_img'}
                    src='/assets/logo.svg'
                    alt="123"
                />
            </div>
            <div className={'FaqAbout_text'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
                Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
            </div>
            <div className={'FaqAbout-button'}>
                <Link to='/faq'>
                    <Button className={'primary-button'}>Назад</Button>
                </Link>
            </div>
        </div>
    );
};

export default FaqAbout;
