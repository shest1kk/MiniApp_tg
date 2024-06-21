import StartPage from '../components/Pages/StartPage/StartPage';
import AllSection from '../components/Pages/AllSection/AllSection';

import Feedback from '../components/Pages/Feedback/Feedback';

import Meetup from '../components/Pages/Meetup/Meetup';
import MeetupConception from '../components/Pages/Meetup/MeetupConception/MeetupConception';
import MeetupDiscussion from '../components/Pages/Meetup/MeetupDiscussion/MeetupDiscussion';
import MeetupSpeakers from '../components/Pages/Meetup/MeetupSpeakers/MeetupSpeakers';
import MeetupTiming from '../components/Pages/Meetup/MeetupTiming/MeetupTiming';

import FAQ from '../components/Pages/FAQ/FAQ';
import FaqAbout from '../components/Pages/FAQ/FaqAbout/FaqAbout';
import FaqMap from '../components/Pages/FAQ/FaqMap/FaqMap';
import FaqLiving from '../components/Pages/FAQ/FaqLiving/FaqLiving';

import GalaDinner from '../components/Pages/GalaDinner/GalaDinner';
import GalaDinnerConception from '../components/Pages/GalaDinner/GalaDinnerConception/GalaDinnerConception';
import GalaDinnerDresscode from '../components/Pages/GalaDinner/GalaDinnerDresscode/GalaDinnerDresscode';
import GalaDinnerTiming from '../components/Pages/GalaDinner/GalaDinnerTiming/GalaDinnerTiming';

import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route index element={<StartPage />} />
            <Route path={'sections'} element={<AllSection />} />
            
            <Route path={'faq'} element={<FAQ />} />
            <Route path={'faq/about'} element={<FaqAbout />} />
            <Route path={'faq/map'} element={<FaqMap />} />
            <Route path={'faq/living'} element={<FaqLiving />} /> 

            <Route path={'galadinner'} element={<GalaDinner />} />
            <Route path={'galadinner/conception'} element={<GalaDinnerConception />} /> 
            <Route path={'galadinner/dresscode'} element={<GalaDinnerDresscode />} /> 
            <Route path={'galadinner/timing'} element={<GalaDinnerTiming />} /> 
            
            <Route path={'meetup'} element={<Meetup />} />
            <Route path={'meetup/conception'} element={<MeetupConception />} />
            <Route path={'meetup/discussion'} element={<MeetupDiscussion />} />
            <Route path={'meetup/speakers'} element={<MeetupSpeakers />} />
            <Route path={'meetup/timing'} element={<MeetupTiming />} />

            <Route path={'feedback'} element={<Feedback />} />
        </>
    )
);

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default AppRoutes;
