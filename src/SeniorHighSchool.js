import * as React from "react";
import img1 from './images/grad1.jpg';
import img2 from './images/cert2.jpg';
import img3 from './images/grad2.jpg';
import img4 from './images/honors1.jpg';
import img5 from './images/gang.jpg';
import img6 from './images/honors2.jpg';
import img7 from './images/rehersal.jpg';
import img8 from './images/lyre.jpg';
import img9 from './images/band.jpg';
import img10 from './images/sfnhs.png';

function Education() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(192, 192, 192, 0.5)', padding: '10px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>My Senior High School Life Experience</h1>
        <p style={{ color: 'white' }}>
        Senior high school is a time of change as you become more grown-up. 
           You get to learn about different subjects and jobs, figuring out what you're good at and what you like.            It's also when you make friends, have fun, and join clubs or sports teams. 
           Senior high school gets you ready for what comes next, whether it's college, work, or something else.
          It's a time when you grow, learn, and get ready for the future.
        </p>
        <img src={img10} alt="Elementary School" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
        <p style={{ color: 'white' }}>Visit the San Fernando National High School Facebook Page</p>
        <a href="https://www.facebook.com/sanfernandonhs1966" target="_blank" rel="noopener noreferrer" 
        style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', 
        textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'white' }}>SHS Graduation Online 2020 - 2021</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <img src={img1} alt="With my Brother" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>With Honors</h3>
          </div>
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <img src={img2} alt="Certificate" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Certificate</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={img3} alt="Certificate" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Online Graduation</h3>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'white' }}>Recognition Rates</h1>
        <p style={{ color: 'white' }}>
        Being a student with honors is a great accomplishment and a testament to hard work and dedication.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <img src={img4} alt="Champion" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>With Honors</h3>
          </div>
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <img src={img5} alt="Teammates" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Friendship Goals</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={img6} alt="Teammates" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>With Honors</h3>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'white' }}>DXC/DLC Band</h1>
        <p style={{ color: 'white' }}>
        Being a part of the DXC/DLC Band is not only a great experience in senior high school 
        but also an opportunity for personal growth and skill development. It allows students 
        to collaborate with peers, express their creativity through music, and showcase their 
        talent in various performances. Moreover, participating in the band cultivates teamwork, discipline, 
        and a strong sense of camaraderie among its members.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'white' }}>Rehearsal and Parade in Pasacao 2018</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <img src={img7} alt="5th Place" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Rehearsal</h3>
          </div>
          <div style={{ textAlign: 'center', marginRight: '20px' }}>
            <img src={img8} alt="5th Place" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Im proud to be part of DXC/DLC Band of SFNHS</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={img9} alt="Best in Marching" style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Parade in Pasacao</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
