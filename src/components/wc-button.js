import getSiblings from "../helpers/getSibilings";

// Create a class for the element
class ButtonLink extends HTMLElement {
	constructor() {
		super();
		this.addEventListener("click", this.handleActive);
	}
	handleActive(event) {
		console.log(getSiblings(this));
		let sibilings = getSiblings(this);
		sibilings.forEach((sibiling) => sibiling.classList.remove("active"));
		this.classList.add("active");
	}
	connectedCallback() {
		const href = this.getAttribute("href");
		const children = this.innerHTML;

		this.innerHTML = `
            <a href="${href}" class="inline-block font-light text-gray-500 text-center py-1 w-full rounded-md hover:text-white"><span>${children}</span></a>
        `;
	}
}

// Define the new element
customElements.define("wc-button", ButtonLink);
