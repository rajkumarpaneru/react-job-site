import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobList from './components/JobList';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero 
    title="Get React Developer Jobs" 
    subTitle="Find all React job that fits your skills and needs"
    />

    <HomeCards />

    <JobList />

    <ViewAllJobs />
    </>
  );
}

export default App;