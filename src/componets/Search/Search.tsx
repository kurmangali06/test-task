
import React, { useState } from 'react'

import './Search.scss'

type Props = {
  setValue: (value: React.SetStateAction<string> ) => void;
}
export const Search = ({setValue}:Props) => {
  const [searchValue, setSearchValue] = useState('')
  const onClickClear = () => {
    setSearchValue('')
  }
  const onChangeValue = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value)
    setValue(event.target.value)
  }
  return (
    <div>
      <img width={40} className="icon" src='https://pbs.twimg.com/media/CgTni-0WQAAjHGJ.jpg:large' alt='seach' />
      <input value={searchValue} onChange={onChangeValue} placeholder='Поиск' />
      {searchValue && (<img onClick={onClickClear} className='clearIcon' src='https://i.ya-webdesign.com/images/oyster-clipart-watercolor-18.png' />)}
    </div>
  )
}
