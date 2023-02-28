import React, { Component } from 'react';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round(
            (this.state.good / this.countPositiveFeedbackPercentage()) * 100
        );
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);

        return (
            <>
                <Section>
                    <FeedbackOptions />
                </Section>

                <Section>
                    {total > 0 ? <Statistics /> : <Notification />}
                </Section>
            </>
        );
    }
}
