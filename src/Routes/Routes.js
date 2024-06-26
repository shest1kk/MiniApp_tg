import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import StartPage from '../components/Pages/StartPage/StartPage';
import AllSection from '../components/Pages/AllSection/AllSection';
import FAQ from '../components/Pages/FAQ/FAQ';
import FaqAbout from '../components/Pages/FAQ/FaqAbout/FaqAbout';
import FaqMap from '../components/Pages/FAQ/FaqMap/FaqMap';
import FaqLiving from '../components/Pages/FAQ/FaqLiving/FaqLiving';
import GalaDinner from '../components/Pages/GalaDinner/GalaDinner';
import GalaDinnerConception from '../components/Pages/GalaDinner/GalaDinnerConception/GalaDinnerConception';
import GalaDinnerDresscode from '../components/Pages/GalaDinner/GalaDinnerDresscode/GalaDinnerDresscode';
import GalaDinnerTiming from '../components/Pages/GalaDinner/GalaDinnerTiming/GalaDinnerTiming';
import Meetup from '../components/Pages/Meetup/Meetup';
import MeetupConception from '../components/Pages/Meetup/MeetupConception/MeetupConception';
import MeetupDiscussion from '../components/Pages/Meetup/MeetupDiscussion/MeetupDiscussion';
import MeetupSpeakers from '../components/Pages/Meetup/MeetupSpeakers/MeetupSpeakers';
import MeetupTiming from '../components/Pages/Meetup/MeetupTiming/MeetupTiming';
import Feedback from '../components/Pages/Feedback/Feedback';

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<StartPageWithAnimation />} />
          <Route path="/sections" element={<AllSectionWithAnimation />} />
          <Route path="/faq" element={<FAQWithAnimation />} />
          <Route path="/faq/about" element={<FaqAboutWithAnimation />} />
          <Route path="/faq/map" element={<FaqMapWithAnimation />} />
          <Route path="/faq/living" element={<FaqLivingWithAnimation />} />
          <Route path="/galadinner" element={<GalaDinnerWithAnimation />} />
          <Route path="/galadinner/conception" element={<GalaDinnerConceptionWithAnimation />} />
          <Route path="/galadinner/dresscode" element={<GalaDinnerDresscodeWithAnimation />} />
          <Route path="/galadinner/timing" element={<GalaDinnerTimingWithAnimation />} />
          <Route path="/meetup" element={<MeetupWithAnimation />} />
          <Route path="/meetup/conception" element={<MeetupConceptionWithAnimation />} />
          <Route path="/meetup/discussion" element={<MeetupDiscussionWithAnimation />} />
          <Route path="/meetup/speakers" element={<MeetupSpeakersWithAnimation />} />
          <Route path="/meetup/timing" element={<MeetupTimingWithAnimation />} />
          <Route path="/feedback" element={<FeedbackWithAnimation />} />
        </Routes>
      </Router>
    );
  }
  
  const motionVariants = {
    initial: {
      opacity: 0,
      x: 100,
      display: 'flex',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const StartPageWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="start-page"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <StartPage />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const AllSectionWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="all-section"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <AllSection />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const FAQWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="faq"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <FAQ />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const FaqAboutWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="faq-about"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <FaqAbout />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const FaqMapWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="faq-map"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <FaqMap />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const FaqLivingWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="faq-living"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <FaqLiving />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const GalaDinnerWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="gala-dinner"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <GalaDinner />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const GalaDinnerConceptionWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="gala-dinner-conception"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <GalaDinnerConception />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const GalaDinnerDresscodeWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="gala-dinner-dresscode"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <GalaDinnerDresscode />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const GalaDinnerTimingWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="gala-dinner-timing"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <GalaDinnerTiming />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const MeetupWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="meetup"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <Meetup />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const MeetupConceptionWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="meetup-conception"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <MeetupConception />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const MeetupDiscussionWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="meetup-discussion"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <MeetupDiscussion />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const MeetupSpeakersWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="meetup-speakers"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <MeetupSpeakers />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const MeetupTimingWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="meetup-timing"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <MeetupTiming />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  const FeedbackWithAnimation = () => {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key="feedback"
          initial={motionVariants.initial}
          animate={motionVariants.animate}
          exit={motionVariants.exit}
        >
          <Feedback />
        </motion.div>
      </AnimatePresence>
    );
  }
  
  export default AppRoutes;