import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [roofTypesOpen, setRoofTypesOpen] = useState(false);

  const roofTypes = [
    { name: 'Tile', href: '#tile' },
    { name: 'Metal', href: '#metal' },
    { name: 'Shingle', href: '#shingle' },
    { name: 'Flat', href: '#flat' },
  ];

  const navLinks = [
    { name: 'Residential', href: '#residential' },
    { name: 'Commercial', href: '#commercial' },
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
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-slate-800 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              <div className="relative">
                <button
                  onMouseEnter={() => setRoofTypesOpen(true)}
                  onMouseLeave={() => setRoofTypesOpen(false)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-slate-800 transition-all duration-200 flex items-center gap-1"
                >
                  Roof Types
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {roofTypesOpen && (
                  <div
                    onMouseEnter={() => setRoofTypesOpen(true)}
                    onMouseLeave={() => setRoofTypesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-40 bg-slate-800 rounded-lg shadow-lg py-2 border border-slate-700"
                  >
                    {roofTypes.map((type) => (
                      <a
                        key={type.name}
                        href={type.href}
                        className="block px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 transition-colors duration-200"
                      >
                        {type.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
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
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 rounded-full transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div>
              <button
                onClick={() => setRoofTypesOpen(!roofTypesOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 rounded-full transition-all duration-200"
              >
                Roof Types
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${roofTypesOpen ? 'rotate-180' : ''}`} />
              </button>
              {roofTypesOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {roofTypes.map((type) => (
                    <a
                      key={type.name}
                      href={type.href}
                      className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 rounded-full transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setRoofTypesOpen(false);
                      }}
                    >
                      {type.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
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
