import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Residential', href: '#residential' },
    { name: 'Commercial', href: '#commercial' },
    { name: 'Roof Types', href: '#roof-types' },
    { name: 'HVHZ / Code', href: '#hvhz' },
    { name: 'Condo Grants', href: '#condo-grants' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Calculator', href: '#calculator' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white">
              RoofingPro
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-slate-800 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-500 transition-colors duration-200"
              >
                Request Roof Assessment
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 rounded-full transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-500 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Roof Assessment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
