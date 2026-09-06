import { useState } from 'react'
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate backend API call (e.g. EmailJS)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="relative w-full pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center bg-navy">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=2000&q=80" alt="Contact" className="w-full h-full object-cover" />
        </div>
        <motion.div className="inner relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp} className="heading-display text-white mb-6">Contact Us</motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-white/80 font-outfit text-lg font-500">
            <Link to="/" className="hover:text-orange transition-colors">Home</Link>
            <span>»</span>
            <span className="text-orange">Contact</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-pad bg-white">
        <div className="inner flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div className="w-full lg:w-1/3 flex flex-col gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp}>
              <h2 className="heading-section text-navy text-4xl mb-6">Get In Touch</h2>
              <p className="font-dm text-gray-body mb-8">We are here to answer any questions you may have about our logistics and transport services. Reach out to us and we'll respond as soon as we can.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                <MapPin className="text-orange" size={24} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-navy text-xl mb-1">Location</h4>
                <p className="font-dm text-gray-body">235 Camden St, Rockland, ME 04841, USA</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                <Phone className="text-orange" size={24} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-navy text-xl mb-1">Phone</h4>
                <p className="font-dm text-gray-body">+165-920-6677<br/>+258 - 5485 - 4845</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                <Mail className="text-orange" size={24} />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-navy text-xl mb-1">Email</h4>
                <p className="font-dm text-gray-body">hello@pentaclay.com<br/>support@transigo.com</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="w-full lg:w-2/3 bg-gray-off p-8 lg:p-12 rounded-[30px] border border-border" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h3 variants={fadeUp} className="heading-section text-navy text-3xl mb-8">Send a Message</motion.h3>
            {submitted ? (
              <motion.div variants={fadeUp} className="bg-green-50 text-green-800 p-8 rounded-xl border border-green-200">
                <h4 className="font-outfit font-bold text-2xl mb-2">Message Sent Successfully!</h4>
                <p className="font-dm">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-orange hover:underline font-dm font-bold">Send another message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input variants={fadeUp} required type="text" placeholder="Your Name" className="w-full bg-white border border-border rounded-xl px-6 py-4 font-dm focus:outline-none focus:border-orange transition-colors" />
                  <motion.input variants={fadeUp} required type="email" placeholder="Your Email" className="w-full bg-white border border-border rounded-xl px-6 py-4 font-dm focus:outline-none focus:border-orange transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input variants={fadeUp} type="text" placeholder="Phone Number" className="w-full bg-white border border-border rounded-xl px-6 py-4 font-dm focus:outline-none focus:border-orange transition-colors" />
                  <motion.input variants={fadeUp} type="text" placeholder="Subject" className="w-full bg-white border border-border rounded-xl px-6 py-4 font-dm focus:outline-none focus:border-orange transition-colors" />
                </div>
                <motion.textarea variants={fadeUp} required placeholder="Write your message here..." rows={6} className="w-full bg-white border border-border rounded-xl px-6 py-4 font-dm focus:outline-none focus:border-orange transition-colors resize-none"></motion.textarea>
                <motion.button variants={fadeUp} disabled={isSubmitting} type="submit" className="btn-primary py-4 px-8 self-start rounded-full flex items-center gap-2">
                  {isSubmitting && <Loader2 size={18} className="animate-spin" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
