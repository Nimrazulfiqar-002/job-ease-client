import React, { useState } from 'react'

const ResumeForm = () => {
    const [formData,setFormData]=useState({
        fullname:'',
        email:'',
        phoneNo:'',
        linkedIn:'',
        education:'',
        skills:'',
        experience: ''
    })

    const[errors,setErrors]=useState({})

    const ChangeHandler=(e)=>{
        setFormData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

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
      </div>
    {/*AI Suggestion*/}
      <div className="mt-4 p-4 bg-blue-50 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">🧠 Smart Suggestions</h3>
         <ul className=" list-inside text-sm text-blue-700">
            <li> 
              <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg> Add more technical skills like Git, REST API</li>
            <li> 
              <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>Include project details in experience</li>
            <li> 
              <svg className="w-5 h-5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              Use action words like "Built", "Created", "Led"
            </li>
          </ul>
      </div>
      
    </div>
    </>
  )
}

export default ResumeForm


