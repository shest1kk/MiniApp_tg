import React from "react";
import './MeetupDiscussion.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupDiscussion = () => {
    return (
        <div className={'MeetupDiscussion_wrapper'}>
        <div className={'MeetupDiscussion_image'}>
        <img className={'MeetupDiscussion_image_img'}
            src='/assets/11.jpg'
            alt="123"
                />
        </div>
        <div className={'MeetupDiscussion_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
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