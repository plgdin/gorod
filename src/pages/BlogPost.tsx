import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { blogsData } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

export default function BlogPost() {
  const { slug } = useParams()
  
  if (!slug || !(slug in blogsData)) {
    return <Navigate to="/404" replace />
  }

  const data = blogsData[slug as keyof typeof blogsData]
  const title = data.title

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Blog Hero Image */}
      <section className="relative w-full h-[60vh] overflow-hidden flex flex-col justify-end pb-16 bg-navy">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={data.image} alt="Blog hero" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        
        <motion.div className="inner relative z-10" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-orange font-outfit font-bold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-orange" />
            {data.category}
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white text-4xl md:text-6xl mb-8 max-w-4xl leading-tight">
            {title}
          </motion.h1>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-white/80 font-dm">
            <div className="flex items-center gap-2">
              <User size={18} className="text-orange" />
              <span>By {data.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-orange" />
              <span>{data.date}</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Body */}
      <section className="section-pad bg-white">
        <div className="inner flex flex-col lg:flex-row gap-16">
          <motion.div className="w-full lg:w-2/3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeUp} className="font-dm text-gray-body text-xl leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-navy first-letter:float-left first-letter:mr-3 whitespace-pre-line">
              {data.content}
            </motion.p>
            
            <motion.h3 variants={fadeUp} className="heading-section text-navy text-3xl mb-6 mt-12">The Impact on Global Trade</motion.h3>
            <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-6">
              As we navigate through the complexities of international trade, the integration of smart technologies has proven to be transformative. Automated tracking, route optimization, and AI-driven predictive analytics have significantly lowered operational costs while dramatically improving on-time delivery rates across the board.
            </motion.p>

            <motion.div variants={fadeUp} className="my-10 bg-gray-off p-8 border-l-4 border-orange rounded-r-2xl">
              <p className="font-outfit font-bold text-navy text-2xl leading-relaxed italic">
                "Innovation in logistics is not about moving goods faster; it's about predicting where they need to be before the demand even arises."
              </p>
            </motion.div>

            <motion.h3 variants={fadeUp} className="heading-section text-navy text-3xl mb-6">Embracing the Future</motion.h3>
            <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-6">
              Companies that fail to adopt modern logistics practices are finding themselves outpaced. We firmly believe that investing in robust infrastructure and seamless digital communication platforms is the key to thriving in the next decade of transport and shipping.
            </motion.p>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="w-full lg:w-1/3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-gray-off p-8 rounded-[24px] border border-border sticky top-32">
              <h3 className="font-outfit font-bold text-navy text-2xl mb-6 pb-4 border-b border-border">Recent Articles</h3>
              <div className="flex flex-col gap-6">
                {Object.entries(blogsData)
                  .filter(([s]) => s !== slug)
                  .slice(0, 3)
                  .map(([s, d], i) => (
                  <Link key={i} to={`/blog/${s}`} className="group flex flex-col gap-1">
                    <span className="font-dm text-orange text-sm font-500">{d.date}</span>
                    <h4 className="font-outfit font-bold text-navy leading-tight group-hover:text-orange transition-colors">
                      {d.title}
                    </h4>
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <Link to="/blog" className="inline-flex items-center gap-2 font-outfit font-bold text-navy hover:text-orange transition-colors">
                  View All News <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
