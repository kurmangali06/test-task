import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { obj } from '../Header/Header'

import "./Item.scss"
import { Note } from './Note'

type Props = {
  setBasket: (basket: obj []) => void;
  basket :  obj[],
  value: string
}
type item = {
  title: string,
  text: string
}


export const Item = ({value, basket, setBasket}:Props) => {
  const [items, setItem] = useState<item[]>([])
  const [valueTitle, setValueTitle] = useState("")
  const [valueNote, setValueNote] = useState("")

  const onSubmit = () => {
    const obj = {
      title: valueTitle,
      text: valueTitle,
    };
    setValueTitle("");
    setValueNote("");
    setItem([...items, obj]);
    
  }
	function remItem(index:number) {
    const obj:item = {
      title: items[index].title,
      text: items[index].text,
    };
		setItem([...items.slice(0, index), ...items.slice(index + 1)]);
    setBasket([...basket, obj])
	}


  return (
    <div className='flex-box'>
      <div className='note'>
        <TextField value={valueTitle} onChange={e => setValueTitle(e.target.value)} variant="standard" placeholder="Введите загловок" className='input' />
        <br />
        <TextField value={valueNote} onChange={e => setValueNote(e.target.value)} variant="standard" placeholder="Заметка" className='input' />
        <button type="submit" onClick={onSubmit}>сохранить</button>
      </div>

      <div className='block'>{items.length > 0 ? items.filter(obj => {
          return obj.title.toLowerCase().includes(value.toLocaleLowerCase())
        }).map((item, index) => {
        return(
        <Note index={index} title ={item.title} text={item.text} remItem={remItem} />
      )}) : <h2>У вас нету записей</h2>}</div>
    </div>
  )
}
