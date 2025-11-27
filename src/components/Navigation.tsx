import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [roofTypesOpen, setRoofTypesOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);

  const roofTypes = [
    { name: 'Tile', href: '#tile' },
    { name: 'Metal', href: '#metal' },
    { name: 'Shingle', href: '#shingle' },
    { name: 'Flat', href: '#flat' },
  ];

  const serviceAreas = [
    { name: 'Boca Raton', href: '/locations/boca-raton-roofing.html' },
    { name: 'Delray Beach', href: '/locations/delray-beach-roofing.html' },
    { name: 'Boynton Beach', href: '/locations/boynton-beach-roofing.html' },
    { name: 'Lake Worth Beach', href: '/locations/lake-worth-beach-roofing.html' },
    { name: 'West Palm Beach', href: '/locations/west-palm-beach-roofing.html' },
    { name: 'Wellington', href: '/locations/wellington-roofing.html' },
    { name: 'Palm Beach Gardens', href: '/locations/palm-beach-gardens-roofing.html' },
    { name: 'Royal Palm Beach', href: '/locations/royal-palm-beach-roofing.html' },
    { name: 'Jupiter', href: '/locations/jupiter-roofing.html' },
    { name: 'Deerfield Beach', href: '/locations/deerfield-beach-roofing.html' },
    { name: 'Pompano Beach', href: '/locations/pompano-beach-roofing.html' },
    { name: 'Coconut Creek', href: '/locations/coconut-creek-roofing.html' },
    { name: 'Coral Springs', href: '/locations/coral-springs-roofing.html' },
    { name: 'Parkland', href: '/locations/parkland-roofing.html' },
    { name: 'Margate', href: '/locations/margate-roofing.html' },
    { name: 'Fort Lauderdale', href: '/locations/fort-lauderdale-roofing.html' },
    { name: 'Plantation', href: '/locations/plantation-roofing.html' },
    { name: 'Davie', href: '/locations/davie-roofing.html' },
    { name: 'Hollywood', href: '/locations/hollywood-roofing.html' },
    { name: 'Sunrise', href: '/locations/sunrise-roofing.html' },
  ];

  const navLinks = [
    { name: 'Residential', href: '#residential' },
    { name: 'Commercial', href: '#commercial' },
    { name: 'Wind Mitigation', href: '#wind-mitigation' },
    { name: 'Financing', href: '#financing' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Roof Cost Calculator', href: '#calculator' },
  ];

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-xl font-bold text-white">All Phase Construction USA</span>
              <span className="text-[10px] text-neutral-500">FL Licenses: CGC1526236 • CCC1331464 • Dual Licensed GC + Roofing Contractor</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-neutral-800 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              <div className="relative">
                <button
                  onMouseEnter={() => setRoofTypesOpen(true)}
                  onMouseLeave={() => setRoofTypesOpen(false)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-neutral-800 transition-all duration-200 flex items-center gap-1"
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
                      <a
                        key={type.name}
                        href={type.href}
                        className="block px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors duration-200"
                      >
                        {type.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setServiceAreasOpen(true)}
                  onMouseLeave={() => setServiceAreasOpen(false)}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-neutral-800 transition-all duration-200 flex items-center gap-1"
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
                      <a
                        key={area.name}
                        href={area.href}
                        className="block px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors duration-200"
                      >
                        {area.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-white rounded-full hover:bg-neutral-800 transition-all duration-200"
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
              className="text-neutral-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-neutral-950 border-t border-neutral-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div>
              <button
                onClick={() => setRoofTypesOpen(!roofTypesOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
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
                      className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
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

            <div>
              <button
                onClick={() => setServiceAreasOpen(!serviceAreasOpen)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
              >
                Service Areas
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${serviceAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {serviceAreasOpen && (
                <div className="mt-1 ml-4 space-y-1 max-h-64 overflow-y-auto">
                  {serviceAreas.map((area) => (
                    <a
                      key={area.name}
                      href={area.href}
                      className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setServiceAreasOpen(false);
                      }}
                    >
                      {area.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 rounded-full transition-all duration-200"
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
