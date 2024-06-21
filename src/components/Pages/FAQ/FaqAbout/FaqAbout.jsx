    import React from "react";
    import './FaqAbout.css';
    import Button from '../../../Buttons/Button';
    import { Link, useLoaderData } from "react-router-dom";


    const FaqAbout = () => {
        const FaqAbout_image_img = useLoaderData()
        return (
            <div className={'FaqAbout_wrapper'}>
            <div className={'FaqAbout_image'}>
            <img className={'FaqAbout_image_img'}
                src={FaqAbout_image_img}
                alt="123"
                    />
            </div>
            <div className={'FaqAbout_text'}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
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


const FaqAboutLoader = async ({request, params}) => {
    const img = new Image();
    img.src = require('../../../../assets/background-main.jpg');
}
    export default (FaqAbout, FaqAboutLoader);