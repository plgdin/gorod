import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Handle hash scrolling when route changes or hash changes
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  const handleNavClick = () => setOpen(false)

  const isTransparent = !scrolled && location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
      }`}
    >
      <div className="inner flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-2.5 no-underline group">
          <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-outfit font-black text-base leading-none">G</span>
          </div>
          <span className={`font-outfit font-extrabold text-2xl tracking-tight transition-colors ${
            isTransparent ? 'text-white' : 'text-navy'
          }`}>
            Gorod
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={handleNavClick}
              className={`font-outfit font-semibold text-sm transition-colors ${
                isTransparent
                  ? 'text-white/85 hover:text-orange'
                  : 'text-navy hover:text-orange'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/#contact"
            className="btn-primary text-sm py-3 px-6 rounded-full"
            onClick={handleNavClick}
          >
            Get a Quote
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            isTransparent ? 'text-white' : 'text-navy'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="font-outfit font-semibold text-navy text-base hover:text-orange transition-colors"
              onClick={handleNavClick}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="btn-primary text-sm justify-center rounded-full mt-2"
            onClick={handleNavClick}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
