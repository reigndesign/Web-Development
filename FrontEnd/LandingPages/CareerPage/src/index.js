import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './index.css';
import img01 from "./images/img--01.png";
import img02 from "./images/img--02.png";




function HeaderOne() {

  return (
    <>
      <div className="header-section bg-[#0a771276] h-40 py-10">
          <div className="header-content pl-50">
            <h1 className="font-[Carlito] text-3xl font-semibold">Join Our Team</h1>
             <p className="pt-2 text-wrap">Discover exciting career opportunities with us. We're looking for talented individuals to help us shape the future.</p>
          </div>
      </div>
      <JobListings  />
    </>
  )
}

function JobListings({ job }) {
  const jobs = [
      {
        id: 1,
        title: "Frontend Developer",
        location: "Lagos, NG",
        description: "We're on the hunt for a skilled and enthusiastic Frontend Developer to join our product team and help contribute and build a fast, responsive, and reliable sports betting application.",
        experience: "2+ years",
        type: "Full time",
      },
      
    ];

  return (
    <>
      <div className="job-listings p-10 w-7/12 mx-auto">
        <img src={img01} alt="Career-image" className="w-full h-60 object-contain mb-5" />
        <h2 className="text-2xl font-bold mb-5">Current Openings</h2>
        <ul className="job--content pl-20 pt-5">
          {jobs.map((job) => (
            <li key={jobs.id} className="job--details cursor-pointer mb-5 p-5 border-red-300 rounded-lg hover:border">
              <h3 className="text-xl text-[#c60404] font-semibold font-[lato] p-3">{job.title}</h3>
              <ul className="flex justify-around gap-x-40 mt-2 pb-3">
                <li className="text-gray-600 text-sm text-center rounded-sm bg-gray-100 w-18 ">{job.experience}</li>
                <li className="text-gray-600 text-sm text-center rounded-sm bg-gray-100 w-18">{job.type}</li>

                <l><button className="px-5 bg-[#047912] rounded-sm text-white cursor-pointer" onClick={() => window.location.href = '/job'}>
                    Apply
                  </button></l>
              </ul>
              <p className="text-gray-600">{job.location}</p>
              <p className="mt-2">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function HeaderTwo() {

  return (
      <>
        <div className="header-section bg-[#0e1f3e] text-white h-50 py-10">
          <div className="header-content ">
            <h1 className="font-[Carlito] text-3xl font-semibold text-center">Frontend Developer</h1>
            <p className="pt-2 text-wrap text-center mb-3">Job Type: Full time</p>
            <Button onClick={() => window.location.href = '/apply'}>
              Apply Now
            </Button>
          </div>
        </div>
        <JobDetails />
    </>
  )
}

function HeaderThree() {


  return (
    <>
      <div className="header-section bg-[#06441b] text-white h-50 py-10">
        <div className="header-content ">
          <h1 className="font-[Carlito] text-3xl font-semibold text-center py-4">Application Form</h1>
          <p className="pt-2 text-wrap text-center mb-3">Please fill out the form below to apply for the Frontend Developer position.</p>
        </div>
      </div>

      <ApplicationForm />
    </>

  )

}

function ApplicationForm() {
  return (
    <>
      <div className="application-form p-10 w-7/12 mx-auto mb-10">
        {/* <img src={img02} alt="Application-image" className="w-full h-60 object-contain mb-5" /> */}
        <h2 className="text-2xl font-bold mb-5 text-center">Apply Now</h2>
        <form className="space-y-4 w-6/12 mx-auto mb-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
            <input type="file" id="resume" name="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
          </div>
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea id="coverLetter" name="coverLetter" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600"></textarea>
          </div>
          <Button>
            Submit Application
            </Button>
        </form>
      </div>
    </>
  )

}

function JobDetails({ jobid }) { 

  const jobinfo = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Lagos, NG",
      description: "We're on the hunt for a skilled and enthusiastic Frontend Developer to join our product team and help contribute and build a fast, responsive, and reliable sports betting application.",
      experience: "2+ years",
      type: "Full time",

      qualifications: [
        "Bachelor's degree in Computer Science or related field.",
        "Proficiency in JavaScript, React, and Node.js.",
        "Strong problem-solving skills.",
      ],

      responsibilities: [
        "Build and maintain the frontend of our sports betting platform using modern technologies.",
        "Develop responsive interfaces and real-time features like live odds, match tracking, betting slips, and more.",
        "Work with backend engineers to implement clean and scalable solutions.",
        "Contribute to code reviews, testing, and performance tuning.",
        "Stay updated with the latest sports industry trends and technologies to ensure our platform remains cutting-edge.",
      ],

      skill: [
        "Proficiency in JavaScript, HTML, CSS, and modern frontend frameworks (e.g., React, Angular, Vue).",
        "Experience with state management libraries (e.g., Redux, MobX).",
        "Familiarity with RESTful APIs and WebSocket for real-time data.",
        "Knowledge of responsive design principles and mobile-first development.",
        "Experience with version control systems (e.g., Git).",
        "Strong problem-solving skills and attention to detail.",
        "Excellent communication and teamwork abilities.",
        "Passion for sports and understanding of the sports betting industry is a plus.",
        "Experience working on frontend applications that are tightly integrated with backend services (e.g., APIs, databases, authentication systems).",
      ],

      additional: [
        "Understanding of sports betting mechanics (odds, markets, slips, live betting, etc.).",
        "Experience working with real-time systems (e.g., live scores, updates, notifications).",
        "Integration experience with third-party sports APIs (e.g., odds providers, data feeds).",
        "Knowledge of WebSockets or GraphQL subscriptions for real-time updates.",
        "Experience building or working with live dashboards or data visualization tools (e.g., charts for match stats).",
        "Basic knowledge of backend development (Node.js, Python, etc.) is a plus.",
        "Experience with mobile-first or cross-platform development (React Native, Flutter) is also a plus.",
        "Understanding of user authentication and secure session handling.",
      ],

      whatweoffer: [
        "A fast-moving, tech-driven environment.",
        "The chance to work on a product with real impact and high visibility.",
        "Support for continuous learning and growth.",
      ],

      aboutus: [
        "We are building next-generation sports betting experiences, focused on speed, accuracy, and seamless user interactions",
        "We value clean code, user-first thinking, and constant innovation.",
      ],
    },
  ]

  return (
    <>
      <div className="job-details p-10 w-7/12 mx-auto mb-10">
        <img src={img02} alt="career" className="mx-auto w-full h-60 object-contain mb-5" />
        {jobinfo.map((jobid) => (
          <div key={jobid.id} className="mb-10 discription">
            <h2 className="text-3xl text-[#c60404] font-semibold font-[lato] my-10">{jobid.title}</h2>
            <ul className="flex gap-10 mt-2 pb-3">
              <li className="text-gray-600 text-sm text-center rounded-sm bg-gray-100 w-18 ">{jobid.experience}</li>
              <li className="text-gray-600 text-sm text-center rounded-sm bg-gray-100 w-18">{jobid.type}</li>
            </ul>
            <p className="text-gray-600">{jobid.location}</p>
            <p className="mt-2">{jobid.description}</p>
            <h4 className="text-lg font-semibold mt-4">Qualifications:</h4>
            <ul className="list-disc list-inside mt-2">
              {jobid.qualifications.map((qual, index) => (
                <li key={index} className="text-gray-600">{qual}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-4">Role and Responsibilities:</h4>
            <ul className="list-disc list-inside mt-2">
              {jobid.responsibilities.map((resp, index) => (
                <li key={index} className="text-gray-600">{resp}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-4">Skills and Experience:</h4>
            <ul className="list-disc list-inside mt-2">
              {jobid.skill.map((skill, index) => (
                <li key={index} className="text-gray-600">{skill}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-4">Additional Skills (Preferred):</h4>
            <ul className="list-disc list-inside mt-2">
              {jobid.additional.map((add, index) => (
                <li key={index} className="text-gray-600">{add}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-4">What We Offer:</h4>
            <ul className="list-disc list-inside mt-2">
              {jobid.whatweoffer.map((offer, index) => (
                <li key={index} className="text-gray-600">{offer}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-4">About The Team:</h4>
            <ul className="list-disc list-inside mt-2">
              {jobid.aboutus.map((about, index) => (
                <li key={index} className="text-gray-600">{about}</li>
              ))}
            </ul>
            <p className="mt-10 font-[lato] font-medium" id="applynow">If you are the right candidate for this role, send an email to <span className="text-blue-600 underline cursor-pointer"><a href="mailto:warrisports@gmail.com">warrisports@gmail.com</a></span></p>
          </div>
        ))}
      </div>
    </>
  )
}

function Button({children, onClick}) {
  return (
    <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 block mx-auto cursor-pointer" onClick={onClick}>{ children }
    </button>
  )
}


function App() {
  return (
    <Router>
      {/* <nav>
        <link to="/">Career</link> | {" "}
        <link to="/apply">Apply</link> | {" "}
        <link to="/job/:jobid">Job Details</link> | {" "}
      </nav> */}

      <Routes>
        <Route path="/" element={<HeaderOne />} />
        <Route path="/job" element={<HeaderTwo />} />
        <Route path="/apply" element={<HeaderThree />} />
      </Routes>
    </Router>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
