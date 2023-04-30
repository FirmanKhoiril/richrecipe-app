import { Box } from "@mui/material";
import { links } from "../utils/DummyData";
import { Link } from "react-router-dom";
import { TLinks } from "../utils/TypeData";
import { useGlobalContext } from "../context/ContextAPI";
import { CTypography } from "../components";
import emailjs from "@emailjs/browser";
import React, { RefObject, useRef } from "react";

const Footer = () => {
  const { categoriesLinks, loading, setLoading, setForm, form, setCategoriesLinks }: any = useGlobalContext();

  const formRef: any = useRef();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Firman",
          from_email: form.email,
          to_email: "firmankhoiril13@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          alert(`Thanky you ${form.name}. we will back for you as soon as possible `);
          setLoading(false);
          setForm({ ...form, message: "", name: "", email: "" });
        },
        (err) => {
          alert(`${err.text}`);
          setLoading(false);
        }
      );
  };
  return (
    <Box sx={{ py: 6, display: "flex", flexDirection: { xs: "column", sm: "row" }, px: { xs: 4, sm: 0 }, justifyContent: "space-around", alignItems: { xs: "start", sm: "center" }, gap: 2 }} className=" bg-slate-100/80 dark:bg-zinc-800">
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <CTypography className=" text-sm text-slate-600 dark:text-slate-400" desc="@Copyright 2023. FirmanKhoiril." />
        {links.map((link: TLinks, idx: number) => (
          <Link key={idx} to={link.to} onClick={() => setCategoriesLinks(link.name)} className={`capitalize tracking-wider hover:text-lime-600 ${link.name === categoriesLinks ? "text-lime-600" : " dark:text-white"}`}>
            {link.name}
          </Link>
        ))}
      </Box>
      <form ref={formRef} onSubmit={handleSubmit} className=" flex flex-col space-y-4">
        <Box>
          <CTypography desc="Get new recipes everyday !" className=" text-xl text-lime-500 tracking-wide" />
          <CTypography desc="Just with send a email." className=" text-xl text-lime-500 tracking-wide" />
        </Box>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          name="name"
          className=" h-10 py-2 w-60  md:w-80 bg-black/40 focus:bg-white placeholder-white/80 focus:placeholder:text-black/60 dark:focus:bg-black/20 flex dark:bg-black/30 px-4 outline-none focus:border border-lime-600 "
        />
        <input
          type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Your email address"
          className=" h-10 py-2 w-60  md:w-80 bg-black/40 focus:bg-white placeholder-white/80 focus:placeholder:text-black/60 dark:focus:bg-black/20 flex dark:bg-black/30 px-4 outline-none focus:border border-lime-600 "
        />
        <textarea
          placeholder="messages"
          value={form.message}
          onChange={handleChange}
          name="message"
          rows={4}
          className="bg-black/40 focus:bg-white placeholder-white/50 px-4 focus:placeholder:text-white/60 dark:focus:bg-black/20 flex dark:bg-black/30 outline-none focus:border border-lime-600"
        />
        <button type="submit">{loading ? "Sending..." : "Send"}</button>
      </form>
    </Box>
  );
};

export default Footer;
