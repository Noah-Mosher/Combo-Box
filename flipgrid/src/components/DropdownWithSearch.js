import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import '../styles/DropdownWithSearch.css'

export const DropdownWithSearch = ({setDropdownOpen, dropdownOpen, handleInputChange,selectedItem}) => {

  return (
    <div className='dropdown-container'>
        <input className='dropdown-input'  placeholder={selectedItem} onChange={handleInputChange}/>
        <AiOutlineDown  className='dropdown-icon' onClick={() => {setDropdownOpen(!dropdownOpen)}} style={{fill: "gray"}}/>
    </div>
  )
}
