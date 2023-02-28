import PropTypes from 'prop-types';
import { BtnList, BtnListItem, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <BtnList>
        {options.map((option, index) => {
            const btnName =
                option.split('')[0].toUpperCase() +
                option.split('').slice(1).join('');

            return (
                <BtnListItem key={index}>
                    <Btn type="button" onClick={() => onLeaveFeedback(option)}>
                        {btnName}
                    </Btn>
                </BtnListItem>
            );
        })}
    </BtnList>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
};
