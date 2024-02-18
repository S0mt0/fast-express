"use client";
import { cn } from "@/lib/utils";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

type TForm = {
  name: string;
  phone: string | number;
  email: string;
  message: string;
};

const formInit: TForm = {
  email: "",
  message: "",
  name: "",
  phone: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState<TForm>(formInit);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    const { value, name } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM", form);
  };

  const canSubmit = useCallback(() => {
    return Object.values(form).every((value) => Boolean(value));
  }, [form]);

  return (
    <form
      className="mt-6 flex flex-col gap-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <p>
        <input
          type="text"
          placeholder="Name"
          className="text-stone-400/80 placeholder:text-stone-400/80 outline-none border-b border-stone-400/80 p-2 bg-transparent w-full"
          onChange={(e) => handleChange(e)}
          value={form.name}
          name="name"
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Phone Number"
          className="text-stone-400/80 placeholder:text-stone-400/80 outline-none border-b border-stone-400/80 p-2 bg-transparent w-full"
          onChange={(e) => handleChange(e)}
          value={form.phone}
          name="phone"
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="Your email"
          className="text-stone-400/80 placeholder:text-stone-400/80 outline-none border-b border-stone-400/80 p-2 bg-transparent w-full"
          onChange={(e) => handleChange(e)}
          value={form.email}
          name="email"
        />
      </p>
      <textarea
        name="message"
        id="message"
        placeholder="Write us a message"
        className="text-stone-400/80 placeholder:text-stone-400/80 outline-none border-b border-stone-400/80 p-2 bg-transparent w-full"
        onChange={(e) => handleChange(e)}
        value={form.message}
      />
      <button
        className={cn(
          "self-start uppercase font-bold text-white hover:text-green-700 hover:bg-white bg-green-700 transition-all px-4 py-2 sm:px-6 sm:py-4 text-sm font-title cursor-pointer",
          !canSubmit() && "cursor-not-allowed"
        )}
        type="submit"
        disabled={!canSubmit()}
      >
        send message
      </button>
    </form>
  );
};
