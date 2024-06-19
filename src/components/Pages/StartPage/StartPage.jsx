import React, { useEffect } from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";

const StartPage = () => {
    const { user, tg } = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Тест"
        });

        const handleMainButtonClick = () => {
            tg.web_app_setup_closing_behavior();
        };

        tg.MainButton.onClick(handleMainButtonClick);
        tg.MainButton.show();

        return () => {
            tg.MainButton.offClick(handleMainButtonClick);
            tg.MainButton.hide();
        };
    }, [tg]);

    return (
        <div className="startPage">
            <div className="startPage-logo">
                <img 
                    className="startPage-logo-img"
                    src={require('../../../assets/logo.png')}
                    alt="Логотип ЭйКей"
                />
            </div>
            <div className="startPage-wrapper">
                <div className="startPage-username"><b>Привет, {user?.first_name}!</b></div>
                <div className="startPage-description">Здесь ты можешь узнать подробную информацию о мероприятии SSM2024</div>
    
                {/* <Link to="/sections"> */}
                    <Button className="primary-button" onClick={() => tg.web_app_setup_closing_behavior()}>
                        Перейти к разделам
                    </Button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default StartPage;
