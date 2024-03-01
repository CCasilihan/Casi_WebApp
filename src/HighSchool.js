import * as React from "react";
import img1 from './images/movingup.jpg';
import img2 from './images/movingup1.jpg';
import img4 from './images/bball.jpg';
import img5 from './images/bball1.jpg';
import img7 from './images/band1.jpg';
import img8 from './images/band2.jpg';
import img9 from './images/sfnhs.png';

function Education() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(192, 192, 192, 0.5)', padding: '10px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>My Junior High School Life Experience</h1>
        <p style={{ color: 'white' }}>
          Junior high school was an incredibly memorable time for me, filled with both challenges 
          and moments of growth. It was a period of transition where I began to explore my interests 
          and develop my personality. From navigating new friendships to discovering my academic strengths,
           every experience left a lasting impression on me. Participating in extracurricular activities like 
           sports teams or clubs enriched my education beyond the classroom, teaching me valuable lessons in 
           teamwork and time management. I also encountered setbacks and learned the importance of resilience 
           and perseverance in the face of obstacles. Overall, my junior high school years were formative, 
          shaping me into the person I am today and laying the foundation for my future endeavors.
        </p>
        <img src={img9} alt="Elementary School" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
        <p style={{ color: 'white' }}>Visit the San Fernando National High School Facebook Page</p>
        <a href="https://www.facebook.com/sanfernandonhs1966" target="_blank" rel="noopener noreferrer" 
        style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', 
        textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Moving Up 2018</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '20px' }}>
          <div>
            <img src={img1} alt="With my Brother" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>With my Brother</h3>
          </div>
          <div>
            <img src={img2} alt="Certificate" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Certificate</h3>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Congressional Meet San Fernado Basketball Girls</h1>
        <p style={{ color: 'white' }}>
          The Congressional Meet in San Fernando for the Basketball Girls was an incredibly happy 
          and memorable experience for us, as our team emerged as champions. The victory filled us with a 
          sense of pride and accomplishment, knowing that our hard work and dedication had paid off. 
          The atmosphere during the competition was electric, with supporters cheering enthusiastically 
          from the sidelines. Our teamwork and determination were key factors in securing the championship 
          title, and the bonds we formed with our teammates strengthened throughout the tournament. 
          Winning the championship not only brought joy to our team but also fostered a sense of unity and 
          camaraderie among us. The memories of that victorious day will
          forever remain etched in our hearts, serving as a source of inspiration for future challenges.
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '20px' }}>
          <div>
            <img src={img4} alt="Champion" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Champion</h3>
          </div>
          <div>
            <img src={img5} alt="Teammates" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Teammates</h3>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>DXC/DLC Band</h1>
        <p style={{ color: 'white' }}>
          I'm incredibly proud of the DXC/DLC Band because our group achieved 5th place overall, 
          and we were recognized as the best in marching. This accomplishment is a testament to our 
          hard work, dedication, and passion for music. Throughout the competition, we demonstrated 
          exceptional teamwork and musicianship, which contributed to our success. The experience of 
          participating in the competition was both challenging and rewarding, and it strengthened the 
          bond among our band members. Achieving recognition for our 
          marching skills highlights the hours of practice and commitment we put into perfecting our routines. 
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Parade in Pasacao 2017</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '20px' }}>
          <div>
            <img src={img7} alt="5th Place" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>5th Place</h3>
          </div>
          <div>
            <img src={img8} alt="Best in Marching" style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
            <h3 style={{ marginTop: '20px', color: 'white' }}>Best in Marching</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
