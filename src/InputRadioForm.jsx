import { useState } from "react";

export default function InputRadioForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nChoice: ${choice}`);
  };

  const customcheck =
    "relative w-5 h-5 bg-white rounded-full after:absolute after:content-[''] after:w-3 after:h-3 after:bg-[#974100] after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100";

  return (
    <form
      className="flex flex-col gap-10 px-20 max-md:px-10 pt-10"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="h-12 pl-6 placeholder-[#974100] bg-white border-0 rounded-full focus:outline-none focus:border-2 focus:border-[#974100]"
        />
        <input
          type="number"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          className="h-12 pl-6 placeholder-[#974100] bg-white border-0 rounded-full focus:outline-none focus:border-2 focus:border-[#974100]"
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 pl-6 placeholder-[#974100] bg-white border-0 rounded-full focus:outline-none focus:border-2 focus:border-[#974100]"
        />
      </label>

      <div className="flex flex-row max-md:flex-col gap-8">
        <label className="flex items-center gap-2 text-[#974100] cursor-pointer">
          <input
            className="peer hidden"
            type="radio"
            name="choice"
            value="Necklace"
            checked={choice === "Necklace"}
            onChange={(e) => setChoice(e.target.value)}
          />
          <span className={customcheck}></span>
          Necklace
        </label>
        <label className="flex items-center gap-2 text-[#974100] cursor-pointer">
          <input
            className="peer hidden"
            type="radio"
            name="choice"
            value="Ring"
            checked={choice === "Ring"}
            onChange={(e) => setChoice(e.target.value)}
          />
          <span className={customcheck}></span>
          Ring
        </label>
        <label className="flex items-center gap-2 text-[#974100] cursor-pointer">
          <input
            className="peer hidden"
            type="radio"
            name="choice"
            value="Ear Rings"
            checked={choice === "Ear Rings"}
            onChange={(e) => setChoice(e.target.value)}
          />
          <span className={customcheck}></span>
          Ear Rings
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
