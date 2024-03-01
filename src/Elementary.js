import * as React from "react";
// import img1 from './images/grad1.jpg';
// import img2 from './images/cert2.jpg';
// import img3 from './images/grad2.jpg';
// import img4 from './images/honors1.jpg';
// import img5 from './images/gang.jpg';
// import img6 from './images/honors2.jpg';
// import img7 from './images/rehersal.jpg';
// import img8 from './images/lyre.jpg';
// import img9 from './images/band.jpg';
import img10 from './images/sfcs.png';

function Education() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="content" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(192, 192, 192, 0.5)', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>My Elementary School Life Experience</h1>
        <p style={{ textAlign: 'center' }}>
        My elementary school experience was an unforgettable journey filled with laughter, 
        friendship, and discovery. It was a time of innocence and wonder, where every day brought 
        new adventures and opportunities to learn. From playground games to classroom lessons, 
        each moment helped shape who I am today.
        </p>
        <p>
          Building friendships that lasted a lifetime and creating memories that I'll cherish forever, elementary school laid the foundation for my future endeavors. The supportive environment and dedicated teachers nurtured my curiosity and instilled in me a lifelong love for learning.
        </p>
        <img src={img10} alt="Elementary School" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />

        <p>Visit the San Fernando Central School Facebook Page</p>
        <a href="https://www.facebook.com/sfcentralschool" target="_blank" rel="noopener noreferrer" 
        style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', 
        textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
      </div>

      {/* <div className="row">
        <div className="col">
          <h1>SHS Graduation Online 2020 - 2021</h1>
          <div className="row">
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img1} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>With Honors</h3>
              </div>
            </div>
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img2} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Certificate</h3>
              </div>
            </div>
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img3} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Online Graduation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1>With Honors</h1>
          <p>
            Being a student with honors is a great accomplishment and a testament to hard work and dedication.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1>Recognition Rates with my Grandmother</h1>
          <div className="row">
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img4} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>With Honors</h3>
              </div>
            </div>
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img5} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Friendship Goals</h3>
              </div>
            </div>
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img6} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>With Honors</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1>DXC/DLC Band</h1>
          <p>
            Being a part of the DXC/DLC Band is not only a great experience in senior high school 
            but also an opportunity for personal growth and skill development. It allows students 
            to collaborate with peers, express their creativity through music, and showcase their 
            talent in various performances. Moreover, participating in the band cultivates teamwork, discipline, 
            and a strong sense of camaraderie among its members. 
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1>Rehearsal and Parade in Pasacao 2018</h1>
          <div className="row">
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img7} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Rehearsal</h3>
              </div>
            </div>
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img8} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Im proud to be part of DXC/DLC Band of SFNHS</h3>
              </div>
            </div>
            <div className="col">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={img9} alt="" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
                <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Parade in Pasacao</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Education;
