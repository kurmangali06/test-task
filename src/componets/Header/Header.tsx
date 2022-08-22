import React, { FC, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Search } from '../Search/Search'
import './Header.scss'
import { Workspace } from '../Workspace/Workspace'
import { Item } from '../Item.tcx/Item'
import { Basket } from '../Item.tcx/Basket'

export type obj = {
  title: string,
  text: string
}
export const Header: FC = () => {
  const [searchValue, setValue] = useState("")
  const [basket, setBasket] = useState<obj[]>([])
  const [ isNote, setNote] = useState(true)

  return (
    <>
    <div className='container'>
      <Navbar setNote={setNote}  />
       <Search  setValue={setValue} />
       <Workspace />
    </div>
    <div className='content'> 
    {isNote ?<Item   basket={basket} setBasket={setBasket} value={searchValue}/> : <Basket value={basket} item={searchValue} setBasket={setBasket}/> }
    </div>
 </>
  )
}
