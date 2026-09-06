import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// --- FRAMER MOTION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}
const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
}

// ==========================================
// 1. HERO BANNER
// ==========================================
function AboutHero() {
  return (
    <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop" 
          alt="Ocean freighter" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>
      
      <motion.div 
        className="inner relative z-10 text-center flex flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">About Us</motion.h1>
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-white/80 font-outfit text-lg font-500">
          <Link to="/" className="hover:text-orange transition-colors">Home</Link>
          <span>»</span>
          <span className="text-orange">About Us</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ==========================================
// 2 & 3. OUR EXPERIENCE & METRICS GRID
// ==========================================
function ExperienceSection() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Text Column */}
          <motion.div 
            className="flex-1 flex flex-col items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="tag-label text-orange uppercase tracking-wider font-bold">OUR EXPERIENCE</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-[46px] leading-[1.1]">
              Logistic Services That Can Help You With Delays And Damages.
            </motion.h2>
            
            <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed">
              We provide seamless transportation solutions, ensuring your cargo arrives safely and on time. With our global network and experienced team, we eliminate the stress of logistics, letting you focus on growing your business.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 mt-4">
              <Link to="/#services" className="btn-primary py-4 px-8 rounded-full">
                Know More <ArrowRight size={18} />
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange/20">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Advisor" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-dm text-sm text-gray-body">Call for Support</span>
                  <a href="tel:+25854854845" className="font-outfit font-bold text-navy hover:text-orange transition-colors">
                    +258 - 5485 - 4845
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Metrics Grid */}
          <motion.div 
            className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div variants={scaleUp} className="relative rounded-2xl overflow-hidden aspect-[4/5] md:col-span-1 group">
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80" alt="Road Freight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-orange text-white font-outfit font-bold text-sm px-4 py-1.5 rounded-full mb-3">
                  Road Freight
                </span>
                <h3 className="text-white font-outfit font-bold text-xl">Trusted Transport</h3>
              </div>
            </motion.div>
            
            <div className="md:col-span-1 flex flex-col gap-6">
              {/* Card 2 */}
              <motion.div variants={scaleUp} className="bg-navy rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden h-full group">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-orange/10 rounded-full blur-2xl group-hover:bg-orange/20 transition-colors" />
                <h3 className="heading-display text-white text-5xl mb-2">520<span className="text-orange">+</span></h3>
                <p className="font-outfit font-500 text-white/80 text-lg">Projects Completed</p>
              </motion.div>
              
              {/* Card 3 */}
              <motion.div variants={scaleUp} className="bg-gray-off rounded-2xl p-6 flex flex-col h-full border border-border">
                <h3 className="font-outfit font-bold text-navy text-xl leading-tight mb-4">
                  #1 & certified award logistic services
                </h3>
                <div className="mt-auto rounded-xl overflow-hidden h-32 relative">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" alt="Warehouse" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 4. WORKING PROCESS
