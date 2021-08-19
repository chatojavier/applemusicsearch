const Pagination = ({ items, itemsPerPage, onPageChange, currentPage }) => {
	if (items.length <= itemsPerPage) return null;

	let pagesNum = Math.ceil(items.length / itemsPerPage);
	let pagesArr = range(1, pagesNum);
	const pagesButtons = pagesArr.map((page) => {
		return (
			<button key={page} onClick={onPageChange} className={`page-item rounded px-2 ${(currentPage === page) && 'bg-red'}`}>
				{page}
			</button>
		);
	});
	return (
		<nav>
			<ul className='pagination'>{pagesButtons}</ul>
		</nav>
	);
};
const range = (start, end) => {
	return Array(end - start + 1)
		.fill(0)
		.map((item, i) => start + i);
};

export default Pagination;
