import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Error404() {
  return (
    <motion.main 
      className="w-full min-h-screen pt-32 pb-24 flex items-center justify-center bg-gray-off"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
    >
      <div className="inner text-center flex flex-col items-center">
        <h1 className="heading-display text-navy text-[150px] md:text-[250px] leading-none mb-4 text-orange">404</h1>
        <h2 className="heading-section text-navy text-4xl mb-6">Page Not Found!</h2>
        <p className="font-dm text-gray-body text-lg mb-10 max-w-md">
          We're sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
        <Link to="/" className="btn-primary py-4 px-8 rounded-full">
          Back To Home
        </Link>
      </div>
    </motion.main>
  )
}
