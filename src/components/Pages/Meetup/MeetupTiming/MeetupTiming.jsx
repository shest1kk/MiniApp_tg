import React from "react";
import './MeetupTiming.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupTiming = () => {
    return (
        <div className={'MeetupTiming_wrapper'}>
        <div className={'MeetupTiming_image'}>
        <img className={'MeetupTiming_image_img'}
            src={require('../../../../assets/12.jpg')}
            alt="123"
                />
        </div>
        <div className={'MeetupTiming_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
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