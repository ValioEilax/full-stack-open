import { useState } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === "positive" && "%"}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>no feedback given</div>
      </div>
    );
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);

  const handleNeutral = () => setNeutral(neutral + 1);

  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h2>give feedback!</h2>
        <Button onClick={handleGood}>good</Button>
        <Button onClick={handleNeutral}>neutral</Button>
        <Button onClick={handleBad}>bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
