import React from 'react';
import '../styles/home.css'
import imgHome from '../components/images/fotoFernanda.png'
import figure1 from '../components/images/forma1.svg'
import figure2 from '../components/images/forma2.svg'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='content-home'>
        <div className='main-container'>
          <div className='about-me'>
            <div className='content-about'> 
            <h1> I'm <br /> <span>María Fernanda</span> </h1>
            <p>I am a creative and dynamic professional with a passion for teamwork and personal and intellectual growth. As a full-stack web developer and SEO specialist, I love creating innovative solutions that blend technology and design to deliver captivating and simply different experiences
            </p>
            </div>

            <div className="btn-home">
              <button> <i class="fa-brands fa-instagram ins" ></i></button>
              <button><i class="fa-brands fa-linkedin link"></i></button>

            </div>


          </div>

          <div className='img-home'>
            <img src={figure1} alt="" className='figure-1' />
            <img src={imgHome} alt=""  className='image-home' />
            <img src={figure2} alt="" className='figure-2' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;