import { Fragment, lazy, useEffect, useState, Suspense } from "react";
import "./components/wc-header";

const importView = (subreddit) =>
	lazy(() => import(`./components/${subreddit}`));

const App = () => {
	const [view, setView] = useState(<></>);

	useEffect(() => {
		const routes = {
			"": "Music",
			"/": "Music",
			"#/music": "Music",
			"#/books": "Books",
			"#/movies": "Movies",
		};

		async function router() {
			console.log(window.location.hash);

			// get requested page
			var link = window.location.hash;

			// get path (route) for page
			var route = routes[link];
			console.log(route);
			// if route exists, load view
			if (route) loadView(route);
		}
		router();

		async function loadView(route) {
			const View = await importView(route);
			await setView(<View />);
		}

		window.addEventListener("hashchange", router);
	}, []);

	return (
		<Fragment>
			<wc-header></wc-header>
			<Suspense fallback='Loading...'>
				<div className='content'>{view}</div>
			</Suspense>
		</Fragment>
	);
};

export default App;
