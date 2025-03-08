import React from 'react';
import LandingPageBanner from "@components/Banner/landingPageBanner";
import ReservationPanel from "@components/ReservationPanel/MainPanel";
import TypesOfStayPanel from '@components/Types_of_stay/typesOfStayPanel';
import RegionsPanel from '@components/RegionsPanel/regionsPanel';
import NewsPanel from '@components/NewsPanel/newsPanel';
import AboutUs from '@components/AboutUs/aboutUs';

const LandingPage: React.FC = () => {
  return (
    <>
      <LandingPageBanner />
      <ReservationPanel />
      <div className='ml-[50px]'>
        <TypesOfStayPanel />
        <RegionsPanel />
      </div>
      <NewsPanel/>
      <AboutUs/>
    </>
  );
};

export default LandingPage;