import React from 'react';

import { useState, useEffect } from 'react';

// import jobs from '../jobs.json';

import Job from './Job';
import Spinner from './Spinner';

const JobList = ({isHome = true}) => {
  // const myJobs = isHome ? jobs.slice(0,3) : jobs;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5050/jobs')
        const data = await res.json();
        setJobs(data);
      } catch (error){
        console.log('Error while fetching jobs.', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          
          {
            loading ? (
              <Spinner loading={loading}/>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                  jobs
                  .map((job) => (<Job
                    key = {job.id} 
                    job = {job}
                    />))
                }
              </div>
            )
          }
                  
      </div>
    </section>
  )
}

export default JobList;