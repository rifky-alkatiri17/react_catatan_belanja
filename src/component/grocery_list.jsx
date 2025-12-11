import Item from './item.jsx' 

export default function GroceryList({data, onDeleteItems, onChecked}){
	console.log(data);
	return(
		<>
			<div className="list">
	          <ul>
	          	{data.map(el=>
	          		(<Item key={el.id} el={el} onDeleteItems={onDeleteItems}  onChecked={onChecked}/>)
	          	)}	            
	            
	          </ul>
	        </div>
	        <div className="actions">
	          <select>
	            <option value="input">Urutkan berdasarkan urutan input</option>
	            <option value="name">Urutkan berdasarkan nama barang</option>
	            <option value="checked">Urutkan berdasarkan ceklis</option>
	          </select>
	          <button>Bersihkan Daftar</button>
	        </div>
		</>
	)
}