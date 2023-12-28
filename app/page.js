import Content from '@/components/Content';
import Course from '@/components/Course';
import Header from '@/components/Header';
import Total from '@/components/Total';

export default function Home() {
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10,
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7,
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14,
  //     },
  //   ],
  // };

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
    </>
  );
}
