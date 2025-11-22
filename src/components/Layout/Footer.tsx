import { Church, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'worship', label: 'Mass Times' },
    { id: 'events', label: 'Events' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'donate', label: 'Give' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="bg-amber-400 p-2 rounded-lg">
                  <Church className="h-6 w-6 text-red-900" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold">Sts. Peter & Paul</h3>
                  <p className="text-xs text-amber-200">Melkite Catholic Church</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A Byzantine Catholic community celebrating the ancient traditions of Eastern Christianity in union with {' '}
                <a
                  href="https://www.vatican.va/content/vatican/en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline">
                  Rome
                </a>.
              </p>
            </div>

            <div>
              <h4 className="text-amber-400 font-serif font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-gray-400 hover:text-amber-300 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-amber-400 font-serif font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-center md:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    1161 N River Rd<br />
                    Ottawa, ON K1K 2C8
                  </span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <a href="tel:+16137466091" className="text-gray-400 hover:text-amber-300">(613) 746-6091</a>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <a href="mailto:info@melkite.com" className="text-gray-400 hover:text-amber-300">info@melkite.com</a>
                </li>
              </ul>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Saints Peter and Paul Melkite Catholic Church. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-amber-400">
            A parish of the Melkite Greek Catholic Church
          </p>
        </div>
      </div>
    </footer>
  );
}
