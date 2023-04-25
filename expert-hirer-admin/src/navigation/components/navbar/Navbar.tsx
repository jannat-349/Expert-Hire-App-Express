import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Member</Link>
        </li>
        <li>
          <Link to={"/subscription"}>Subscription</Link>
        </li>
        <li>
          <Link to={"/content"}>Content</Link>
        </li>
        <li>
          <Link to={"/payment"}>Payment</Link>
        </li>
        <li>
          <Link to={"/reports"}>Reports</Link>
        </li>
      </ul>
    </div>
  );
}
