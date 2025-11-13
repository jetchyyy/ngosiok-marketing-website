import { NavLink } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { classNames } from '@/utils/helpers';

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={classNames(
        'fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-all duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      <nav className="flex flex-col p-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                classNames(
                  'flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300',
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100'
                )
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};