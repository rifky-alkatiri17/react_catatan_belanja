import {useState} from 'react';

export default function Form(){
	const quantityNum = [...Array(20)];
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState(0);

	function handleSubmit(e){
		e.preventDefault();
		const quantityEl = document.querySelector("select");
		const input = document.querySelector("input");
		// alert(`${quantityEl.value} dan ${input.value}`)
		// alert(`${quantity} and ${name}`)
		const newItem = {
			'name' : name, 
			'quantity' : Number(quantity),
			'checked' : true,
			'id': Date.now()
		};
		console.log(newItem);
		input.value = ''
	}

	return(
		<>
			<form className="add-form" onSubmit={handleSubmit}>
		        <h3>Hari ini belanja apa kita?</h3>
	            <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
	            	{quantityNum.map((_,i)=>(
	            		<option key={i+1} value={i+1}> {i+1} </option>
	            		))}	              
	            </select>
	            <input type="text" placeholder="nama barang..." value={name} onChange={e=> setName(e.target.value)} />
	          	<button>Tambah</button>
	        </form>
        </>
		)
}