import React, { useEffect } from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";

const StartPage = () => {
    const { user, tg } = useTelegram();

    useEffect(() => {

        return () => {};
    }, [tg]);

    return (
        <div className="StartPage_wrapper">
            <div className="StartPage_image">
                <img 
                    className="StartPage_image_img"
                    src={require('../../../assets/logo.png')}
                    alt="Логотип ЭйКей"
                />
            </div>
            <div className="StartPage_text_wrapper">
                <div className="StartPage_username"><b>Привет, {user?.first_name}!</b></div>
                <div className="StartPage_description">Здесь ты можешь узнать подробную информацию о мероприятии SSM2024</div>
    
                <Link to="/sections">
                    <Button className={'primary-button'}>
                        Перейти к разделам
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default StartPage;
