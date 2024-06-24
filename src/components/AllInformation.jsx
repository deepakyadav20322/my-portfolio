
'use client'
import About from './About'
import Blogs from './Blogs'
import Projects from './Projects'
import { useMyContext } from '@/context/UserContext'
import Contact from './Contact'
import Education from './Education'

const AllInformation = () => {
  const { currTab } = useMyContext();
  const renderComponent = () => {
    switch (currTab.trim().toLowerCase()) {
      case 'about':
        return <About />;
      case 'blogs':
        return <Blogs />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'education':
        return <Education />;
      default:
        return null; // Render nothing if currTab doesn't match any case
    }
  };
  return (
  
    <div className='py-10 px-1 sm:px-2'>
    {renderComponent()}
  </div>
  )
}

export default AllInformation