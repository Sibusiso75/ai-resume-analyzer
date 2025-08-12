import { useLocation, useNavigate } from "react-router";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar"
import ResumeCard from "~/components/ResumeCard"
import { resumes } from "~/constants";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
 const {auth} = usePuterStore()
    const navigate = useNavigate()

    useEffect(()=>{
       if(!auth.isAuthenticated) navigate('/auth?next=/')
    },[auth.isAuthenticated])

  return [
    { title: "Resume analyzer" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}


export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
     <section className="main-section">
   <section className="page-heading py-5">
    <h1>Track Your Application & Resume</h1>
    <h2>Review your submissions and check AI-powered feedback</h2>

   </section>
   </section>

   {
    resumes.length>0 && (
      <div className="resumes-section">
        {resumes.map((resume)=>(
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )
   } 


  </main>;
}
