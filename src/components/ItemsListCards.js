import millisToMinutesAndSeconds from "../helpers/millisToMinutesAndSeconds";
import artist_artwork from "../artist_artwork.webp";

export const ItemListSong = ({ item }) => {
	return (
		<li className='group flex items-center space-x-2 pb-3 mt-3 text-sm border-b border-solid border-gray-700 cursor-pointer'>
			<div className='col-left relative rounded overflow-hidden flex-shrink-0'>
				<img
					src={`${item.artworkUrl60}`}
					srcSet={`${item.artworkUrl100} 2x`}
					alt={item.collectionName}
					width='50'
					height='50'
				/>
				<a href={item.trackViewUrl} target='_blank' rel='noreferrer'>
					<div className='artwork-overlay absolute top-0 w-full h-full bg-gray bg-opacity-70 z-10 fill-current flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'
							className='dt-play-button__list-item-play-glyph'>
							<path
								d='M4.4 15.14l10.386-6.096c.842-.459.794-1.64 0-2.097L4.401.85c-.87-.53-2-.12-2 .82v12.625c0 .966 1.06 1.4 2 .844z'
								fillRule='nonzero'></path>
						</svg>
					</div>
				</a>
			</div>
			<div className='col-right'>
				<a
					href={item.trackViewUrl}
					target='_blank'
					rel='noreferrer'
					className='hover:text-white'>
					{item.trackName}
					<span className='text-xs'>
						{` (${millisToMinutesAndSeconds(
							item.trackTimeMillis
						)})`}
					</span>
				</a>
				<br />
				<div className='text-gray-500 hover:underline'>
					<a
						href={item.artistViewUrl}
						target='_blank'
						rel='noreferrer'>
						{item.artistName}
					</a>
				</div>
			</div>
		</li>
	);
};

export const ItemListArtist = ({ item }) => {
	return (
		<li className='group flex items-center space-x-2 pb-3 mt-3 text-sm border-b border-solid border-gray-700 cursor-pointer'>
			<div className='col-left relative rounded overflow-hidden flex-shrink-0'>
				<img
					src={artist_artwork}
					alt={item.artistName}
					width='50'
					height='50'
				/>
				<a href={item.artistLinkUrl} target='_blank' rel='noreferrer'>
					<div className='artwork-overlay absolute top-0 w-full h-full bg-gray bg-opacity-70 z-10 fill-current flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'
							className='dt-play-button__list-item-play-glyph'>
							<path
								d='M4.4 15.14l10.386-6.096c.842-.459.794-1.64 0-2.097L4.401.85c-.87-.53-2-.12-2 .82v12.625c0 .966 1.06 1.4 2 .844z'
								fillRule='nonzero'></path>
						</svg>
					</div>
				</a>
			</div>
			<div className='col-right'>
				<a
					href={item.artistLinkUrl}
					target='_blank'
					rel='noreferrer'
					className='group-hover:text-white'>
					{item.artistName}
				</a>
			</div>
		</li>
	);
};

export const ItemListAlbum = ({ item }) => {
	const albumYear = new Date(item.releaseDate).getFullYear();
	return (
		<li className='group flex items-center space-x-2 pb-3 mt-3 text-sm border-b border-solid border-gray-700 cursor-pointer'>
			<div className='col-left relative rounded overflow-hidden flex-shrink-0'>
				<img
					src={`${item.artworkUrl60}`}
					srcSet={`${item.artworkUrl100} 2x`}
					alt={item.collectionName}
					width='50'
					height='50'
				/>
				<a
					href={item.collectionViewUrl}
					target='_blank'
					rel='noreferrer'>
					<div className='artwork-overlay absolute top-0 w-full h-full bg-gray bg-opacity-70 z-10 fill-current flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							xmlns='http://www.w3.org/2000/svg'
							className='dt-play-button__list-item-play-glyph'>
							<path
								d='M4.4 15.14l10.386-6.096c.842-.459.794-1.64 0-2.097L4.401.85c-.87-.53-2-.12-2 .82v12.625c0 .966 1.06 1.4 2 .844z'
								fillRule='nonzero'></path>
						</svg>
					</div>
				</a>
			</div>
			<div className='col-right'>
				<a
					href={item.collectionViewUrl}
					target='_blank'
					rel='noreferrer'
					className='hover:text-white'>
					{item.collectionName}
				</a>
				<br />
				<div className='text-gray-500 hover:underline'>
					<a
						href={item.artistViewUrl}
						target='_blank'
						rel='noreferrer'>
						{`${item.artistName} · ${albumYear}`}
					</a>
				</div>
			</div>
		</li>
	);
};
