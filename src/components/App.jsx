import React, { useState } from 'react';
import Notification from './Notification';
import Section from './Section';
import Controls from './Controls';
import Statistics from './Statistics';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(state);

  const handleState = name => {
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const { good, neutral, bad } = state;

  return (
    <>
      <Section title="Please leave feedback">
        <Controls options={options} onLeaveFeedback={handleState} />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
