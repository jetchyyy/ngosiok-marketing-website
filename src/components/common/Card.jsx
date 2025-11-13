import { classNames } from '@/utils/helpers';

export const Card = ({ 
  children, 
  className = '', 
  hover = false,
  ...props 
}) => {
  return (
    <div
      className={classNames(
        'bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={classNames('p-6', className)}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = '' }) => {
  return (
    <div className={classNames('p-6 pt-0', className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={classNames('p-6 pt-0', className)}>
      {children}
    </div>
  );
};