// ==========================================
function WorkingProcess() {
  const steps = [
    { number: '01', title: 'Get a Quote', desc: 'Simply provide details about your shipment, and we\'ll give you a transparent quote.' },
    { number: '02', title: 'Book Your Shipment', desc: 'Enter your shipment info, and receive a clear, upfront pricing estimate.' },
    { number: '03', title: 'Delivery & Support', desc: 'Share your delivery details, and get a quick, transparent quote instantly.' },
  ]
  
  return (
    <section className="section-pad bg-white border-t border-border overflow-hidden">
      <div className="inner">
        <motion.div 
          className="text-center mb-16 flex flex-col items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-orange" />
            <span className="tag-label text-orange uppercase tracking-wider font-bold">WORKING PROCESS</span>
            <span className="w-12 h-px bg-orange" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl uppercase">The Best Ways Of Logistics</motion.h2>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-off flex items-center justify-center text-navy font-outfit font-bold text-2xl mb-6 shadow-sm transition-colors duration-300 group-hover:border-orange group-hover:text-orange">
                  {step.number}
                </div>
                <h3 className="font-outfit font-bold text-navy text-2xl mb-4">{step.title}</h3>
                <p className="font-dm text-gray-body leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// 5. ABOUT US (Committed to moving)
// ==========================================
function AboutContent() {
  return (
    <section className="section-pad bg-gray-off overflow-hidden">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div 
            className="flex-1 flex flex-col items-start gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="tag-label text-orange uppercase tracking-wider font-bold">ABOUT US</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-[46px] leading-[1.1]">
              Committed to Moving Your Business Forward
            </motion.h2>
            
            <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-4">
              Since 1995, Transigo has been your trust partner, navigating complexities of shipping with ease. Our years of the 25experiences ensured reliable and keeping your supply chain moving smoothly on the road.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Link to="/about" className="btn-primary py-4 px-8 rounded-full">
                About More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp}
          >
             <div className="relative rounded-[30px] overflow-hidden aspect-[4/3] group cursor-pointer shadow-xl">
               <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1000&q=80" alt="Container Ship" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-orange ml-1" size={32} fill="currentColor" />
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 6. OUR TEAM
// ==========================================
function Team() {
  const team = [
    { name: 'Guy Hawkins', role: 'CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: 'Jane Cooper', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Jerome Bell', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
  ]
  
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="inner">
        <motion.div 
          className="text-center mb-16 flex flex-col items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-orange" />
            <span className="tag-label text-orange uppercase tracking-wider font-bold">OUR PROFESSIONALS</span>
            <span className="w-12 h-px bg-orange" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">Our Service Expert</motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {team.map((member, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-gray-off rounded-[24px] p-4 border border-border group hover:shadow-lg transition-shadow">
              <div className="rounded-[16px] overflow-hidden aspect-square mb-6 relative">
                <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="text-center pb-2">
                <h3 className="font-outfit font-bold text-navy text-2xl mb-1">{member.name}</h3>
                <p className="font-dm text-orange font-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// 7. CLIENT LOGOS BANNER
// ==========================================
function LogoBanner() {
  return (
    <div className="w-full bg-navy py-12 overflow-hidden flex">
      <div className="flex animate-marquee whitespace-nowrap gap-24 items-center px-12">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-24 opacity-60">
            <span className="font-outfit font-bold text-white/50 text-2xl tracking-widest uppercase">Cargo Ship</span>
            <span className="font-outfit font-bold text-white/50 text-2xl tracking-widest uppercase">Trans Logis</span>
            <span className="font-outfit font-bold text-white/50 text-2xl tracking-widest uppercase">Global Freight</span>
            <span className="font-outfit font-bold text-white/50 text-2xl tracking-widest uppercase">Fast Delivery</span>
            <span className="font-outfit font-bold text-white/50 text-2xl tracking-widest uppercase">Ocean Line</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ==========================================
// 8. LATEST PROJECTS
// ==========================================
function LatestProjects() {
  const projects = [
    { title: 'Ocean Freight', img: 'https://images.unsplash.com/photo-1559297434-fae8a1016aeb?w=600&q=80' },
    { title: 'Air freight', img: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&q=80' },
    { title: 'Warehouse', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  ]
  
  return (
    <section className="section-pad bg-white border-t border-border overflow-hidden">
      <div className="inner">
        <motion.div 
          className="text-center mb-16 flex flex-col items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-orange" />
            <span className="tag-label text-orange uppercase tracking-wider font-bold">LATEST PROJECT</span>
            <span className="w-12 h-px bg-orange" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl max-w-2xl mx-auto leading-tight">
            Your Roadmap to Success with Trusted projects
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {projects.map((proj, i) => (
            <motion.div key={i} variants={fadeUp} className="group relative rounded-[24px] overflow-hidden aspect-[4/3] cursor-pointer">
              <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="font-outfit font-bold text-white text-2xl mb-2">{proj.title}</h3>
                <span className="inline-flex items-center text-orange font-dm font-500 gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  View Details <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================
export default function About() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <ExperienceSection />
      <WorkingProcess />
      <AboutContent />
      <Team />
      <LogoBanner />
      <LatestProjects />
    </motion.main>
  )
}
