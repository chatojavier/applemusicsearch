export const SearchInput = ({
	handlerSubmitSearchInput,
	handlerChangeSearchInput,
	query,
	selectedOption,
	onValueChange,
	className
	}) => {
	
	return (
		<form onSubmit={handlerSubmitSearchInput} className={className}>
			<div className='search-title font-bold text-3xl mt-4 mb-2'>
				Search
			</div>
			<input
				type='text'
				value={query}
				onChange={handlerChangeSearchInput}
				placeholder='Search'
				className='w-full py-1 px-2 rounded-md bg-gray-800 focus:ring-4 ring-red ring-opacity-60 outline-none font-light text-sm caret-red'></input>
			<div className='input-kind mt-2'>
				<button type='radio' name='kind' value='song' key='song' checked={selectedOption === "song"} onClick={onValueChange} className={`px-3 py-1 rounded-full text-xs ${selectedOption === "song" && "bg-red"} | md:block md:w-full md:text-left`}> Songs </button>
				<button type='radio' name='kind' value='musicArtist' key='musicArtist' checked={selectedOption === "musicArtist"} onClick={onValueChange} className={`px-3 py-1 rounded-full text-xs ${selectedOption === "musicArtist" && "bg-red"} | md:block md:w-full md:text-left`}> Artists </button>
				<button type='radio' name='kind' value='album' key='album' checked={selectedOption === "album"} onClick={onValueChange} className={`px-3 py-1 rounded-full text-xs ${selectedOption === "album" && "bg-red"} | md:block md:w-full md:text-left`}> Albums </button>
				<button type='radio' name='kind' value='musicVideo' key='musicVideo' checked={selectedOption === "musicVideo"} onClick={onValueChange} className={`px-3 py-1 rounded-full text-xs ${selectedOption === "musicVideo" && "bg-red"} | md:block md:w-full md:text-left`}> Music Videos </button>
				
			</div>
		</form>
	);
};
