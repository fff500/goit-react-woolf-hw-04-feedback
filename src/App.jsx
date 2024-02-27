import { useState } from 'react';

import { FeedbackOptions, Notification, Section, Statistics } from 'components';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const { good, neutral, bad } = feedbacks;

  const handleFeedback = (type) => {
    setFeedbacks((state) => ({ ...state, [type]: state[type] + 1 }));
  }

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbacksPercentage = () => {
    return countTotalFeedbacks() ? `${(good / countTotalFeedbacks() * 100).toFixed(2)}%` : '-';
  }

  return (
    <>
      <Section title="Please, give feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedbacks() ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedbacks()}
            positivePercentage={countPositiveFeedbacksPercentage()}
          /> :
          <Notification message="There is no feedback" />
        }
      </Section>
    </>
  )
}