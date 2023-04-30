import { useState, createContext, useContext } from "react";

const StateContext = createContext({});
const initialData = {
  name: "",
  email: "",
  message: "",
};

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [toogleSetting, setToogleSetting] = useState<boolean>(false);
  const [categoriesLinks, setCategoriesLinks] = useState<string>("home");
  const [categories, setCategories] = useState<string>("chicken");
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState("light");
  const [allCategories, setAllCategories] = useState<string>("chicken");
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);
  const [form, setForm] = useState(initialData);
  return (
    <StateContext.Provider
      value={{
        search,
        categoriesLinks,
        loading,
        dark,
        allCategories,
        toogleSetting,
        toogleMenu,
        categories,
        form,
        setForm,
        setLoading,
        setCategoriesLinks,
        setCategories,
        setAllCategories,
        setDark,
        setToogleMenu,
        setSearch,
        setToogleSetting,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
