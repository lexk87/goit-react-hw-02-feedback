import React, { Component } from 'react';
import { Section, FeedbackOptions, Notification, Statistics } from 'components';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveFeedback = key => {
        this.setState(prevState => ({
            [key]: prevState[key] + 1,
        }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.leaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {total > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </>
        );
    }
}
