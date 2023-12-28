export default function Total({ total }) {
  return (
    <>
      Total of {total[0].exercises + total[1].exercises + total[2].exercises}
      {' exercises'}
    </>
  );
}
