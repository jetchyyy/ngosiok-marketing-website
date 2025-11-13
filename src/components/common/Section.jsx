import { Container } from './Container';
import { classNames } from '@/utils/helpers';

export const Section = ({ 
  children, 
  className = '', 
  containerClassName = '',
  id,
  ...props 
}) => {
  return (
    <section
      id={id}
      className={classNames('py-16 md:py-24', className)}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};