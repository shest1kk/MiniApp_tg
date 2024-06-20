import React from "react";
import './MeetupTiming.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupTiming = () => {
    return (
        <div className={'MeetupTiming_wrapper'}>
        <div className={'MeetupTiming_image'}>
        </div>
        <div className={'MeetupTiming_text'}>
        </div>
            <div className={'MeetupTiming-button'}>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default MeetupTiming;