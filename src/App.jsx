import { Component } from 'react';

import { FeedbackOptions, Notification, Section, Statistics } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = (type) => {
    this.setState((state) => ({ [type]: state[type] += 1 }));
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() ? `${this.state.good / this.countTotalFeedback() * 100}%` : '-';
  }

  render() {
    return (
      <>
        <Section title="Please, give feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="There is no feedback" />
          }
        </Section>
      </>
    )
  }
}