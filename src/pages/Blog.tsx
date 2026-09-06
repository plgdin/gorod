import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

import { blogsData } from '../data'

export default function Blog() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=2000&q=80" alt="News" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Blog & News</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Blog</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-pad bg-white">
        <div className="inner">
          <motion.div className="text-center mb-16 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-orange" />
              <span className="tag-label text-orange uppercase tracking-wider font-bold">BLOG & NEWS</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">Read All Our Logistics Blogs</motion.h2>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {Object.entries(blogsData).map(([slug, b], i) => (
              <motion.div key={i} variants={fadeUp} className="group rounded-[24px] overflow-hidden border border-border bg-gray-off">
                <Link to={`/blog/${slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full font-outfit font-bold text-navy text-sm">
                    {b.category}
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-outfit font-bold text-navy text-2xl mb-4 group-hover:text-orange transition-colors">
                    <Link to={`/blog/${slug}`}>{b.title}</Link>
                  </h3>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt={b.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-outfit font-bold text-navy text-sm leading-tight">{b.author}</p>
                      <p className="font-dm text-gray-body text-xs">{b.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
