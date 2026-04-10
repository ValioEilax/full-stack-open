const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (total, section) => total + section.exercises,
    0,
  );

  return (
    <div>
      <b>total of {totalExercises} exercises</b>
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Header = ({ course }) => <h2>{course.name}</h2>;

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
