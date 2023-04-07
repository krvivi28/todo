import React from "react";
import { useState } from "react";
import { Inote } from "../model/note";
import { Card } from "./Card";
export interface IallNotesProps {
  allnotes: Inote[];
  setAllnotes: React.Dispatch<React.SetStateAction<Inote[]>>;
}
export const TodoCard = (props: IallNotesProps) => {
  const handleDone = (id: number) => {
    props.setAllnotes(
      props.allnotes.map((note) => {
        return note.id === id ? { ...note, isDone: !note.isDone } : note;
      })
    );
  };
  const handleDelete = (id: number) => {
    // window.alert(`${id} is clicked`);
    props.setAllnotes(
      props.allnotes.filter((note) => {
        return note.id !== id;
      })
    );
  };
  return (
    <>
      <div className="notes w-full md:w-[80%]  flex flex-wrap mx-auto mt-12  p-2 rounded-md">
        <div className="card w-full flex flex-wrap items-center justify-center gap-2 md:gap-4 p-3 md:p-5 rounded-md">
          {props.allnotes.map((note) => {
            return (
              <Card
                key={note.id}
                note={note.note}
                id={note.id}
                isDone={note.isDone}
                handleDelete={handleDelete}
                handleDone={handleDone}
                setAllnotes={props.setAllnotes}
                allnotes={props.allnotes}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
