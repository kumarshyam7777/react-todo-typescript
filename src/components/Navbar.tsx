import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParam] = useSearchParams();
  const todoDatas = searchParam.get("todos");
  return (
    <nav>
      <Link to={"/"} className={todoDatas === null ? "active" : ""}>
        All
      </Link>
      <Link
        to={"/?todos=active"}
        className={todoDatas === "active" ? "active" : ""}
      >
        Active
      </Link>
      <Link
        to={"/?todos=completed"}
        className={todoDatas === "completed" ? "active" : ""}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
