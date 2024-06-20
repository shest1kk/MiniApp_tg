import React from "react";
import './MeetupConception.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupConception = () => {
    return (
        <div className={'MeetupConception_wrapper'}>
        <div className={'MeetupConception_image'}>
        </div>
        <div className={'MeetupConception_text'}>
        </div>
            <div className={'MeetupConception-button'}>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default MeetupConception;