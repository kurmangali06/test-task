import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  remItem: (index:number) => void;
  text :  string,
  title: string,
  index: number
}

export const Note = ({ title, text, index, remItem}:Props) => {
  

  return (
    <div className="note ">
      <h2 className="input">{title}</h2>
      <br />
      <p className="input">{text}</p>
      <div className="seting">
        <div onClick={() => remItem(index)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
