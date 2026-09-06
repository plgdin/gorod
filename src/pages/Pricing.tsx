import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

const plans = [
  { name: 'Starter', price: '49', features: ['Domestic ground shipping', 'Up to 100 shipments/month', 'Basic analytics dashboard', 'Real-time tracking'] },
  { name: 'Business', price: '99', features: ['Ground + air freight options', 'Up to 200 shipments/month', 'Smart route optimization', 'Real-time tracking'], popular: true },
  { name: 'Premium', price: '199', features: ['Ground + air freight options', 'Up to 500 shipments/month', 'Smart route optimization', 'Live shipment tracking dashboard'] },
]

export default function Pricing() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=2000&q=80" alt="Shipping" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Pricing Plans</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Pricing</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-pad bg-white">
        <div className="inner">
          <motion.div className="text-center mb-16 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-orange" />
              <span className="tag-label text-orange uppercase tracking-wider font-bold">PRICING PLAN</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl max-w-2xl">
              Leading global logistic and transport agency
            </motion.h2>
            <motion.p variants={fadeUp} className="font-dm text-gray-body mt-4 max-w-2xl">
              Having served major companies around the globe for over forty years, we provide full-scale logistics solutions crafted for each industry.
            </motion.p>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
             {plans.map((plan, i) => (
               <motion.div key={i} variants={fadeUp} className={`rounded-[24px] p-8 border ${plan.popular ? 'bg-navy border-navy text-white shadow-xl transform md:-translate-y-4' : 'bg-gray-off border-border text-navy'}`}>
                  <h3 className="font-outfit font-bold text-2xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-bold font-outfit">${plan.price}</span>
                    <span className={`text-sm font-dm ${plan.popular ? 'text-white/70' : 'text-gray-body'}`}>/Month</span>
                  </div>
                  
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="text-orange" size={20} />
                        <span className={`font-dm ${plan.popular ? 'text-white/80' : 'text-gray-body'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className={`block text-center py-4 rounded-full font-outfit font-bold transition-colors ${plan.popular ? 'bg-orange text-white hover:bg-white hover:text-navy' : 'bg-white text-navy border border-border hover:bg-orange hover:text-white hover:border-orange'}`}>
                    Get Started
                  </Link>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
