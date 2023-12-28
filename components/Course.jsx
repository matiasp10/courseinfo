import Content from './Content';
import Header from './Header';
import Total from './Total';

function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </>
  );
}

export default Course;
