import React from 'react'
import About from "../components/About"
import CallToAction from "../components/CallToAction"
import CertificationCategories from "../components/CertificationCategories"


import FAQ from "../components/FAQ"

import OurServices from "../components/OurServices"

import RecentProjects from "../components/RecentProjects"
import Testimonials from "../components/Testimonials"

import WhyChooseUs from "../components/WhyChooseUs"
import HeroSection from '../components/HeroSection'
import StatsContactBar from "../components/StatsContactBar"


const Home = () => {
    return (
        <div>
            <HeroSection />
            <StatsContactBar />
            <About />
            <OurServices />
            <WhyChooseUs />
            <RecentProjects />
            <Testimonials />
            <CertificationCategories />
            <FAQ />
            <CallToAction />
        </div>
    )
}

export default Home
