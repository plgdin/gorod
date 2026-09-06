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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' ? 'navbar-glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="inner flex items-center justify-between py-5">
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 no-underline">
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
              <span className="text-white font-outfit font-black text-sm leading-none">G</span>
            </div>
            <span className="font-outfit font-bold text-xl text-navy tracking-tight">Gorod</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.label} to={l.href} className="nav-link" onClick={handleNavClick}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/#contact" className="btn-primary text-sm py-3 px-6" onClick={handleNavClick}>
            Get a Quote
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden navbar-glass border-t border-gray-100 px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.label} to={l.href} className="nav-link text-base" onClick={handleNavClick}>
              {l.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn-primary text-sm justify-center" onClick={handleNavClick}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
