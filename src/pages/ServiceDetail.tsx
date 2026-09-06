import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { servicesData } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

export default function ServiceDetail() {
  const { slug } = useParams()
  
  if (!slug || !(slug in servicesData)) {
    return <Navigate to="/404" replace />
  }

  const data = servicesData[slug as keyof typeof servicesData]
  const title = data.title

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={data.image} alt="Service" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">{title}</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <Link to="/services" className="hover:text-orange transition-colors">Services</Link>
            <span>»</span>
            <span className="text-orange">{title}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="inner">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div className="w-full lg:w-2/3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
               <motion.div variants={fadeUp} className="rounded-[30px] overflow-hidden aspect-video mb-8">
                 <img src={data.image} alt={title} className="w-full h-full object-cover" />
               </motion.div>
               <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl mb-6">Overview of {title}</motion.h2>
               <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-6 whitespace-pre-line">
                 {data.content}
               </motion.p>
               
               <motion.div variants={fadeUp} className="flex flex-col gap-4 mt-8 bg-gray-off p-8 rounded-[24px]">
                 <h3 className="font-outfit font-bold text-navy text-2xl mb-2">Key Benefits</h3>
                 {['Cost-effective logistics solutions', 'Real-time tracking systems', '24/7 dedicated customer support', 'Globally certified operations'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-orange" size={24} />
                      <span className="font-outfit font-600 text-navy text-lg">{item}</span>
                    </div>
                 ))}
               </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div className="w-full lg:w-1/3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-navy p-8 rounded-[24px] text-white sticky top-32">
                <h3 className="font-outfit font-bold text-2xl mb-6">Other Services</h3>
                <ul className="flex flex-col gap-4">
                  {Object.entries(servicesData)
                    .filter(([s]) => s !== slug)
                    .slice(0, 5)
                    .map(([s, d], i) => (
                    <li key={i}>
                      <Link to={`/services/${s}`} className="flex items-center justify-between font-dm text-white/80 hover:text-orange transition-colors py-3 border-b border-white/10">
                        {d.title} <ArrowRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-outfit font-bold text-xl mb-4">Need Help?</h4>
                  <p className="font-dm text-white/70 mb-4">Contact our experts today.</p>
                  <Link to="/contact" className="btn-primary block text-center py-4 rounded-full">Contact Us</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
