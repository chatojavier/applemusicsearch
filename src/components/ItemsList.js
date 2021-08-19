import Pagination from "./Pagination";
import paginate from "../helpers/paginate";
import { ItemListArtist, ItemListSong, ItemListAlbum } from "./ItemsListCards";
import ItemsPerPageInput from "./ItemsPerPageInput";

const ItemsList = ({
	dataApi,
	itemsPerPage,
	currentPage,
	handleChangePage,
	entity,
	onChangeItemsPerPageInput,
}) => {
	let page = dataApi.results;

	if (page.length >= 1) {
		page = paginate(page, currentPage, itemsPerPage);
	}

	return (
		<>
			<ul className='lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4'>
				{(entity === "song" || entity === "musicVideo") &&
					page.map((item) => {
						return (
							<ItemListSong
								item={item}
								key={item.trackId}></ItemListSong>
						);
					})}
				{entity === "musicArtist" &&
					page.map((item, index) => {
						return (
							<ItemListArtist
								item={item}
								key={
									item.artistId + String(index)
								}></ItemListArtist>
						);
					})}
				{entity === "album" &&
					page.map((item, index) => {
						return (
							<ItemListAlbum
								item={item}
								key={
									item.collectionName + String(index)
								}></ItemListAlbum>
						);
					})}
			</ul>
			<div className='list-footer flex justify-between mt-3 pb-3'>
				<Pagination
					items={dataApi.results}
					itemsPerPage={itemsPerPage}
					onPageChange={handleChangePage}
					currentPage={currentPage}></Pagination>
				{dataApi.results.length > 10 && (
					<ItemsPerPageInput
						itemsPerPage={itemsPerPage}
						onChange={
							onChangeItemsPerPageInput
						}></ItemsPerPageInput>
				)}
			</div>
		</>
	);
};

export default ItemsList;
