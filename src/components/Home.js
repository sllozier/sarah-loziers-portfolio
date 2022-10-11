import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import ProjectGrid from './ProjectGrid';
import CallToAction from './CallToAction';


const Home = () => {

    return(
        <>
         <Hero />
        <AboutMe />
        <Technologies />
        <ProjectGrid />
        <CallToAction />
        </>
       
    )
};

export default Home;