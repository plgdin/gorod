import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

const team = [
  { name: 'Guy Hawkins', role: 'CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', link: '/team/guy-hawkins' },
  { name: 'Jane Cooper', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', link: '/team/jane-cooper' },
  { name: 'Jerome Bell', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', link: '/team/jerome-bell' },
  { name: 'Janee Cooper', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', link: '/team/janee-cooper' },
  { name: 'Bell Joo', role: 'Logistics Analyst', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', link: '/team/bell-joo' },
  { name: 'Eleanor Pena', role: 'HR Manager', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', link: '/team/eleanor-pena' },
  { name: 'Noran Siam', role: 'Fleet Controller', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', link: '/team/noran-siam' },
]

export default function Team() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=2000&q=80" alt="Team meeting" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Our Team</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Team</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-pad bg-white">
        <div className="inner">
          <motion.div className="text-center mb-16 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-orange" />
              <span className="tag-label text-orange uppercase tracking-wider font-bold">OUR PROFESSIONALS</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">Our Service Expert</motion.h2>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-gray-off rounded-[24px] p-4 border border-border group hover:shadow-lg transition-shadow">
                <div className="rounded-[16px] overflow-hidden aspect-square mb-6 relative">
                  <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="text-center pb-2">
                  <h3 className="font-outfit font-bold text-navy text-2xl mb-1 hover:text-orange transition-colors">
                    <Link to={member.link}>{member.name}</Link>
                  </h3>
                  <p className="font-dm text-orange font-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
