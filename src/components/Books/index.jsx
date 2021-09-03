import { SearchInputBooks } from "../SearchInput";
import BgLogo from "../BgLogo";
import ItemsList from "../ItemsList";
import { useState } from "react";
import useDataApi from "../../hooks/useDataApi";

const Books = () => {
    const [query, setQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedOption, setSelectedOption] = useState("ebook");
	const [{ isLoading, isError, data }, doFetch] = useDataApi(
		`https://itunes.apple.com/search?media=ebook&entity=${selectedOption}&term=${query
			.split(" ")
			.join("+")
			.toLowerCase()}&limit=200`,
		{
			results: [],
		}
	);
	console.log(data);
	const [itemsPerPage, setItemsPerPage] = useState(30);

	const onValueChange = (e) => {
		setSelectedOption(e.target.value);
	};

	const handleChangePage = (e) => {
		setCurrentPage(Number(e.target.textContent));
	};

	const handlerSubmitSearchInput = (e) => {
		doFetch(
			`https://itunes.apple.com/search?media=ebook&entity=${selectedOption}&term=${query
				.split(" ")
				.join("+")
				.toLowerCase()}&limit=200`
		);
		setCurrentPage(1);
		e.preventDefault();
	};

	const handleChangeItemsPerPageInput = (e) => {
		setItemsPerPage(e.target.value);
		setCurrentPage(1);
	};

	const handlerChangeSearchInput = (e) => setQuery(e.target.value);

    return (
        <div className='h-full flex flex-col md:flex-row'>
            <SearchInputBooks
                handlerSubmitSearchInput={handlerSubmitSearchInput}
                handlerChangeSearchInput={handlerChangeSearchInput}
                query={query}
                selectedOption={selectedOption}
                onValueChange={onValueChange}
                className='px-4 pb-2 border-b md:border-b-0 md:border-r border-solid border-gray-700 bg-gray sticky top-0 z-50 md:w-52'></SearchInputBooks>
            <main className='main-content m-4 relative flex-grow'>
                {isError && (
                    <div>
                        <span>Something went wrong ...</span>
                        <BgLogo></BgLogo>
                    </div>
                )}
                {isLoading ? (
                    <div>
                        <span className='ml-2'>loading...</span>
                        <BgLogo></BgLogo>
                    </div>
                ) : (
                    <ItemsList
                        dataApi={data}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        handleChangePage={handleChangePage}
                        onChangeItemsPerPageInput={
                            handleChangeItemsPerPageInput
                        }
                        entity={selectedOption}></ItemsList>
                )}
                {data.results.length === 0 && <BgLogo></BgLogo>}
            </main>
        </div>
    );
}

export default Books;