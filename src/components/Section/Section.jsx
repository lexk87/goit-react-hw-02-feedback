import PropTypes from 'prop-types';
import { PageSection, Title } from './Section.styled';

export const Section = ({ title, children }) => (
    <PageSection>
        {title && <Title>{title}</Title>}
        {children}
    </PageSection>
);

Section.propTypes = {
    title: PropTypes.string,
};
