import { NavLink } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { classNames } from '@/utils/helpers';

export const Navigation = ({ className = '' }) => {
  return (
    <nav className={classNames('flex items-center space-x-1', className)}>
      {navigationItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            classNames(
              'px-4 py-2 rounded-lg font-medium transition-all duration-300',
              isActive
                ? 'bg-primary-50 text-primary-600'
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};