import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

const services = [
  { title: 'International Transport', desc: 'Redefining international transport with reliable, fast, and seamless connectivity across global destinations.', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80', link: '/services/international-transport' },
  { title: 'Local Truck Transport', desc: 'Reliable and efficient local truck transport, ensuring timely deliveries and smooth logistics within your region.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80', link: '/services/local-truck-transport' },
  { title: 'Rail Personal Delivery', desc: 'Fast and secure rail delivery services, ensuring your personal shipments reach their destination safely and on time.', img: 'https://images.unsplash.com/photo-1541882195000-0e10cc106d33?w=600&q=80', link: '/services/rail-personal-delivery' },
  { title: 'Global Freight Services', desc: 'Comprehensive global freight services handling complex international shipping requirements.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80', link: '/services/global-freight-services' },
  { title: 'Land Freight Services', desc: 'Optimized land freight routes for cost-effective continental transportation.', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80', link: '/services/land-freight-services' },
  { title: 'Warehousing Services', desc: 'Secure, climate-controlled warehousing facilities integrated with modern inventory systems.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80', link: '/services/warehousing-services' },
  { title: 'Global Transport', desc: 'End-to-end global transport solutions spanning multiple continents and borders.', img: 'https://images.unsplash.com/photo-1559297434-fae8a1016aeb?w=600&q=80', link: '/services/global-transport' },
  { title: 'Train Cargo', desc: 'High-capacity train cargo solutions for heavy industry and bulk materials.', img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80', link: '/services/train-cargo' },
  { title: 'Smart Storage', desc: 'AI-driven smart storage facilities that optimize space and retrieval speeds.', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80', link: '/services/smart-storage' },
]

export default function Services() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Page Header */}
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2000&q=80" alt="Warehouse" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Our Services</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Services</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-white">
        <div className="inner">
          <motion.div className="text-center mb-16 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-orange" />
              <span className="tag-label text-orange uppercase tracking-wider font-bold">WHAT WE DO</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">Transport & Logistics Services</motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {services.map((srv, i) => (
              <motion.div key={i} variants={fadeUp} className="group flex flex-col h-full bg-gray-off rounded-[24px] overflow-hidden border border-border">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-start">
                  <h3 className="font-outfit font-bold text-navy text-2xl mb-4 group-hover:text-orange transition-colors">
                    <Link to={srv.link}>{srv.title}</Link>
                  </h3>
                  <p className="font-dm text-gray-body mb-6 leading-relaxed flex-1">{srv.desc}</p>
                  <Link to={srv.link} className="inline-flex items-center gap-2 font-outfit font-bold text-navy group-hover:text-orange transition-colors">
                    Read More <ArrowRight size={16} />
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
