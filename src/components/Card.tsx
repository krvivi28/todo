import React, { useEffect, useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Inote } from "../model/note";
import "./card.css";
interface Inew extends Inote {
  handleDelete(id: number): void;
  handleDone(id: number): void;
  allnotes: Inote[];
  setAllnotes: React.Dispatch<React.SetStateAction<Inote[]>>;
}
export const Card: React.FC<Inew> = ({
  note,
  id,
  isDone,
  handleDelete,
  handleDone,
  allnotes,
  setAllnotes,
}: Inew) => {
  const [edit, setEdit] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const [editnote, seteditNote] = useState<string>(note);
  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setAllnotes(
      allnotes.map((note) => {
        return note.id === id ? { ...note, note: editnote } : note;
      })
    );
    setEdit(false);
  };
  return (
    <>
      <div className="flex mynote flex-col md:flex-row items-center justify-center gap-2 md:gap-5 bg-purple-900 p-2 md:p-5 rounded-md">
        {edit ? (
          <div>
            <form action="" onSubmit={(e) => handleSubmit(e, id)}>
              <input
                className="bg-purple-500 text-white p-1 rounded-md outline-none"
                ref={inputRef}
                type="text"
                value={editnote}
                onChange={(e) => {
                  seteditNote(e.target.value);
                }}
              />
            </form>
          </div>
        ) : isDone ? (
          <s className="text-red">
            <div className="note text-green-600">{note}</div>
          </s>
        ) : (
          <div className="note text-white">{note}</div>
        )}

        <div className="actions flex gap-2 text-white font-medium">
          <FiEdit
            className="hover:text-orange-600"
            onClick={() => {
              if (edit === false && isDone === false) {
                setEdit(!edit);
              }
            }}
          />
          <MdDeleteOutline
            className="cursor-pointer hover:text-red-600"
            onClick={() => handleDelete(id)}
          />
          <IoMdDoneAll
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleDone(id)}
          />
        </div>
      </div>
    </>
  );
};
