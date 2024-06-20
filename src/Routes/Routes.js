import StartPage from '../components/Pages/StartPage/StartPage';
import AllSection from '../components/Pages/AllSection/AllSection';
import FAQ from '../components/Pages/FAQ/FAQ';
import GalaDinner from '../components/Pages/GalaDinner/GalaDinner';
import Meetup from '../components/Pages/Meetup/Meetup';
import Feedback from '../components/Pages/Feedback/Feedback';

import { Route, Routes } from 'react-router-dom';
import FaqAbout from '../components/Pages/FAQ/FaqAbout/FaqAbout';

const AppRoutes = () => {
        return (
<Routes>
        <Route index element={<StartPage />}/>
        <Route path={'sections'} element={<AllSection />}/>
        <Route path={'faq'} element={<FAQ />} />
        <Route path={'galadinner'} element={<GalaDinner />} />
        <Route path={'meetup'} element={<Meetup />} />
        <Route path={'feedback'} element={<Feedback />} />
        <Route path={'faqabout'} element={<FaqAbout />} />
</Routes>
        )
}

export default AppRoutes;
