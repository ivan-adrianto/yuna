import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";
import Toast from "./Toast";

function Navbar() {
  const navigate = useNavigate();
  useScrollToTop()
  const [search, setSearch] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <div className="flex gap-3 px-2 md:px-5 py-6 items-center fixed w-screen z-50 bg-white top-0">
      <img
        src={logo}
        alt="logo"
        className="w-10 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <p
        className="font-extrabold text-xl hidden md:block cursor-pointer"
        onClick={() => navigate("/")}
      >
        VanMovies
      </p>
      <form className="flex w-full gap-3" onSubmit={submit}>
        <input
          type="text"
          className="w-full border outline-none px-3 rounded-lg h-11 md:ml-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-secondary px-2 md:px-10 py-2 text-white font-bold rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar;
