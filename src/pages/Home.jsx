import React from 'react'
import About from "../components/About"
import CallToAction from "../components/CallToAction"
import CertificationCategories from "../components/CertificationCategories"
import CertificationsSection from "../components/CertificationsSection"
import Details from "../components/Details"
import FAQ from "../components/FAQ"
import Gallery from "../components/Gallery"
import OurServices from "../components/OurServices"
import PRSection from "../components/PRSection"
import RecentProjects from "../components/RecentProjects"
import Testimonials from "../components/Testimonials"
import TrustedBy from "../components/TrustedBy"
import WhyChooseUs from "../components/WhyChooseUs"
import HeroSection from '../components/HeroSection'
import StatsContactBar from "../components/StatsContactBar"


const Home = () => {
    return (
        <div>
            <HeroSection />
            <StatsContactBar />
            <OurServices />
            <About />
            <RecentProjects />
          
         
           
            <WhyChooseUs />
            <Testimonials />
            <CertificationCategories />
           
          
            <FAQ />
            <CallToAction />
        </div>
    )
}

export default Home
