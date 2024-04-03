import {useLoaderData } from "react-router-dom";

const JobPage = () => {
    const job = useLoaderData();
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //           const apiUrl = `/api/jobs/${id}`;
    //           const res = await fetch(apiUrl)
    //           const data = await res.json();
    //           setJob(data);
    //         } catch (error){
    //           console.log('Error while fetching job.', error);
    //         } finally {
    //           setLoading(false);
    //         }
    //       }
    //       fetchJob();
    //     }, []);


    
  return (
    <h1>{job.title}</h1>
  );
}

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json()
    return data;
}

export {JobPage as default, jobLoader};
