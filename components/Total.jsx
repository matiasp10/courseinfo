export default function Total({ total }) {
  return (
    <div>
      Number of exercises{' '}
      {total[0].exercises + total[1].exercises + total[2].exercises}
    </div>
  );
}
