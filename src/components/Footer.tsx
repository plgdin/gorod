import { Share2, Globe, MessageSquare, ArrowUp } from 'lucide-react'

const cols = [
  {
    title: 'Services',
    links: ['Air Freight', 'Ocean Freight', 'Road Freight', 'Warehousing', 'Customs Clearance', 'Supply Chain'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'News & Insights', 'CSR Initiatives', 'Partnerships'],
  },
  {
    title: 'Support',
    links: ['Track Shipment', 'Get a Quote', 'FAQ', 'Documentation', 'Contact Support', 'Port Info'],
  },
]

const socials = [
  { icon: <Globe size={16} />, label: 'Website' },
  { icon: <Share2 size={16} />, label: 'Share' },
  { icon: <MessageSquare size={16} />, label: 'Chat' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-navy-dark pt-20 pb-8">
      <div className="inner">
        <div className="flex flex-col lg:flex-row gap-16 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:w-72 shrink-0 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
                <span className="text-white font-outfit font-black text-sm">G</span>
              </div>
              <span className="font-outfit font-bold text-xl text-white">Gorod</span>
            </div>
            <p className="font-dm text-white/50 text-sm leading-relaxed">
              End-to-end freight & logistics solutions across 190+ countries. Built for speed, reliability, and scale.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:text-orange hover:border-orange transition-all duration-300"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="font-outfit font-600 text-white text-sm uppercase tracking-widest mb-5">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="font-dm text-white/50 text-sm hover:text-orange transition-colors duration-200">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-dm text-white/30 text-sm">
            © {new Date().getFullYear()} Gorod Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-dm text-white/30 text-sm hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="font-dm text-white/30 text-sm hover:text-white/60 transition-colors">Terms of Service</a>
            <button
              onClick={scrollTop}
              className="w-9 h-9 bg-orange rounded-xl flex items-center justify-center text-white hover:bg-orange/80 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
