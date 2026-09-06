import { Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

const testimonials = [
  { text: "Since partnering with Transigo Logistics, my business, ABC Companies, has experienced a significant boost in its ability to fulfill customer orders quickly and efficiently.", author: 'Esther Howard', role: 'Supply Chain Manager' },
  { text: "Switching logistics providers felt daunting, but Transigo's customer service made it smooth. Their team was always available and ready to assist with any concerns.", author: 'Liam Carter', role: 'Freight Coordinator' },
  { text: "I hesitated to move to a new logistics company, yet Transigo's support made it simple. They were responsive, helpful, and ensured a seamless transition.", author: 'Noah Mitchell', role: 'Logistics Analyst' },
  { text: "Thanks to Transigo Logistics, our company, Global Traders, has improved order fulfillment speed and reliability. Their efficient shipping solutions are top-tier.", author: 'Jordan Blake', role: 'Operations Coordinator' },
]

export default function Testimonial() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Testimonials</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Testimonials</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-pad bg-white">
        <div className="inner">
          <motion.div className="text-center mb-16 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-orange" />
              <span className="tag-label text-orange uppercase tracking-wider font-bold">OUR TESTIMONIAL</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">What Our Client Says about us</motion.h2>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-gray-off p-8 rounded-[24px] border border-border relative">
                <Quote className="absolute top-8 right-8 text-orange/20" size={48} />
                <p className="font-dm text-gray-body text-lg leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center text-orange font-bold font-outfit text-xl">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-navy text-xl">{t.author}</h4>
                    <span className="font-dm text-sm text-gray-body">{t.role}</span>
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
