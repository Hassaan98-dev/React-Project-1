import React, { useState } from 'react'
import img1 from '../images/course-1.jpg'
import img2 from '../images/course-2.jpg'
import img3 from '../images/course-3.jpg'
import img4 from '../images/course-4.jpg'
import img5 from '../images/course-5.jpg'
import img6 from '../images/course-6.jpg'
import Form from './Form'
import { useTheme } from '../Context/ThemeContext'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
function Courses() {
    const [popup,setpopup]=useState(false)
    const {values}=useTheme(ThemeContext);
    function handleEnrollClick(){
        document.body.style.overflow='auto';
        setpopup(true);
    }
  return (
    <>
    <section className='courses-section' style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>
        <div className="courses-div">
        <div className="course-div" style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            <img src={img1} alt="" />
            <h3>BASIC NOORANI QAIDA COURSE</h3>
            <p>Noorani Qaida Course is designed for kids and adults (males and females) who want to start as a beginner.</p>
            <Link to='/Contact' onClick={handleEnrollClick} className='course-link'  style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>Enroll Now</Link>
        </div>
        <div className="course-div" style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            <img src={img2} alt="" />
            <h3>QURAN READING COURSE</h3>
            <p>Online Quran Reading Course is designed for the students who want to improve Quran Reading with tajweed.</p>
            <Link to='/Contact' onClick={handleEnrollClick} className='course-link' style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>Enroll Now</Link>
        </div>
        <div className="course-div" style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            <img src={img3} alt="" />
            <h3>QURAN MEMORIZATION COURSE</h3>
            <p>Quran Memorization Course is designed for the students who want to memorize the whole Quran by heart</p>
            <Link  to='/Contact ' onClick={handleEnrollClick} className='course-link' style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>Enroll Now</Link>
        </div>
        <div className="course-div" style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            <img src={img4} alt="" />
            <h3>QURAN TRANSLATION COURSE</h3>
            <p>Quran Translation Course is designed for the students who want to understand the Quran verse by verse in urdu or in english</p>
            <Link  to='/Contact'onClick={handleEnrollClick} className='course-link' style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>Enroll Now</Link>
        </div>
        <div className="course-div" style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            <img src={img5} alt="" />
            <h3>RULES OF TAJWEED COURSE</h3>
            <p>Quran Memorization Course is designed for the students who want to memorize the whole Quran by heart.</p>
            <Link to='/Contact' className='course-link' onClick={handleEnrollClick} style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>Enroll Now</Link>
        </div>
        <div className="course-div" style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            <img src={img6} alt="" />
            <h3>ISLAMIC STUDIES FOR KIDS COURSE</h3>
            <p>Islamic Studies for kids Course is specially designed for the Muslim children who want to learn basics of Islam.</p>
            <Link to='/Contact' onClick={handleEnrollClick} className='course-link' style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>Enroll Now</Link>
        </div>
        </div>
    </section>
 
    </>
  )
}

export default Courses