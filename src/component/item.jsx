export default function Item({el, handleDeleteItems}){ //key string, el obj
	return(
		<li key={el.id}>
          <input type="checkbox" checked={el.checked} readOnly/>
          <span style={{'textDecoration': el.checked?'line-through':'none'}}>
          	{el.quantity} {el.name}</span>
          <button onClick={()=> handleDeleteItems(el.id)}>&times;</button>
        </li>
	)
}