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


const Home = () => {
    return (
        <div>
            <HeroSection />
            <OurServices />
            <About />
            <RecentProjects />
            <PRSection />
            <Gallery />
            <Details />
            <WhyChooseUs />
            <Testimonials />
            <CertificationCategories />
            <CertificationsSection />
            <TrustedBy />
            <FAQ />
            <CallToAction />
        </div>
    )
}

export default Home
