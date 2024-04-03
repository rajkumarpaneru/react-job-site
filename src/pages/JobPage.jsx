import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
              const apiUrl = `/api/jobs/${id}`;
              const res = await fetch(apiUrl)
              const data = await res.json();
              setJob(data);
            } catch (error){
              console.log('Error while fetching job.', error);
            } finally {
              setLoading(false);
            }
          }
          fetchJob();
        }, []);
    
  return loading ? <Spinner /> : (
    <h1>{job.title}</h1>
  );
}

export default JobPage;