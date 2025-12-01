import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [roofTypesOpen, setRoofTypesOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const location = useLocation();

  const roofTypes = [
    { name: 'Shingle', href: '/roof-types/shingle' },
    { name: 'Tile', href: '/roof-types/tile' },
    { name: 'Metal', href: '/roof-types/metal' },
    { name: 'Flat', href: '/roof-types/flat' },
  ];

  const serviceAreas = [
    { name: 'Boca Raton', href: '/service-areas/boca-raton' },
    { name: 'Delray Beach', href: '/service-areas/delray-beach' },
    { name: 'Boynton Beach', href: '/service-areas/boynton-beach' },
    { name: 'West Palm Beach', href: '/service-areas/west-palm-beach' },
    { name: 'Fort Lauderdale', href: '/service-areas/fort-lauderdale' },
    { name: 'Pompano Beach', href: '/service-areas/pompano-beach' },
    { name: 'Deerfield Beach', href: '/service-areas/deerfield-beach' },
    { name: 'Coral Springs', href: '/service-areas/coral-springs' },
    { name: 'Parkland', href: '/service-areas/parkland' },
    { name: 'Coconut Creek', href: '/service-areas/coconut-creek' },
    { name: 'Margate', href: '/service-areas/margate' },
    { name: 'Plantation', href: '/service-areas/plantation' },
    { name: 'Davie', href: '/service-areas/davie' },
    { name: 'Hollywood', href: '/service-areas/hollywood' },
    { name: 'Sunrise', href: '/service-areas/sunrise' },
    { name: 'Wellington', href: '/service-areas/wellington' },
    { name: 'Palm Beach Gardens', href: '/service-areas/palm-beach-gardens' },
    { name: 'Royal Palm Beach', href: '/service-areas/royal-palm-beach' },
    { name: 'Jupiter', href: '/service-areas/jupiter' },
    { name: 'Lake Worth Beach', href: '/service-areas/lake-worth-beach' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Residential', href: '/residential-roofing' },
    { name: 'Commercial', href: '/commercial-roofing' },
    { name: 'Wind Mitigation', href: '/wind-mitigation' },
    { name: 'Financing', href: '/financing' },
    { name: 'Roof Cost Calculator', href: '/roof-cost-calculator' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col py-1">
              <span className="text-xl font-bold text-white leading-tight">All Phase Construction USA</span>
              <span className="text-xs text-neutral-400 leading-tight mt-1">CGC1526236 • CCC1331464</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-200 ${
                    location.pathname === link.href ? 'text-red-500' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="relative">
                <button
                  onMouseEnter={() => setRoofTypesOpen(true)}
                  onMouseLeave={() => setRoofTypesOpen(false)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-neutral-800 transition-all duration-200 flex items-center gap-1"
                  aria-label="Roof types menu"
                  aria-expanded={roofTypesOpen}
                >
                  Roof Types
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {roofTypesOpen && (
                  <div
                    onMouseEnter={() => setRoofTypesOpen(true)}
                    onMouseLeave={() => setRoofTypesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-40 bg-neutral-900 rounded-lg shadow-lg py-2 border border-neutral-700"
                  >
                    {roofTypes.map((type) => (
                      <Link
                        key={type.name}
                        to={type.href}
                        className="block px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors duration-200"
                      >
                        {type.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setServiceAreasOpen(true)}
                  onMouseLeave={() => setServiceAreasOpen(false)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-neutral-800 transition-all duration-200 flex items-center gap-1"
                  aria-label="Service areas menu"
                  aria-expanded={serviceAreasOpen}
                >
                  Service Areas
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {serviceAreasOpen && (
                  <div
                    onMouseEnter={() => setServiceAreasOpen(true)}
                    onMouseLeave={() => setServiceAreasOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 bg-neutral-900 rounded-lg shadow-lg py-2 border border-neutral-700 max-h-96 overflow-y-auto"
                  >
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.name}
                        to={area.href}
                        className="block px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors duration-200"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-200 ${
                    location.pathname === link.href ? 'text-red-500' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-500 transition-colors duration-200"
              >
                Request Roof Assessment
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-neutral-950 border-t border-neutral-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setRoofTypesOpen(!roofTypesOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                aria-label="Toggle roof types menu"
                aria-expanded={roofTypesOpen}
              >
                Roof Types
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${roofTypesOpen ? 'rotate-180' : ''}`} />
              </button>
              {roofTypesOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {roofTypes.map((type) => (
                    <Link
                      key={type.name}
                      to={type.href}
                      className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setRoofTypesOpen(false);
                      }}
                    >
                      {type.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                aria-label="Toggle service areas menu"
                aria-expanded={serviceAreasOpen}
              >
                Service Areas
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${serviceAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {serviceAreasOpen && (
                <div className="mt-1 ml-4 space-y-1 max-h-64 overflow-y-auto">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.name}
                      to={area.href}
                      className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setServiceAreasOpen(false);
                      }}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block mt-4 px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-500 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Roof Assessment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
