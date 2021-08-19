function paginate(items, pageNumber, pageSize) {
	const start = Number((pageNumber - 1) * pageSize);
	let page = items.slice(start, start + Number(pageSize));
	return page;
}

export default paginate;
