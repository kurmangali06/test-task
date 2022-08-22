import React, { useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import './Navbar.scss'


type Props = {
  setNote: (isNote: boolean) => void;
}

export const Navbar = ({ setNote}:Props) => {
  const [isItem, setItem] = useState(true)

  return (
    <div className="major">
    <div className="menu">
      <div className="title"  >
        
        <div onClick={()=> setItem(false)}  >
        <ArticleIcon />
        </div>
      <h2 onClick={()=> setItem(true)}>Keep</h2>
      </div>
      <div>
       <div onClick={()=> setNote(true)}><img src="https://vectorified.com/images/lamp-icon-16.jpg" width={20}/><p >{ isItem ? 'Заметки' : ""}</p>
        </div>
        <div  onClick={()=> setNote(false)}><img src="https://w7.pngwing.com/pngs/149/403/png-transparent-rubbish-bins-waste-paper-baskets-computer-icons-recycling-bin-trash-recycling-bins-free-text-rectangle-recycling.png" width={20}/><p>{ isItem ? 'Корзина' : ""}</p>
        </div>
      </div>
    </div>
    </div>

  );
};
