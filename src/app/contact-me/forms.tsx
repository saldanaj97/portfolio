import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message, subject);
  };

  return (
    <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Name"
        className="border-b-2 border-b-black/60 bg-transparent py-1 text-sm placeholder-black/60 focus:border-white focus:outline-none focus:transition-colors focus:duration-300"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border-b-2 border-b-black/60 bg-transparent py-1 text-sm placeholder-black/60 focus:border-white focus:outline-none focus:transition-colors focus:duration-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Message"
        type="textarea"
        className="h-[40px] w-full border-b-2 border-b-black/60 bg-transparent py-1 text-sm placeholder-black/60 focus:border-white focus:outline-none focus:transition-colors focus:duration-300"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <CheckboxGroup
        label="What can I help you with?"
        color="secondary"
        classNames={{
          label: "text-foreground text-sm",
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Checkbox
            value="implement-designs"
            onChange={() => setSubject("Implement Designs")}
          >
            Implement your design
          </Checkbox>
          <Checkbox
            value="full-time-job"
            onChange={() => setSubject("Full Time Opportunity")}
          >
            Full-time opportunity
          </Checkbox>
          <Checkbox value="other" onChange={() => setSubject("Other")}>
            Other
          </Checkbox>
        </div>
      </CheckboxGroup>
      <div className="flex justify-center">
        <button className="rounded-xl bg-white px-4 py-2 text-black">
          Submit
        </button>
      </div>
    </form>
  );
};