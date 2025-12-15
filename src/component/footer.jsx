export default function Footer({rekap}){
	// console.log(rekap.length);
	let jml_barang = rekap.length ;
	let barang_checked = rekap.filter(item=> item.checked === true);
	let persentase = barang_checked.length/jml_barang * 100;

	if(jml_barang === 0){
		return (<footer className="stats">
			Daftar Belanjaan Masih Kosong
		</footer>)
	} 

	return(
		<footer className="stats">
          Ada {jml_barang} barang di daftar belanjaan, {barang_checked.length} barang sudah dibeli ({persentase}%)
        </footer>
	)
}