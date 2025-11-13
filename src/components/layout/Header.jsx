import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 font-heading">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-xs text-gray-600">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          <Navigation className="hidden md:flex" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};