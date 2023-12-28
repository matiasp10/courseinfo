export default function Total({ total }) {
  let sum = total.reduce((acc, red) => acc + red);
  return (
    <>
      Total of {sum}
      {' exercises'}
    </>
  );
}
