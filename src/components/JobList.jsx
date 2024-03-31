import React from 'react'

import jobs from '../jobs.json';

import Job from './Job';

const JobList = ({isHome = true}) => {
  const myJobs = isHome ? jobs.slice(0,3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          

          {
            myJobs
            .map((job) => (<Job
              key = {job.id} 
              id = {job.id}
              type = {job.type}
              title = {job.title}
              description = {job.description}
              salary = {job.salary}
              location = {job.location}
              />))
          }  
        </div>
      </div>
    </section>
  )
}

export default JobList;