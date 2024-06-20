import React from "react";
import './MeetupSpeakers.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupSpeakers = () => {
    return (
        <div className={'MeetupSpeakers_wrapper'}>
        <div className={'MeetupSpeakers_image'}>
        </div>
        <div className={'MeetupSpeakers_text'}>
        </div>
            <div className={'MeetupSpeakers-button'}>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default MeetupSpeakers;