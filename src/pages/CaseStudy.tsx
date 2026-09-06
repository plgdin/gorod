import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

const projects = [
  { title: 'Ocean Freight Logistics', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80', link: '/case-study/ocean-freight' },
  { title: 'Global Air Freight', img: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&q=80', link: '/case-study/air-freight' },
  { title: 'Automated Warehouse', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', link: '/case-study/warehouse' },
  { title: 'Ocean Freight Operations', img: 'https://images.unsplash.com/photo-1559297434-fae8a1016aeb?w=600&q=80', link: '/case-study/ocean-freight-02' },
  { title: 'Pacific Ocean Transit', img: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600&q=80', link: '/case-study/ocean-freight-03' },
  { title: 'Express Air Cargo', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80', link: '/case-study/air-freight-02' },
  { title: 'Air Charter Services', img: 'https://images.unsplash.com/photo-1520114002695-1f90b6a22c06?w=600&q=80', link: '/case-study/air-freight-03' },
  { title: 'Distribution Hubs', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80', link: '/case-study/warehouse-02' },
  { title: 'Smart Inventory Base', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80', link: '/case-study/warehouse-03' },
]

export default function CaseStudy() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1559297434-fae8a1016aeb?w=2000&q=80" alt="Shipping" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Case Studies</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Case Study</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-pad bg-white border-t border-border overflow-hidden">
        <div className="inner">
          <motion.div className="text-center mb-16 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-orange" />
              <span className="tag-label text-orange uppercase tracking-wider font-bold">LATEST PROJECTS</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl max-w-2xl mx-auto leading-tight">
              Your Roadmap to Success with Trusted Projects
            </motion.h2>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {projects.map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative rounded-[24px] overflow-hidden aspect-[4/3] cursor-pointer">
                <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-outfit font-bold text-white text-2xl mb-2"><Link to={proj.link}>{proj.title}</Link></h3>
                  <Link to={proj.link} className="inline-flex items-center text-orange font-dm font-500 gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
