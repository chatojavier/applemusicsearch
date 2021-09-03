import millisToMinutesAndSeconds from "../helpers/millisToMinutesAndSeconds";
import artist_artwork from "../artist_artwork.webp";
import author_artwork from "../author_artwork.webp";
import { useState } from "react";

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

export const ItemListBook = ({ item }) => {
	const [isDescription, stateIsDescription] = useState(false);

	const toogleShowDescription = () => {
		stateIsDescription(!isDescription);
	}
	
	return (
		<li className='group flex items-center space-x-2 pb-3 mt-3 text-sm border-b border-solid border-gray-700 cursor-pointer'>
			<div className='col-left relative rounded overflow-hidden flex-shrink-0'>
				<img
					src={`${item.artworkUrl60}`}
					srcSet={`${item.artworkUrl100} 2x`}
					alt={item.trackName}
					width='50'
					height='50'
				/>
				<a href={item.trackViewUrl} target='_blank' rel='noreferrer'>
					<div className='artwork-overlay absolute top-0 w-full h-full bg-gray bg-opacity-70 z-10 fill-current flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
						<svg
						width="16"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						className='dt-play-button__list-item-play-glyph'>
							<path d="M7.7,4c0-0.5-0.5-1.2-0.9-1.6c-0.6-0.6-1.5-1-2.6-1.1C3.2,1.2,1.8,1.6,0.8,2.2C0.3,2.6,0.1,2.9,0,3.3c0,0.1,0,2.1,0,4.9 c0,2.7,0,4.1,0,4.7c0,0.2,0.2,0.3,0.4,0.2c0.1-0.1,1.3-0.9,2-1c0.5-0.1,0.9-0.2,1.4-0.2c1.2,0,2.3,0.4,3.1,1.3 c0.5,0.5,0.8,1.5,0.8,1.5S7.7,5.6,7.7,4z M8.3,14.7c0,0,0.3-0.9,0.8-1.5c0.8-0.8,1.8-1.3,3.1-1.3c0.5,0,0.9,0,1.4,0.2 c0.7,0.1,1.9,0.9,2,1c0.2,0.1,0.4,0,0.4-0.2c0-0.7,0-2,0-4.7c0-2.8,0-4.8,0-4.9c-0.1-0.4-0.3-0.7-0.8-1c-1-0.6-2.3-1-3.5-0.9 c-1.1,0.1-1.9,0.5-2.6,1.1C8.8,2.8,8.3,3.5,8.3,4C8.3,5.6,8.3,14.7,8.3,14.7z"/>
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
				<div className="text-xs text-gray-500">
					{item.genres.map((genre, index, arr) => {
						return <span><a href={"https://books.apple.com/us/genre/" + item.genreIds[index]} className="hover:underline">{genre}</a>{(arr.length === index + 1) ? "" : ", "}</span>
					}).filter((el, index) => {
						return index !== 1;
					})}
				</div>
				<br/>
				<div className='text-gray-500'>
					{isDescription &&
					<div>
						<div className="description" dangerouslySetInnerHTML={{__html: item.description}}></div>
						<br></br>
					</div>}
					<button className="font-light hover:text-white" onClick={toogleShowDescription}>{isDescription ? "Hide abstract" : "Show abstract"}</button>
				</div>
			</div>
		</li>
	);
};

export const ItemListAuthor = ({ item }) => {
	return (
		<li className='group flex items-center space-x-2 pb-3 mt-3 text-sm border-b border-solid border-gray-700 cursor-pointer'>
			<div className='col-left relative rounded overflow-hidden flex-shrink-0'>
				<img
					src={author_artwork}
					alt={item.artistName}
					width='50'
					height='50'
				/>
				<a href={item.artistLinkUrl} target='_blank' rel='noreferrer'>
					<div className='artwork-overlay absolute top-0 w-full h-full bg-gray bg-opacity-70 z-10 fill-current flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity'>
						<svg
						width="16"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						className='dt-play-button__list-item-play-glyph'>
							<path d="M7.7,4c0-0.5-0.5-1.2-0.9-1.6c-0.6-0.6-1.5-1-2.6-1.1C3.2,1.2,1.8,1.6,0.8,2.2C0.3,2.6,0.1,2.9,0,3.3c0,0.1,0,2.1,0,4.9 c0,2.7,0,4.1,0,4.7c0,0.2,0.2,0.3,0.4,0.2c0.1-0.1,1.3-0.9,2-1c0.5-0.1,0.9-0.2,1.4-0.2c1.2,0,2.3,0.4,3.1,1.3 c0.5,0.5,0.8,1.5,0.8,1.5S7.7,5.6,7.7,4z M8.3,14.7c0,0,0.3-0.9,0.8-1.5c0.8-0.8,1.8-1.3,3.1-1.3c0.5,0,0.9,0,1.4,0.2 c0.7,0.1,1.9,0.9,2,1c0.2,0.1,0.4,0,0.4-0.2c0-0.7,0-2,0-4.7c0-2.8,0-4.8,0-4.9c-0.1-0.4-0.3-0.7-0.8-1c-1-0.6-2.3-1-3.5-0.9 c-1.1,0.1-1.9,0.5-2.6,1.1C8.8,2.8,8.3,3.5,8.3,4C8.3,5.6,8.3,14.7,8.3,14.7z"/>
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
				<br/>
				<span className="text-xs text-gray-500">{item.primaryGenreName}</span>
			</div>
		</li>
	);
};

export const ItemListMovie = ({ item }) => {
	const [isDescription, stateIsDescription] = useState(false);

	const toogleShowDescription = () => {
		stateIsDescription(!isDescription);
	}

	return (
		<li className='group flex items-center space-x-2 pb-3 mt-3 text-sm border-b border-solid border-gray-700 cursor-pointer'>
			<div className='col-left relative rounded overflow-hidden flex-shrink-0'>
				<img
					src={`${item.artworkUrl60}`}
					srcSet={`${item.artworkUrl100} 2x`}
					alt={item.trackName}
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
					className='group-hover:text-white'>
					{item.trackName}
				</a>
				<br/>
				<span className="text-xs text-gray-500">{item.primaryGenreName}</span>
				<br/>
				<br/>
				<div className='text-gray-500'>
					{isDescription &&
					<div>
						<div className="description" dangerouslySetInnerHTML={{__html: item.longDescription}}></div>
						<br></br>
					</div>}
					<button className="font-light hover:text-white" onClick={toogleShowDescription}>{isDescription ? "Hide abstract" : "Show abstract"}</button>
				</div>
			</div>
		</li>
	);
};