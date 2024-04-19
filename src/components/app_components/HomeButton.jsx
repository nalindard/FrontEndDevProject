import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <span className="mt-7 rounded bg-primary px-7 py-4 text-2xl font-semibold uppercase text-white">
      <Link to="/">Back To Home</Link>
    </span>
  );
}

export default HomeButton;
