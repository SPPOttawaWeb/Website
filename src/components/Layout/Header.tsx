import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); 
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); 
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home' },

    {
      id: 'about',
      label: 'About',
      children: [
        { id: 'about', label: 'About Us' },
        { id: 'worship', label: 'Worship' },
        { id: 'ministries', label: 'Ministries' },
      ],
    },

    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
    { id: 'donate', label: 'Donate' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
  };

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-lg fixed top-0 left-0 right-0 z-50
      transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="/SPP-PFP-removebg-preview.png"
              alt="Sts. Peter & Paul Logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-xl font-serif font-bold">Sts. Peter & Paul</h1>
              <p className="text-xs text-amber-200">Melkite Catholic Church</p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    className={`px-4 py-2 rounded-md transition-all duration-300 font-medium flex items-center space-x-1 group-hover:text-amber-200 ${
                      currentPage === item.id
                        ? 'bg-amber-500 text-red-900 shadow-md'
                        : 'text-white hover:bg-red-700'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* ROTATING ARROW */}
                    <span
                      className={`
                        text-xs transition-transform duration-300
                        ${aboutOpen ? 'rotate-180' : 'rotate-0'}
                      `}
                    >
                      ▼
                    </span>
                  </button>

                  {/* DROPDOWN MENU */}
                  {aboutOpen && (
                    <div
                      className="
                        absolute left-0 w-64 
                        bg-red-900 text-white
                        rounded-xl shadow-xl py-4 px-2
                        dropdown-animate
                        pt-4 -mt-1 /* gap fix */
                      "
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNavClick(child.id)}
                          className="
                            block w-full text-left 
                            px-4 py-2 my-1 rounded-md 
                            menu-hover-item
                            transition-all duration-200
                            hover:bg-red-700 hover:text-amber-200
                          "
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${
                    currentPage === item.id
                      ? 'bg-amber-500 text-red-900 shadow-md'
                      : 'text-white hover:bg-red-700 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* RIGHT LOGO */}
          <div className="hidden lg:block">
            <a href="https://melkite.ca/" target="_blank" rel="noopener noreferrer">
              <img
                src="/cropped-Melkite-logo-1-3.png"
                alt="Melkite Catholic Church Logo"
                className="h-16 w-16 object-contain"
              />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white hover:text-amber-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-fadeIn">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.id}>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`block w-full text-left px-4 py-3 rounded-md transition-all duration-300 my-1 ${
                      currentPage === item.id
                        ? 'bg-amber-500 text-red-900 font-semibold'
                        : 'text-white hover:bg-red-700 hover:text-amber-200'
                    }`}
                  >
                    {item.label} ▼
                  </button>

                  {mobileAboutOpen && (
                    <div className="ml-4">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNavClick(child.id)}
                          className="block w-full text-left px-4 py-2 my-1 rounded-md text-white hover:bg-red-700 hover:text-amber-200"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-all duration-300 my-1 ${
                    currentPage === item.id
                      ? 'bg-amber-500 text-red-900 font-semibold'
                      : 'text-white hover:bg-red-700 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
