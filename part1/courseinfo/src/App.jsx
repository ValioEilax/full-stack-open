const Header = ({ course }) => {
  console.log(course);

  return <h1>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.title}: {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Total number of exercises:{" "}
      {parts.reduce((acc, currentPart) => acc + currentPart.exercises, 0)}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        title: "Fundamentals of React",
        exercises: 10,
      },
      {
        title: "Using props to pass data",
        exercises: 7,
      },
      {
        title: "State of a component",

        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
