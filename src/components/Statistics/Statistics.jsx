import PropTypes from 'prop-types';
import { List, Item, Txt } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => (
    <List>
        <Item>
            <Txt>Good: {good}</Txt>
        </Item>
        <Item>
            <Txt>Neutral: {neutral}</Txt>
        </Item>
        <Item>
            <Txt>Bad: {bad}</Txt>
        </Item>
        <Item>
            <Txt>Total: {total}</Txt>
        </Item>
        <Item>
            <Txt>Positive feedback: {positivePercentage}%</Txt>
        </Item>
    </List>
);

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
