import React from 'react'
import img from '../images/child.png'
import img2 from '../images/textue.jpg';
import img3 from '../images/texture2.jpg'
import Box from './book'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/Three.js';
import { useTheme } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
function Home() {
    const {values}=useTheme(ThemeContext);
    const texture=useLoader(TextureLoader,img2);
    const texture2=useLoader(TextureLoader,img3)
  return (
    <section>
        <div className='main-Content' style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>
        <div className='main-Content-img'>           
            <img src={img} alt="" />
          </div>
        <div className='main-Content-info' >
          <h1 className='main-Content-h1' style={values('','','#adc0f7','#072F60')}>Al Husnain Academy</h1>
          <p className='main-Content-p' style={values('','','#adc0f7','#072F60')}>An Online Quran Education platform, which provides the facility to Learn Quran Online Islamic and Qur’anic teachings to Muslim students across the world in four languages: English, Persian, Pashto, and Urdu.</p>
          <Link to="/Contact" className='main-Content-btn' style={values('#adc0f7','#072F60','#072F60','#adc0f7')}>
            SCHEDULE A FREE CLASS
          </Link>
          </div>
        </div>
        <div className="quran-Education" style={values('rgb(44, 49, 56)','white','#adc0f7','#072F60')}>
        {/* <img src={img2} alt="" /> */}
        <div className='quran-3d'>
        <Box texture={texture}/>
        </div>
        <div className='quran-education-content' >
            <h3 className='quran-education-content-h3' >Quran Education for all</h3>
            <p><b>Al Hussnain Academy</b>is an Online Quran Education platform, which provides the facility to Learn Quran Online Islamic and Qur’anic teachings to Muslim students across the world. As a leading Online Quran learning Institute, we offer quality Quran teaching to all people of all ages. Our Quran teaching includes the courses in which students are taught how to learn Quran. Initially, we offer a course named Nazirah Qur’an with Tajweed.</p>
           <span> <i className='fa-solid fa-check check-icon'></i> Face-to-face online classes</span>
           <span> <i className='fa-solid fa-check check-icon'></i>Modern teaching tools</span>
           <span> <i className='fa-solid fa-check check-icon'></i> well-educated and well-versed scholars</span>
           <span> <i className='fa-solid fa-check check-icon'></i>  flexible schedule for students</span>
           <span> <i className='fa-solid fa-check check-icon'></i> friendly environment for students</span>
        </div> 
      
          </div>
          <div className="Home-section-3" style={values('#072F60','#adc0f7','#adc0f7','#072F60')}>
            <div className="Home-div">
                <h4><i className='fa-solid fa-book-open home-i'></i></h4>
                <h3 className='Home-div-h3'>Nazirah Quran with Tajweed</h3>
                <p className='Home-div-p'> This course will help Online Quran learners to develop reading skills, from the very basics. Learn Tajweed, with the correct pronunciation and fluency, with the help of our trained teaching staff and impeccable technology.</p>
            </div>
            <div className='Home-div'>
                <h4><i className='fa-solid fa-book-open-reader home-i'></i></h4>
                <h3 className='Home-div-h3'>Fahm-ul-Qur’an</h3>
                <p className='Home-div-p'> With Understand Quran Online Course one can learn about 70% of the words of the Holy Qur’an with the help of TPI methodology and can prepare himself to understand Qur’an without any translation support.</p>
            </div>
            <div className='Home-div'>
                <h4><i className='fa-solid fa-book home-i'></i></h4>
                <h3 className='Home-div-h3'>Hifz-ul-Qur'an</h3>
                <p className='Home-div-p'>The course will help students to memorize Qur'an, with the best methods, with the help of trained teachers.</p>
            </div>
          </div>
          <div className='Home-div-2' style={values('rgb(44, 49, 56)','white','#adc0f7','#072F60')}>
            <div className='Home-div-Content-1' >
            <Box texture={texture2} />
            </div>
            <div className='Home-div-Content-2'>
                <div className="Home-div-Content-info">
                    <h4><i className="fa-solid fa-computer"></i>Unique Teaching Methodology</h4>
                    <p>We have the best learning courses and teaching methodologies on learning of the Holy Quran and Islamic Studies.</p>
                </div>
                <div className="Home-div-Content-info">
                    <h4><i className="fa-solid fa-graduation-cap"></i>Trained Tutors</h4>
                    <p>Well qualified scholars graduated from well reputated universities with years of experience.</p>
                </div>
                <div className="Home-div-Content-info">
                    <h4> <i className="fa-solid fa-chalkboard"></i>Virtual Classroom</h4>
                    <p>Our online learning platform provides one to one live classes using virtual classroom equipped with video communication.</p> 
                </div>
                <div className="Home-div-Content-info">
                    <h4> <i className="fa-solid fa-child-dress" style={{padding:'.5rem 1rem'}}></i>Female Tutors</h4>
                    <p>To facilitate the teaching of female students with qualified female tutors.</p>
                </div>
                <div className="Home-div-Content-info">
                    <h4> <i className="fa-solid fa-thumbs-up"></i>Class Feedback</h4>
                    <p>We aims to ensure quality teaching and learning, for this purpose feedback of every class is shared with the tutor as well as student.</p>
                </div>
                <div className="Home-div-Content-info">
                    <h4><i className="fa-solid fa-laptop"></i>Student Dashboard</h4>
                    <p>Tutor and student dashboards help them to view the classes and their schedule. Booked classes and fee payment history is available.</p>
                </div>

            </div>
          </div>
    </section>
  )
}

export default Home