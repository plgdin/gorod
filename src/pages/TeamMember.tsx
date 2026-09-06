import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { teamData } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

export default function TeamMember() {
  const { slug } = useParams()
  
  if (!slug || !(slug in teamData)) {
    return <Navigate to="/404" replace />
  }

  const data = teamData[slug as keyof typeof teamData]
  const name = data.name

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Header */}
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Profile Details</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <Link to="/team" className="hover:text-orange transition-colors">Team</Link>
            <span>»</span>
            <span className="text-orange">{name}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Profile Section */}
      <section className="section-pad bg-white">
        <div className="inner">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Image */}
            <motion.div className="w-full lg:w-1/3" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-[30px] overflow-hidden aspect-[3/4] shadow-xl border border-border">
                <img src={data.image} alt={name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeUp} className="mb-8 border-b border-border pb-8">
                <h2 className="heading-display text-navy text-5xl mb-2">{name}</h2>
                <span className="font-dm text-orange text-xl font-bold uppercase tracking-wider block mb-6">{data.role}</span>
                <p className="font-dm text-gray-body text-lg leading-relaxed">
                  {data.bio}
                </p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4 bg-gray-off p-6 rounded-[20px]">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                     <Mail className="text-orange" size={20} />
                   </div>
                   <div>
                     <span className="block font-dm text-sm text-gray-body">Email Address</span>
                     <a href="mailto:example@transigo.com" className="font-outfit font-bold text-navy text-lg">example@transigo.com</a>
                   </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-off p-6 rounded-[20px]">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                     <Phone className="text-orange" size={20} />
                   </div>
                   <div>
                     <span className="block font-dm text-sm text-gray-body">Phone Number</span>
                     <a href="tel:+25854854845" className="font-outfit font-bold text-navy text-lg">+258 - 5485 - 4845</a>
                   </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="font-outfit font-bold text-navy text-3xl mb-4">Professional Skills</h3>
                <p className="font-dm text-gray-body text-lg leading-relaxed mb-6">
                  Expertise ranges from global supply chain optimization, robust network building, automated tracking systems implementation, and multi-modal transport planning.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Route Optimization', 'Supply Chain Management', 'Global Networking', 'Leadership'].map((skill, i) => (
                    <span key={i} className="px-6 py-2 bg-navy text-white rounded-full font-outfit font-500 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
