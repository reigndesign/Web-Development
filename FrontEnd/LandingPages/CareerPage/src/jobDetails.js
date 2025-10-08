import img02 from "./images/img--02.png";

export default function StageOne(){
  return(
    <>
      <div className="header-section bg-[#0e1f3e] text-white h-50 py-10">
        <div className="header-content ">
          <h1 className="font-[Carlito] text-3xl font-semibold text-center">Frontend Developer</h1>
          <p className="pt-2 text-wrap text-center mb-3">Job Type: Full time</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 block mx-auto cursor-pointer">Apply Now</button>
        </div>
      </div>
      <JobDetails />
    </>
  )
} 


export function JobDetails({ jobid }) {



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

  // {
  //   id: 2,
  //   title: "Product Manager",
  //   location: "Lagos, NG",
  //   description: "Lead product development from conception to launch.",
  //   experience: "5+ years",
  //   type: "Full time",
  //   responsibilities: [
  //     "Define product vision and strategy.",
  //     "Work with engineering and design teams.",
  //     "Conduct market research and analysis.",
  //   ],
  //   qualifications: [
  //     "Bachelor's degree in Business or related field.",
  //     "Proven experience as a Product Manager.",
  //     "Excellent communication and leadership skills.",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "UX Designer",
  //   location: "Ibandan, NG",
  //   description: "Design user-friendly interfaces and experiences.",
  //   experience: "3+ years",
  //   type: "Remote",
  //   responsibilities: [
  //     "Create wireframes and prototypes.",
  //     "Conduct user research and testing.",
  //     "Collaborate with product and engineering teams.",
  //   ],
  //   qualifications: [
  //     "Bachelor's degree in Design or related field.",
  //     "Proficiency in design tools like Figma, Sketch, or Adobe XD.",
  //     "Strong portfolio showcasing UX design skills.",
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Graphic Designer",
  //   location: "Lagos, NG",
  //   description: "Design promotional materials and branding assets.",
  //   experience: "4+ years",
  //   type: "Full time",
  //   responsibilities: [
  //     "Create visual concepts and designs.",
  //     "Collaborate with marketing and product teams.",
  //     "Ensure brand consistency across all materials.",
  //   ],
  //   qualifications: [
  //     "Bachelor's degree in Graphic Design or related field.",
  //     "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
  //     "Strong portfolio showcasing graphic design skills.",
  //   ],
  // },
]

  return (
    <>
      <div className="job-details p-10 w-7/12 mx-auto mb-10">
      <img src={img02} alt="career" className="mx-auto w-full h-60 object-contain mb-5"/>
        {jobinfo.map((jobid) => (
          <div key={jobid.id} className="mb-10">
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
            <p className="mt-10 font-[lato] font-medium" id="mailto">If you are the right candidate for this role, send an email to <span className="text-blue-600 underline cursor-pointer"><a href="mailto:warrisports@gmail.com">warrisports@gmail.com</a></span></p>
          </div>
        ))}  
      </div>
    </>
  );
}