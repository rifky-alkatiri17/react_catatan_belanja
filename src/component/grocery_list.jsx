import {useState} from 'react'
import Item from './item.jsx' 

export default function GroceryList({data, onDeleteItems, onChecked, onClearItems}){
	// console.log(data);
	const [sortBy, setSortBy] = useState('input');
	let sortedItems;

	if(sortBy === 'input'){ sortedItems = data }
	else if(sortBy === 'name'){
		// console.log(data.slice(tes=>tes));
		sortedItems = data.slice().sort((a,b)=> a.name.localeCompare(b.name) )
	} 
	else if(sortBy === 'checked'){
		sortedItems = data.slice().sort((a,b)=> a.checked - b.checked )
	}

	return(
		<>
			<div className="list">
	          <ul>
	          	{sortedItems.map(el=>
	          		(<Item key={el.id} el={el} onDeleteItems={onDeleteItems}  onChecked={onChecked}/>)
	          	)}	            
	            
	          </ul>
	        </div>
	        <div className="actions">
	          <select value={sortBy} onChange={(e)=> setSortBy(e.target.value) }>
	            <option value="input">Urutkan berdasarkan urutan input</option>
	            <option value="name">Urutkan berdasarkan nama barang</option>
	            <option value="checked">Urutkan berdasarkan ceklis</option>
	          </select>
	          <button onClick={onClearItems} >Bersihkan Daftar</button>
	        </div>
		</>
	)
}