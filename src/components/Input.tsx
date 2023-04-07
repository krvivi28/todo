import React, { useRef } from "react";
import { Inote } from "../model/note";
interface Iprops {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  handleAdd(e: React.FormEvent<EventTarget>): void;
}
export const Input = ({ note, setNote, handleAdd }: Iprops) => {
  return (
    <div>
      <div className="relative text-center flex flex-col items-center justify-center mt-5">
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="enter your task"
          type="text"
          id="large-input"
          className="block w-[95%] md:w-[50%] p-4 text-white text-xl focus:border-green-500 focus:placeholder-green-700 outline-none border-b-2 bg-[#27272a] border-purple-500"
        />
        <button
          onClick={(e) => handleAdd(e)}
          type="submit"
          className="lg:absolute right-[390px] text-white bg-gradient-to-r from-purple-600  hover:bg-gradient-to-br to-purple7600  py-2 px-5 font-medium rounded-md mt-2"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};
