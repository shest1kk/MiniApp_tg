import React from "react";
import './FaqMap.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const FaqMap = () => {
    return (
        <div className={'FaqLiving_wrapper'}>
            <div className="FaqLiving-pdf-container">
                <div className="FaqLiving-image">
                    <img src="/assets/hotel.jpg" alt="123"></img>
                </div>
            </div>
            {/* <div className={'FaqLiving_image'}>
                <div className={"FaqLiving_headerText"}>
                    <img className={'FaqLiving_headerText_img'} 
                         src='/assets/living.svg'
                         alt='123'/>
                </div>
                <img className={'FaqLiving_image_img'}
                     src='/assets/logo.svg'
                     alt="123"/>
            </div> */}
            <div className={'FaqLiving_text'}>
                        <Link to='/faq'>
                            <Button className={'primary-button'}>Назад</Button>
                        </Link>
            </div>
        </div>
    );
};

export default FaqMap;