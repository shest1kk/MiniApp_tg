import React from "react";
import './MeetupDiscussion.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupDiscussion = () => {
    return (
        <div className={'MeetupDiscussion_wrapper'}>
        <div className={'MeetupDiscussion_image'}>
        </div>
        <div className={'MeetupDiscussion_text'}>
        </div>
            <div className={'MeetupDiscussion-button'}>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default MeetupDiscussion;