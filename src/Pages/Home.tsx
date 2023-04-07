import React, { useState } from "react";
import { Input } from "../components/Input";
import { TodoCard } from "../components/Todocard";
import { Inote } from "../model/note";

const Home: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [allnotes, setAllnotes] = useState<Inote[]>([]);
  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (note) {
      setAllnotes([...allnotes, { id: Date.now(), note: note, isDone: false }]);
      setNote("");
    } else {
      window.alert("note can't be empty");
    }
  };
  return (
    <>
      <div className=" h-screen w-full bg-[#27272a]">
        <div className="head text-3xl font-mono text-white p-4  w-[50%] mx-auto">
          I-Notes
        </div>
        <Input note={note} setNote={setNote} handleAdd={handleAdd} />
        <TodoCard allnotes={allnotes} setAllnotes={setAllnotes} />
      </div>
    </>
  );
};
export default Home;
