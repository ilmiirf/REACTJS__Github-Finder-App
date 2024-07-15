import spinner from "./assets/spinner (1).gif";

export default function Spinner(): JSX.Element {
  return (
    <div className="mt-20 w-100">
      <img
        width={180}
        className="mx-auto text-center"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}
