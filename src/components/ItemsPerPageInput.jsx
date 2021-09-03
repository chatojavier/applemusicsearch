const ItemsPerPageInput = ({ itemsPerPage, onChange }) => {
	return (
		<div className='flex space-x-2 text-xs'>
			<select
				value={itemsPerPage}
				onChange={onChange}
				className='bg-gray-700 focus:ring-4 ring-red ring-opacity-60 outline-none font-light rounded'>
				<option value='10'>10</option>
				<option value='20'>20</option>
				<option value='30'>30</option>
				<option value='40'>40</option>
				<option value='50'>50</option>
			</select>
			<div>Resultados por página</div>
		</div>
	);
};

export default ItemsPerPageInput;
