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
                <div className="FaqAbout_text_wrapper">
                <div className="FaqAbout_text_Eating">
                🍽️ Питание:
                <ul>
                    <li>завтрак</li>
                    <span className={'details'}>с 8:00 - 10:00</span>
                    <li>обед</li>
                    <span className={'details'}>с 13:00 - 15:00</span>
                </ul>
                </div>
                <div className="FaqAbout_text_Gym">
                🏋Тренажерный зал<br />
                <span className={'details'}>круглосуточно</span>
                </div>
                <div className="FaqAbout_text_Games">
                💪Спортивные игры:
                <ul>
                    <li>Бильярд - американский пул с профессиональным маркером</li>
                    <span className={'details'}>круглосуточно</span>
                    <li>Настольный теннис</li>
                </ul>
            </div>
            <div className={'FaqAbout-button'}>
                <Link to='/faq'>
                    <Button className={'primary-button'}>Назад</Button>
                </Link>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default FaqAbout;
