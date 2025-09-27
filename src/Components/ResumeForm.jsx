import React, { useState,useEffect } from 'react'
import useForm from '../hooks/UseForm'
import useResumeDownload from "../hooks/useResumeDownload";

const ResumeForm = () => {
  //CUSTOM HOOK  
  const [formData, ChangeHandler]=useForm({
        fullname:'',
        email:'',
        phoneNo:'',
        linkedIn:'',
        education:'',
        skills:'',
        experience: ''
    })

    const[errors,setErrors]=useState({})

    const validateForm=()=>{
      const errors={}
      if(!formData.fullname.trim()) errors.fullname ='Name is requird';
      if(!/\S+@\S+\.+\S/.test(formData.email)) errors.email='email is invalid';
      if(!/^\d{11}$/.test(formData.phoneNo)) errors.phoneNo='the number must be 11 digits'
      if(!formData.skills.includes(',')) errors.skills='the skills must be comma separated'
      if(!formData.linkedIn.trim()) errors.linkedIn='url is requird';
      if(!formData.education.trim()) errors.education ='field is requird';
      if(!formData.experience.trim()) errors.experience='filed is requird';

      return errors;
    };

    const handleSubmit=(e)=>{
       e.preventDefault();
      const validationErrors=validateForm();
      if(Object.keys(validationErrors).length>0){
        setErrors(validationErrors)
      }else{
        setErrors({})
         console.log("Form submitted:", formData);
      }
    };

    ///AI with JS logic
  function generateSuggestions(formData) {
  const suggestions = [];

  // Skills check
  if (!formData.skills.toLowerCase().includes('git')) {
    suggestions.push("Consider adding 'Git' to your skillset.");
  }
  if (!formData.skills.toLowerCase().includes('api')) {
    suggestions.push("Mention experience with APIs – REST or GraphQL.");
  }

  // Experience check
  if (!formData.experience.toLowerCase().includes('project')) {
    suggestions.push("Include at least one specific project in your experience.");
  }

  if (!formData.experience.toLowerCase().includes('team')) {
    suggestions.push("Mention any teamwork or collaboration experience.");
  }

  return suggestions;
}
const [suggestions, setSuggestions] = useState([]);

useEffect(() => {
  const aiSuggestions = generateSuggestions(formData);
  setSuggestions(aiSuggestions);
}, [formData.skills, formData.experience]);

const handleDownload = useResumeDownload(formData);

  return (
    <>
    <div className="flex gap-10 p-8">
        <form className="w-1/2 space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="fullname" className='flex '>Full Name</label>
            <input name='fullname' id='fullname'placeholder='Enter your full Name' className="rounded-md border border-gray-300 p-2" value={formData.fullname} onChange={ChangeHandler}/>
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
            
            <label htmlFor="email" className='flex '>Email</label>
            <input name='email' id='email'placeholder='Enter your email' className="rounded-md border border-gray-300 p-2" value={formData.email} onChange={ChangeHandler}/>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            
            <label htmlFor="phoneNo" className='flex'>Phone No</label>
            <input name='phoneNo' id='phoneNo' placeholder='Enter your phone No' className="rounded-md border border-gray-300 p-2" value={formData.phoneNo} onChange={ChangeHandler}/>
            {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}

            <label htmlFor="linkedIn" className='flex'>LinkedIn Proffile</label>
            <input name='linkedIn' id='linkedIn' placeholder='Enter your Linkedin URL' className="rounded-md border border-gray-300 p-2" value={formData.linkedIn} onChange={ChangeHandler}/>
            {errors.linkedIn && <p className="text-red-500 text-sm">{errors.linkedIn}</p>}

            <label htmlFor="education" className='flex'>Education</label>
            <textarea name='education' id='education' placeholder='Enter your qulification'className="rounded-md border border-gray-300 p-2" value={formData.education} onChange={ChangeHandler}/>
            {errors.textarea && <p className="text-red-500 text-sm">{errors.textarea}</p>}
            
            <label htmlFor="skills" className='flex'>Skills</label>
            <textarea name='skills' id='skills' placeholder='Enter your qulification'className="rounded-md border border-gray-300 p-2" value={formData.skills} onChange={ChangeHandler}/>
            {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
            
            <label htmlFor="experience" className='flex'>Experience</label>
            <textarea name='experience' id='experience' placeholder='Enter your Experience' className="rounded-md border border-gray-300 p-2" value={formData.experience} onChange={ChangeHandler}/>
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}

            <button className='flex bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-14 text-center w-45 rounded-md'>SUBMIT</button>
        </form>

    {/* Live Preview Side */}
      <div className="w-1/2 bg-gray-100 p-4 rounded shadow-md ">
        <h2 className="text-xl font-bold text-center">{formData.fullname || "Your Name"}</h2>
        <p className='flex gap-10'> {formData.email}</p>
        <p className=''> {formData.phoneNo}</p>
        <p className='flex py-5'><strong>LinkedIn:</strong> <a href={formData.linkedIn} target="_blank">{formData.linkedIn}</a></p>
        <p className='flex py-5'><strong>Skills:</strong> {formData.skills}</p>
        <p className='flex py-5'><strong>Education:</strong> {formData.education}</p>
        <p className='flex py-5'><strong>Experience:</strong> {formData.experience}</p>
        <div>
      <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleDownload}>Download PDF</button>
    </div>
      </div>
    {/*AI Suggestion*/}
      <div className="mt-4 p-4 bg-blue-50 rounded shadow-md">
          <div className="bg-blue-50 mt-6 p-4 rounded">
           <h3 className="font-semibold">🧠 Smart Suggestions</h3>
           <ul className="list-disc list-inside text-blue-700 text-sm">
            {suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          </div>


      </div>
      
    </div>
    </>
  )
}

export default ResumeForm


