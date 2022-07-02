import PropTypes from 'prop-types';
import { Header } from './Section.styled';

function Section({ title, children }) {
  return (
    <>
      <Header>{title}</Header>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
