export default function Item({el}){ //key string, el obj
	return(
		<li key={el.id}>
          <input type="checkbox" checked={el.checked} readOnly/>
          <span style={{'textDecoration': el.checked?'line-through':'none'}}>
          	{el.quantity} {el.name}</span>
          <button>&times;</button>
        </li>
	)
}