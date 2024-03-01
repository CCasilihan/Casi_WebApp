
import * as React from "react";
import "./App.css";
//import './Education.css'; // Import CSS file for custom styling
import img1 from './images/dl1.jpg';
import img2 from './images/cert.jpg';
import img3 from './images/dl2.jpg';
import img4 from './images/vball1.jpg';
import img5 from './images/vpractice.jpg';
import img6 from './images/vball2.jpg';
import img7 from './images/thesis.jpg';
import img8 from './images/rar.jpg';

function Education() {
  return (

    <div className="education-container">
  <div className="content" style={{ backgroundColor: 'lightgray', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)' }}>
    <h1>My College Life Experience</h1>
    <p>
      College life provides a platform for exploring interests, passions, and values. Students have the freedom to pursue internships, research projects, and volunteer opportunities that align with their career aspirations and personal goals. These experiences help students clarify their interests, build skills, and gain practical experience in their chosen fields.
    </p>
    <img src={img8} alt="Elementary School" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />

    <p>Visit the Naga College Foundation Facebook Page</p>
    <a href="https://www.facebook.com/nagacollegefoundation1947" target="_blank" rel="noopener noreferrer" className="visit-link">Visit</a>
  </div>

      <div className="achievements">
        <h1>Achievements</h1>
        <div className="achievement-images">
          <div className="achievement">
            <img src={img1} alt="" />
            <h3>Dean's Lister 2021-2022 1st Semester</h3>
          </div>
          <div className="achievement">
            <img src={img2} alt="" />
            <h3>Certificate</h3>
          </div>
          <div className="achievement">
            <img src={img3} alt="" />
            <h3>Dean's Lister 2021-2022 2nd Semester</h3>
          </div>
        </div>
      </div>

      <h2>Participating in Events</h2>
        <p>
          Being able to participate in events is rewarding and helps me develop various skills.
        </p>

      <div className="intramurals">
        <h1>Intramurals</h1>
        <div className="intramural-images">
          <div className="intramural">
            <img src={img4} alt="" />
            <h3>CCS Volleyball Girls 2022</h3>
          </div>
          <div className="intramural">
            <img src={img5} alt="" />
            <h3>V-Ball Practice</h3>
          </div>
          <div className="intramural">
            <img src={img6} alt="" />
            <h3>CCS Volleyball Girls 2023</h3>
          </div>
        </div>
      </div>

      <h2>Thesis Proposal Approved</h2>
        <p>
          My thesis proposal has been approved, and I am glad and happy because the time I proposed my research title was like a birthday gift to me.
        </p>

      <div className="defense">
        <h1>Defense</h1>
        <div className="defense-images">
          <div className="defense-image">
            <img src={img7} alt="" />
            <h3>Thesis Proposal Approve 2023</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;







// import * as React from "react";
// // import Card from 'react-bootstrap/Card';
// import img1 from './images/dl1.jpg';
// import img2 from './images/cert.jpg';
// import img3 from './images/dl2.jpg';
// import img4 from './images/vball1.jpg';
// import img5 from './images/vpractice.jpg';
// import img6 from './images/vball2.jpg';
// import img7 from './images/thesis.jpg';
// // import backgroundImage1 from './images/rar.jpg'; 

// function Education() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         <div className="content" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
//           backgroundColor: 'rgba(192, 192, 192, 0.5)', padding: '10px', borderRadius: '10px' }}>
//           <h1 style={{ textAlign: 'center' }}>My College Life Experience</h1>
//           <p>
//             College life provides a platform for exploring interests, passions, and values. 
//             Students have the freedom to pursue internships, research projects, and volunteer 
//             opportunities that align with their career aspirations and personal goals. 
//             These experiences help students clarify their interests, 
//             build skills, and gain practical experience in their chosen fields.
//           </p>

//           <h1>Participating in Events</h1>
//           <p>
//             Being able to participate in events is rewarding and helps me develop various skills.
//           </p>

//           <h1>Thesis Proposal Approved</h1>
//           <p>
//             My thesis proposal has been approved, and I am glad and happy because 
//             the time I proposed my research title was like a birthday gift to me.
//           </p>

//           <p>Visit the Naga College Foundation Facebook</p>
//           <a href="https://www.facebook.com/nagacollegefoundation1947" target="_blank" rel="noopener noreferrer" style={{ padding: '5px 10px', width: 'auto', height: '20px', backgroundColor: 'green', 
//           color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Visit</a>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h1>Achievements</h1>
//           <div className="row">
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img1} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Dean's Lister 2021-2022 1st Semester</h3>
//               </div>
//             </div>
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img2} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Certificate</h3>
//               </div>
//             </div>
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img3} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Dean's Lister 2021-2022 2nd Semester</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <h1>Intramurals</h1>
//           <div className="row">
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img4} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>CCS Volleyball Girls 2022</h3>
//               </div>
//             </div>
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img5} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>V-Ball Practice</h3>
//               </div>
//             </div>
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img6} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>CCS Volleyball Girls 2023</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <h1>Defense</h1>
//           <div className="row">
//             <div className="col">
//               <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={img7} alt="" style={{ width: '300px', height: '300px', borderRadius: '10px', boxShadow: '4px 4px 9px rgba(2, 2, 2, 2.5)', transition: 'transform 0.3s' }} />
//                 <h3 style={{ marginTop: '20px', textAlign: 'center' }}>Thesis Proposal Approve 2023</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Education;
