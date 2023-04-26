import { IButton } from "../utils/TypeData";

const ButtonFetchPages = ({ onClick }: IButton) => {
  return (
    <button className="mt-14 relative" onClick={onClick} type="button">
      <span className="py-3 px-4 shadow-md bg-lime-500 hover:shadow-lg hover:bg-lime-600 rounded-lg ">Load More</span>
    </button>
  );
};

export default ButtonFetchPages;
