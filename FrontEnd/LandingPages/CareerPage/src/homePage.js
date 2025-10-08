import img01 from "./images/img--01.png";
import { useState } from "react";
import StageOne from "./jobDetails";



export default function MainHead() {

  return(
    <>

      {/* <div className="header-section bg-[#0a771276] h-40 pl-50 py-10">
        <div className="header-content "></div>
          <h1 className="font-[Carlito] text-3xl font-semibold">Join Our Team</h1>
          <p className="pt-2 text-wrap">Discover exciting career opportunities with us. We're looking for talented individuals to help us shape the future.</p>
      </div> */}
      {/* <JobListings /> */}
      <StageOne />
    </>
  ) 

}

export function JobListings({ job }) {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Lagos, NG",
      description: "We're on the hunt for a skilled and enthusiastic Frontend Developer to join our product team and help contribute and build a fast, responsive, and reliable sports betting application.",
      experience: "2+ years",
      type: "Full time",
    },
    {
      id: 2,
      title: "Product Manager",
      location: "Lagos, NG",
      description: "Lead product development from conception to launch.",
      experience: "5+ years",
      type: "Full time",
    },
    {
      id: 3,
      title: "UX Designer",
      location: "Ibandan, NG",
      description: "Design user-friendly interfaces and experiences.",
      experience: "3+ years",
      type: "Remote",
    },

    {
      id: 4,
      title: "Graphic Designer",
      location: "Lagos, NG",
      description: "Design promotional materials and branding assets.",
      experience: "4+ years",
      type: "Full time",
    },
  ];

  return (
    <>
      <div className="job-listings p-10 w-7/12 mx-auto">
        <img src={img01} alt="Career-image" className="w-full h-60 object-cover mb-5" />
        <h2 className="text-2xl font-bold mb-5">Current Openings</h2>
        <ul className="pl-20 pt-5">
          {jobs.map((job) => (
            <li key={jobs.id} className="job--details cursor-pointer mb-5 p-5 border-red-300 rounded-lg hover:border">
              <h3 className="text-xl text-[#c60404] font-semibold font-[lato]">{job.title}</h3>
              <ul className="flex gap-10 mt-2 pb-3">
                <li className="text-gray-600 text-sm text-center rounded-sm bg-gray-100 w-18 ">{job.experience}</li>
                <li className="text-gray-600 text-sm text-center rounded-sm bg-gray-100 w-18">{job.type}</li>
              </ul>
              <p className="text-gray-600">{job.location}</p>
              <p className="mt-2">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
      
      {/* <ApplicationForm /> */}
    </>
  );
}


// export function ApplicationForm() {
//   return (
//     <div className="application-form p-10 w-7/12 mx-auto mb-10">
//       <img src={img02} alt="Application-image" className="w-full h-60 object-contain mb-5" />
//       <h2 className="text-2xl font-bold mb-5 text-center">Apply Now</h2>
//       <form className="space-y-4 w-6/12 mx-auto mb-10">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
//         </div>
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//           <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
//         </div>
//         <div>
//           <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
//           <input type="file" id="resume" name="resume" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600" required />
//         </div>
//         <div>
//           <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
//           <textarea id="coverLetter" name="coverLetter" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-red-600"></textarea>
//         </div>
//         <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Submit Application</button>
//       </form>
//     </div>
//   );