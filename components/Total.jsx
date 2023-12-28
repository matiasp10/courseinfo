export default function Total({ total }) {
  console.log(total);
  let sum = total.reduce((acc, red) => acc + red);
  return (
    <>
      Total of {sum}
      {' exercises'}
    </>
  );
}
