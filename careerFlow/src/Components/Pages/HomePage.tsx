import Header from '../Header/Header'
import Companies from './LandingPage/Companies'
import DreamJobs from './LandingPage/DreamJobs'
import Footer from './LandingPage/Footer'
import JobCategory from './LandingPage/JobCategory'
import Subscribe from './LandingPage/Subscribe'
import Testimonials from './LandingPage/Testimonials'
import Working from './LandingPage/Working'

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>

    <Header />
    <DreamJobs />
    <Companies />
    <JobCategory />
    <Working />
    <Testimonials />
    <Subscribe />
    <Footer />
    
    </div>
  )
}

export default HomePage
