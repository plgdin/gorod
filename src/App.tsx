import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import CaseStudy from './pages/CaseStudy'
import Team from './pages/Team'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import ServiceDetail from './pages/ServiceDetail'
import CaseStudyDetail from './pages/CaseStudyDetail'
import TeamMember from './pages/TeamMember'
import BlogPost from './pages/BlogPost'

// Animated Routes Component to handle exit animations
function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<Contact />} /> {/* Same as contact for now */}
        
        {/* Dynamic Subpages */}
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/team/:slug" element={<TeamMember />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Dynamic subpages catch-all to 404 for now until we build templates */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
