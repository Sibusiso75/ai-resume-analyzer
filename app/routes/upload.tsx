import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import FileUploader from '~/components/FileUploader'
import Navbar from '~/components/Navbar'
// import { usePuterStore } from '~/lib/puter'

function upload() {
  // const {auth, isLoading, fs, ai, kv} = usePuterStore()
  const navigate = useNavigate()
    // const [isProcesssing, setIsProcesssing] = useState(false)
    // const [statusText, setStatusText] = useState("")
    // const [file, setFile] = useState<File | null>(null)

    // function handleFileSelect(file: File | null) {
    //   setFile(file)
    // }
    // async function handleAnalyze({companyName, jobTitle, jobDescription, file}: {companyName: string, jobTitle: string, jobDescription: string, file:File}) {
    //   setIsProcesssing(true)
    //   setStatusText("Uploading your resume...")
    //   const uploadedFile = await fs.upload([file])
    //   if(!uploadedFile) return setStatusText("Failed to upload your resume. Please try again.")
    // }

    // function handleSubmit(e:FormEvent<HTMLFormElement>){
    //   e.preventDefault()
    //   const form = e.currentTarget.closest('form')
    //   if(!form) return
    //   const formData = new FormData(form)
    //   const companyName = formData.get('company-name')?.toString() || ''
    //   const jobTitle = formData.get('job-title')?.toString() || ''
    //   const jobDescription = formData.get('job-description')?.toString() || ''
    //   if(!file) return
    // }
  return (
   <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
     <section className="main-section">
<div className="page-heading py-16">
    <h1>Smart Feedback for your dream job</h1>
    
        <h2>Drop your ATS score and improvement tips</h2>
 
    
      <form id="upload-form" className='flex flex-col gap-4 mt-8'>
      <div className="form-div">
        <label htmlFor="company-name">Company Name</label>
        <input type="text" name="company-name" placeholder="Company Name" id="company-name"/>
      </div>
       <div className="form-div">
        <label htmlFor="job-title">Job Title</label>
        <input type="text" name="job-title" placeholder="Job Title" id="job-title"/>
      </div>
      <div className="form-div">
        <label htmlFor="job-description">Job Description</label>
        <textarea rows={5} name="job-description" placeholder="Job description" id="job-description"/>
      </div>
      <div className="form-div">
        <label htmlFor="uploader">Upload Resume</label>
        <FileUploader/> 
        
       <button className="primary-button">Analyse Resume</button> 
         {/* <button className="primary-button" type="submit">Analyse Resume</button> */}

      </div>
      </form>
   </div>
   </section>


  </main>
  )
}

export default upload