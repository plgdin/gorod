import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart } from 'lucide-react'
import { caseStudiesData } from '../data'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

export default function CaseStudyDetail() {
  const { slug } = useParams()
  
  if (!slug || !(slug in caseStudiesData)) {
    return <Navigate to="/404" replace />
  }

  const data = caseStudiesData[slug as keyof typeof caseStudiesData]
  const title = data.title

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={data.image} alt="Case Study" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-px bg-orange" />
            <span className="tag-label text-orange uppercase tracking-wider font-bold">CASE STUDY</span>
            <span className="w-12 h-px bg-orange" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6 max-w-4xl mx-auto">{title}</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <Link to="/case-study" className="hover:text-orange transition-colors">Projects</Link>
            <span>»</span>
            <span className="text-orange">{title}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="inner">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="bg-gray-off p-8 rounded-[24px] border border-border">
              <span className="font-dm text-gray-body text-sm block mb-1">Client</span>
              <h4 className="font-outfit font-bold text-navy text-xl">{data.client}</h4>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-gray-off p-8 rounded-[24px] border border-border">
              <span className="font-dm text-gray-body text-sm block mb-1">Category</span>
              <h4 className="font-outfit font-bold text-navy text-xl">{data.category}</h4>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-gray-off p-8 rounded-[24px] border border-border">
              <span className="font-dm text-gray-body text-sm block mb-1">Project Duration</span>
              <h4 className="font-outfit font-bold text-navy text-xl">6 Months</h4>
            </motion.div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
               <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl mb-6">The Challenge</motion.h2>
               <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-10 whitespace-pre-line">
                 {data.content}
               </motion.p>
               
               <motion.div variants={fadeUp} className="rounded-[30px] overflow-hidden aspect-video mb-10 shadow-xl">
                 <img src={data.image} alt={title} className="w-full h-full object-cover" />
               </motion.div>
               
               <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl mb-6">The Solution</motion.h2>
               <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed">
                 We implemented our proprietary AI-driven route optimization tool and established a dedicated communication channel. By leveraging our vast network, we bypassed the most congested ports and utilized secondary routes. The implementation was completely seamless and integrated directly into their ERP.
               </motion.p>
            </motion.div>

            {/* Sidebar Results */}
            <motion.div className="w-full lg:w-1/3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-orange p-10 rounded-[30px] text-white sticky top-32 shadow-xl">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <BarChart size={32} />
                </div>
                <h3 className="font-outfit font-bold text-3xl mb-8">Project Results</h3>
                
                <div className="flex flex-col gap-6">
                  <div className="border-b border-white/20 pb-4">
                    <span className="block text-5xl font-bold font-outfit mb-2">45%</span>
                    <span className="font-dm text-white/90 text-lg">Reduction in delays</span>
                  </div>
                  <div className="border-b border-white/20 pb-4">
                    <span className="block text-5xl font-bold font-outfit mb-2">2.5x</span>
                    <span className="font-dm text-white/90 text-lg">Faster delivery time</span>
                  </div>
                  <div>
                    <span className="block text-5xl font-bold font-outfit mb-2">100%</span>
                    <span className="font-dm text-white/90 text-lg">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
