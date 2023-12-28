import Content from './Content';
import Header from './Header';
import Total from './Total';

function Course({ course }) {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
}

export default Course;
