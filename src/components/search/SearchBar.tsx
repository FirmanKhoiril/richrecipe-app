import React from "react";
import { useGlobalContext } from "../../context/ContextAPI";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch }: any = useGlobalContext();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        required
        onChange={handleChange}
        placeholder="Search for foods"
        className=" h-10 py-2 w-60  md:w-80 bg-black/5 focus:bg-white dark:focus:bg-black/20 flex dark:bg-black/30 ml-1 px-4 outline-none focus:border border-lime-600 peer"
      />
      <button type="submit" className="p-[10px] bg-lime-500 placeholder:text-slate-800 hover:bg-lime-600 cursor-pointer rounded-r-full peer-focus:text-white">
        <AiOutlineSearch className="text-xl " />
      </button>
      {search.length > 0 && (
        <button type="submit" className="absolute top-3 right-16 md:right-[45px]">
          <AiOutlineClose onClick={() => setSearch("")} className="text-xl" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
