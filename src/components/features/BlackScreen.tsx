import { useGlobalContext } from "../../context/ContextAPI";

const BlackScreen = () => {
  const { setToogleMenu }: any = useGlobalContext();
  return <div onClick={() => setToogleMenu((prev: boolean) => !prev)} className="w-full md:hidden block h-screen bg-black/60 fixed z-10 -mt-2" />;
};

export default BlackScreen;
