import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = () => {
    return;
  };
  countTotalFeedback = () => {
    return this.setState.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
      </div>
    );
  }
}
