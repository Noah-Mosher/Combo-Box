import '../styles/App.css';
import {FruitList} from '../constants/FruitList'
import { DropdownWithSearch } from './DropdownWithSearch';
import React, {useState} from 'react'

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [itemList, setItemList] = useState(FruitList)
  const [selectedItem, setSelectedItem] = useState("Choose a Fruit:")

  const handleInputChange = (e) => {
    if(e.target.value !== ""){
      let filteredList = []
      for(let i = 0 ; i < FruitList.length; i++){
        if(FruitList[i].name.toLowerCase().includes(e.target.value.replace(/\s/g, "").toLowerCase())){
          filteredList.push(FruitList[i])
        }
      }

      setItemList([...filteredList])
    }else{
      setItemList([...FruitList])
    }
  }

  return (
      <div className="content-container" onClick={() => setDropdownOpen(false)}>
        <div className='check-list'>
          <span style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Combo Box Implementation</span>
          <span>Handle dropdown toggle</span>
          <span>Handle filter by input, including when input is cleared</span>
          <span>Handle spaces in search box, could add funtionality for parsing special characters/further validation</span>
          <span>Update placeholder when fruit selected</span>
          <span>Handle click outside of combo box</span>
        </div>
        <div className='combo-box-container' onClick={(e) => e.stopPropagation()}>
          <DropdownWithSearch setDropdownOpen={setDropdownOpen} dropdownOpen={dropdownOpen} handleInputChange={handleInputChange} selectedItem={selectedItem} />
          { dropdownOpen ? 
          <div className='combo-box-list'>
          {itemList.map(item => {
           return (
           <button key={item.name} className='select-item-container' onClick={() => {
             setSelectedItem(item.name)
             setDropdownOpen(!dropdownOpen)
           }}>
             <div className='select-item-row'>
              <span className='item-icon'>{item.icon}</span>
              <span className='item-name'>{item.name}</span>
              </div>
             </button>
           )
          })}
          </div> : null
}
        </div>
      </div>
  );
}

export default App;

