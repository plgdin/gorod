import { ArrowRight, Play, Phone, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// --- FRAMER MOTION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
// 1. HERO SECTION
// ==========================================
function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-[#020e28] flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40 pb-8 lg:pb-12 min-h-[100svh] lg:min-h-[860px] overflow-hidden"
    >
      {/* ── Background image + deep blue overlays ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
          alt="Logistics warehouse"
          className="w-full h-full object-cover"
        />
        {/* Deep blue color overlay mask */}
        <div className="absolute inset-0 bg-[#020e28]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020e28] via-[#020e28]/85 to-[#020e28]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020e28] via-transparent to-transparent" />
      </div>

      {/* ── Hero Main Content ── */}
      <div className="relative z-10 w-full flex-1 flex items-center py-4 lg:py-8">
        <div className="inner w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & CTAs */}
            <motion.div
              className="lg:col-span-8 max-w-2xl"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <span className="tag-label text-orange uppercase tracking-widest font-bold text-xs sm:text-sm">
                  WORLDWIDE SERVICES
                </span>
                <span className="w-10 h-px bg-orange" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="heading-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] leading-[1.05] tracking-tight uppercase mb-6"
              >
                Streamlined <span className="text-orange">Logistics</span> For Your Business
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-dm text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              >
                With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
                <Link to="/request-quote" className="btn-primary py-4 px-8 rounded-full text-sm font-outfit font-semibold">
                  Free Quote! <ArrowRight size={17} />
                </Link>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/25 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <Play className="text-white group-hover:text-orange ml-0.5" size={17} fill="currentColor" />
                  </div>
                  <span className="font-outfit font-semibold text-white/90 group-hover:text-orange transition-colors text-sm">
                    Watch Video
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: 35k+ Pill and Rotating Badge */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center gap-7"
            >
              {/* 35k+ clients pill */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-6 py-2 shadow-xl hover:bg-white/15 transition-all"
              >
                <div className="flex -space-x-2.5">
                  {['photo-1534528741775-53994a69daeb', 'photo-1507003211169-0a1dd7228f2d', 'photo-1500648767791-00dcc994a43e'].map((id) => (
                    <img
                      key={id}
                      className="w-10 h-10 rounded-full ring-2 ring-[#020e28] object-cover"
                      src={`https://images.unsplash.com/${id}?w=100&auto=format&fit=crop&q=80`}
                      alt="Client"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-outfit font-extrabold text-white text-lg leading-none">35k+</p>
                  <p className="font-dm text-white/70 text-xs mt-0.5">Happy Clients of Our Services</p>
                </div>
              </motion.div>

              {/* Rotating "Let's Get Started" badge */}
              <motion.div variants={fadeUp}>
                <Link
                  to="/request-quote"
                  className="group relative w-[148px] h-[148px] rounded-full bg-[#020e28] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border border-white/25 shrink-0"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 148 148" className="w-full h-full">
                      <defs>
                        <path id="badgeRing" d="M 74,74 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0" />
                      </defs>
                      <text fill="white" fontSize="10.5" fontFamily="Outfit, sans-serif" fontWeight="700" letterSpacing="3">
                        <textPath href="#badgeRing" startOffset="0%">
                          ✦ LET'S GET STARTED ✦ LET'S GET STARTED
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="w-[60px] h-[60px] rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/15 transition-all duration-300">
                    <ArrowUpRight className="text-white group-hover:scale-110 transition-transform" size={24} strokeWidth={2} />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 w-full pt-4 lg:pt-6">
        <div className="inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-white rounded-2xl lg:rounded-[24px] px-6 lg:px-8 py-5 lg:py-6 shadow-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center"
          >
            {[
              { label: 'Seamless Transit',    val: '24/7'  },
              { label: 'Team Members',        val: '150+'  },
              { label: 'Years of Experience', val: '25+'   },
              { label: 'Satisfied Customers', val: '10K+'  },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-orange" size={22} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-outfit font-extrabold text-navy text-xl lg:text-2xl leading-none">{s.val}</h4>
                  <p className="font-dm text-gray-body text-xs sm:text-sm mt-1 truncate">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 2. ABOUT US
// ==========================================
function AboutSection() {
  return (
    <section id="about" className="section-pad bg-gray-off lg:pt-28">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1 w-full relative"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleUp}
          >
             <div className="relative rounded-[30px] overflow-hidden aspect-[4/5] shadow-xl">
               <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&q=80" alt="Truck Transport" className="absolute inset-0 w-full h-full object-cover" />
               
               {/* Badge inside image wrapper with nice padding */}
               <div className="absolute bottom-6 right-6 bg-orange text-white p-6 sm:p-7 rounded-[24px] shadow-2xl max-w-[240px]">
                  <h3 className="heading-display text-4xl sm:text-5xl mb-1 text-white">25+</h3>
                  <p className="font-outfit font-bold text-sm sm:text-base leading-tight text-white">Years Of Working Experience In Logistics</p>
               </div>
             </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex flex-col items-start gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="tag-label text-orange uppercase tracking-wider font-bold">ABOUT US</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-[46px] leading-[1.1]">
              Committed to Moving Your Business Forward
            </motion.h2>
            
            <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-4">
              Since 1995, Transigo has been your trust partner, navigating complexities of shipping with ease. Our years of the 25 experiences ensured reliable and keeping your supply chain moving smoothly on the road.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Link to="/about" className="btn-primary py-4 px-8 rounded-full">
                About More <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 3. OUR SERVICES
// ==========================================
function Services() {
  const services = [
    { title: 'International Transport', desc: 'Redefining international transport with reliable, fast, and seamless connectivity across global destinations.', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80', link: '/services/international-transport' },
    { title: 'Local Truck Transport', desc: 'Reliable and efficient local truck transport, ensuring timely deliveries and smooth logistics within your region.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80', link: '/services/local-truck-transport' },
    { title: 'Rail Personal Delivery', desc: 'Fast and secure rail delivery services, ensuring your personal shipments reach their destination safely and on time.', img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80', link: '/services/rail-personal-delivery' },
  ]
  return (
    <section id="services" className="section-pad bg-white">
      <div className="inner">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="tag-label text-orange uppercase tracking-wider font-bold">OUR SERVICES</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">Transport & Logistics Services</motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/services" className="font-outfit font-bold text-navy hover:text-orange flex items-center gap-2 transition-colors">
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
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
  )
}

// ==========================================
// 4. WORKING PROCESS
// ==========================================
function Process() {
  const steps = [
    { num: '01', title: 'Get a Quote', desc: 'Simply provide details about your shipment, and we\'ll give you a transparent quote.' },
    { num: '02', title: 'Book Your Shipment', desc: 'Enter your shipment info, and receive a clear, upfront pricing estimate.' },
    { num: '03', title: 'Delivery & Support', desc: 'Share your delivery details, and get a quick, transparent quote instantly.' },
  ]
  return (
    <section className="section-pad bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="inner relative z-10">
        <motion.div 
          className="text-center mb-20 flex flex-col items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <span className="w-12 h-px bg-orange" />
            <span className="tag-label text-orange uppercase tracking-wider font-bold">WORKING PROCESS</span>
            <span className="w-12 h-px bg-orange" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="heading-section text-4xl lg:text-5xl uppercase text-white">
            the best Ways of Logistics
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-white/20 -z-10" />
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-navy border-4 border-white/10 flex items-center justify-center text-white font-outfit font-bold text-2xl mb-6 shadow-xl transition-all duration-300 group-hover:border-orange group-hover:bg-orange">
                {s.num}
              </div>
              <h3 className="font-outfit font-bold text-2xl mb-4 text-white">{s.title}</h3>
              <p className="font-dm text-white/70 leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// 5. PROVEN SUCCESS
// ==========================================
function ProvenSuccess() {
  return (
    <section className="section-pad bg-white">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           <motion.div 
            className="flex-1 flex flex-col items-start gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="tag-label text-orange uppercase tracking-wider font-bold">PROVEN SUCCESS</span>
              <span className="w-12 h-px bg-orange" />
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-[46px] leading-[1.1] uppercase">
              we've helped clients optimize their logistics operations
            </motion.h2>
            
            <div className="flex flex-col gap-6 mt-4 w-full">
               {[
                 { title: 'Our cargo service ensures reduced costs through efficient logistics and streamlined operations.', icon: <CheckCircle2 className="text-orange" size={24}/> },
                 { title: 'Our air transport service guarantees faster delivery through optimized routing and time-efficient operations.', icon: <CheckCircle2 className="text-orange" size={24}/> },
                 { title: 'Rail transport offers a sustainable and budget-friendly solution for moving large volumes of goods.', icon: <CheckCircle2 className="text-orange" size={24}/> },
               ].map((item, i) => (
                 <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <p className="font-outfit font-600 text-navy text-lg">{item.title}</p>
                 </motion.div>
               ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleUp}
          >
             <div className="relative rounded-[30px] overflow-hidden aspect-square shadow-xl p-8 bg-gray-off flex flex-col justify-center">
                 <h3 className="heading-display text-navy text-3xl mb-6">Keep track of your shipments with real-time updates and full transparency.</h3>
                 <p className="font-dm text-gray-body text-lg mb-8">Receive instant notifications about your parcels for worry-free delivery.</p>
                 <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80" alt="Tracking Map" className="w-full h-48 object-cover rounded-xl" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 6. OUR PROFESSIONALS
// ==========================================
function Professionals() {
  const team = [
    { name: 'Guy Hawkins', role: 'CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', link: '/team/guy-hawkins' },
    { name: 'Jane Cooper', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', link: '/team/jane-cooper' },
    { name: 'Jerome Bell', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', link: '/team/jerome-bell' },
  ]
  return (
    <section className="section-pad bg-gray-off border-t border-border">
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
            <motion.div key={i} variants={fadeUp} className="bg-white rounded-[24px] p-4 border border-border group hover:shadow-lg transition-shadow">
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
  )
}

// ==========================================
// 7. WHY CHOOSE US
// ==========================================
function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
             className="flex-1 w-full relative"
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp}
           >
              <div className="relative rounded-[30px] overflow-hidden aspect-[4/5] shadow-xl">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000&q=80" alt="Why choose us" className="absolute inset-0 w-full h-full object-cover" />
              </div>
           </motion.div>
           
           <motion.div 
             className="flex-1 flex flex-col items-start gap-6"
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
           >
             <motion.div variants={fadeUp} className="flex items-center gap-2">
               <span className="tag-label text-orange uppercase tracking-wider font-bold">WHY CHOOSE US</span>
               <span className="w-12 h-px bg-orange" />
             </motion.div>
             
             <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-[46px] leading-[1.1]">
               Why Businesses Trust Our Logistics Solutions
             </motion.h2>
             
             <motion.p variants={fadeUp} className="font-dm text-gray-body text-lg leading-relaxed mb-4">
               With more than 40 years of expertise serving major businesses worldwide, we deliver comprehensive logistics solutions customized for diverse industries.
             </motion.p>
             
             <div className="grid grid-cols-2 gap-4 w-full mb-6">
                {['Fast & Reliable Delivery', 'End-to-End Solutions', 'Smart Technology', 'Competitive Pricing'].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-center gap-2">
                    <CheckCircle2 className="text-orange" size={20} />
                    <span className="font-outfit font-600 text-navy">{item}</span>
                  </motion.div>
                ))}
             </div>

             <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8">
               <Link to="/about" className="btn-primary py-4 px-8 rounded-full">
                 About More <ArrowRight size={18} />
               </Link>
               
               <div className="flex flex-col">
                 <span className="font-dm text-sm text-gray-body">Call Us For Any Inquiry</span>
                 <a href="tel:+25854854845" className="font-outfit font-bold text-navy hover:text-orange transition-colors flex items-center gap-2">
                   <Phone size={18} className="text-orange"/> +258 - 5485 - 4845
                 </a>
               </div>
             </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// 8. PRICING PLAN
// ==========================================
function Pricing() {
  const plans = [
    { name: 'Starter', price: '49', features: ['Domestic ground shipping', 'Up to 100 shipments/month', 'Basic analytics dashboard', 'Real-time tracking'] },
    { name: 'Business', price: '99', features: ['Ground + air freight options', 'Up to 200 shipments/month', 'Smart route optimization', 'Real-time tracking'], popular: true },
    { name: 'Premium', price: '199', features: ['Ground + air freight options', 'Up to 500 shipments/month', 'Smart route optimization', 'Live shipment tracking dashboard'] },
  ]
  return (
    <section className="section-pad bg-gray-off border-t border-border">
      <div className="inner">
        <motion.div 
          className="text-center mb-16 flex flex-col items-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
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
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
           {plans.map((plan, i) => (
             <motion.div key={i} variants={fadeUp} className={`rounded-[24px] p-8 border ${plan.popular ? 'bg-navy border-navy text-white shadow-xl transform md:-translate-y-4' : 'bg-white border-border text-navy'}`}>
                <h3 className="font-outfit font-bold text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold font-outfit">${plan.price}</span>
                  <span className={`text-sm font-dm ${plan.popular ? 'text-white/70' : 'text-gray-body'}`}>/Month</span>
                </div>
                
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className={plan.popular ? "text-orange" : "text-orange"} size={20} />
                      <span className={`font-dm ${plan.popular ? 'text-white/80' : 'text-gray-body'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className={`block text-center py-4 rounded-full font-outfit font-bold transition-colors ${plan.popular ? 'bg-orange text-white hover:bg-white hover:text-navy' : 'bg-gray-off text-navy hover:bg-orange hover:text-white'}`}>
                  Get Started
                </Link>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// 9. BLOG
// ==========================================
function BlogSection() {
  const blogs = [
    { cat: 'Cargo Terminals', title: "Transigo Named a Finalist For Year' 25 Best Choice Award", author: 'Adam Smith', role: 'Founder', link: '/blog/transigo-named-a-finalist-for-year-25-best-choice-award', img: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&q=80' },
    { cat: 'Road Transport', title: 'Focus logistics secure new landmark Contracts', author: 'Charles Edward', role: 'CEO', link: '/blog/focus-logistics-secure-new-landmark-contracts', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80' },
    { cat: 'Rail Transport', title: 'Green Logistics Solutions for a Greener Future', author: 'Robert Lee', role: 'Co-Founder', link: '/blog/green-logistics-solutions-for-a-greener-future', img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80' },
  ]
  return (
    <section className="section-pad bg-white">
       <div className="inner">
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <span className="tag-label text-orange uppercase tracking-wider font-bold">BLOG & NEWS</span>
                <span className="w-12 h-px bg-orange" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="heading-section text-navy text-4xl lg:text-5xl">Read All Our Logistics Blogs</motion.h2>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {blogs.map((b, i) => (
              <motion.div key={i} variants={fadeUp} className="group rounded-[24px] overflow-hidden border border-border">
                <Link to={b.link} className="block relative aspect-[4/3] overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full font-outfit font-bold text-navy text-sm">
                    {b.cat}
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-outfit font-bold text-navy text-2xl mb-4 group-hover:text-orange transition-colors">
                    <Link to={b.link}>{b.title}</Link>
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
  )
}

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutSection />
      <Services />
      <Process />
      <ProvenSuccess />
      <Professionals />
      <WhyUs />
      <Pricing />
      <BlogSection />
    </motion.main>
  )
}
