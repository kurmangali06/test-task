import React from "react";
import "./Item.scss";
import DeleteIcon from "@mui/icons-material/Delete";


type Props = {
  setBasket: (basket: obj []) => void;
  value :   obj[],
  item: string
}
type obj = {
  title: string,
  text: string
}

export const Basket = ({ item, value, setBasket }:Props) => {
  function remItem(index:number) {
    setBasket([...value.slice(0, index), ...value.slice(index + 1)]);
  }
  return (
    <div className="flex-box">
      <h1>Корзина</h1>
      <div >
        {value.length > 0 ? (
          value.filter(obj => {
            return obj.title.toLowerCase().includes(item.toLocaleLowerCase())
          }).map((item, index) => {
            return (
              <div className="basket" >
                <h2 className="input">{item.title}</h2>
                <p className="input">{item.text}</p>
                <div onClick={() => remItem(index)}>
                  <DeleteIcon />
                </div>
              </div>
            );
          })
        ) : (
          <h2>Корзина пустая</h2>
        )}
      </div>
    </div>
  );
};
