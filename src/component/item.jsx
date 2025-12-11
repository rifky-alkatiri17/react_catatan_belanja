export default function Item({el, onDeleteItems, onChecked}){ //key string, el obj
	return(
		<li key={el.id}>
          <input type="checkbox" checked={el.checked}  onChange={()=>onChecked(el.id)} readOnly/>
          <span style={{'textDecoration': el.checked?'line-through':'none'}}>
          	{el.quantity} {el.name}</span>
          <button onClick={()=> onDeleteItems(el.id)}>&times;</button>
        </li>
	)
}