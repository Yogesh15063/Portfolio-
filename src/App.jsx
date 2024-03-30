import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/Contact'
import { HeroSection } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/Services';
import { SkillsSection } from './components/Skill';
import { TestimonialSlider } from './components/Testimonial';
import { TimelineSection } from './components/Timeline';
import { AboutSection } from './components/About';
import { ParticlesComponent } from './components/particles';
import { Projects } from './components/Project';
import Footer from './components/Footer';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUserData(data.user);
        } else {
          // Handle the error or set some default state
          console.error('API did not return success');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <ParticlesComponent id='particle'/>
      <Navbar />
      {userData.about && (
        <HeroSection id='hero'
          developerImage={userData.about.avatar?.url}
          developerName={userData.about.name}
          developerTitle={userData.about.title}
          developerSubtitle={userData.about.subtitle}
        />
      )}
      <AboutSection id='about' developerInfo={userData.about} />
      <SkillsSection id='skills' skills={userData.skills} />
      <Projects id='projects' projectData={userData.projects}/>
      <ServicesSection id='services' services={userData.services} />
      <TimelineSection id='timeline' timeline={userData.timeline} />
      <TestimonialSlider id='testimonials' testimonials={userData.testimonials} />
      <ContactForm id='contact'/>
      <Footer/>
    </>
  );
}

export default App;
