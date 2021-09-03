import "./wc-aplogo";
import "./wc-button";

// Create a class for the element
class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<style>
			wc-button:not(:last-child) span {
				display: block;
				width: 100%;
				border-right: 1px #3b3b3c solid;
			}
			wc-button.active a {
				color: #ededed;
				background: #3b3b3c;
				cursor: default;
			}
		</style>
        <div class='header bg-gray-900 p-6 border-b border-solid border-gray-700 flex justify-between'>
            <wc-aplogo className='fill-current text-gray-500'></wc-aplogo>
			<nav class="flex w-96 max-w-8/10 border border-gray-700 border-solid rounded-md">
				<wc-button href="#/music" class="w-1/3 active"">Music</wc-button>
				<wc-button href="#/books" class="w-1/3">Books</wc-button>
				<wc-button href="#/movies" class="w-1/3">Movies</wc-button>
			</nav>
        </div>
        `;
	}
}

// Define the new element
customElements.define("wc-header", Header);
