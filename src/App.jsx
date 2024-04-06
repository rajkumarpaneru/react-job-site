import React from 'react';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'post',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  }

  const updateJob = async (job) => {
    const res = await fetch('/api/jobs/' + job.id, {
      method: 'put',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });

    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });

    console.log(id)
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/create' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route 
        path='/jobs/:id/edit' 
        element={<EditJobPage updateJobSubmit={updateJob}/>} 
        loader={jobLoader}
      />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage />}/>
      
    </Route>
    
    )
  );
  
  return <RouterProvider router={router}/>
}

export default App;