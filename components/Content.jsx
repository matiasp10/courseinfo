import Part from './Part';

export default function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part part={part.name} exercises={part.exercises} key={part.name} />
        );
      })}
    </div>
  );
}
