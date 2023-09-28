import Header from "../template/header";
import Footer from "../template/footer";

class LayoutView {
	constructor() {
		this.headerEl = document.querySelector('.main-header');
		this.footerEl = document.querySelector('.main-footer');

		this.menuEl = document.querySelector('.menu-icon');
		this.header = document.querySelector('header');
		this.menuOpen = false;
	}

	//----- EVENT LISTENER -----//
	addEventToggleMenu = () => {
		this.menuEl.addEventListener('click', () => {
			this.toggleMenu();
		});
	}

	//----- METHOD -----//
	toggleMenu = () => {
		this.menuOpen = !this.menuOpen;
		this.header.classList.toggle('open', this.menuOpen);
	}

	//----- RENDERING -----//

	/**
	 * Renders a header element.
	 * @param {Object} header  - header object to render.
	 */
	renderHeader() {
		const headerTemplate = Header.renderHeader();

		// Append headerTemplate to the header element.
		this.headerEl.innerHTML = headerTemplate;
	};

	/**
	 * Renders a header element.
	 * @param {Object} footer  - footer object to render.
	 */
	renderFooter() {
		const footerTemplate = Footer.renderFooter();

		// Append footerTemplate to the footer element.
		this.footerEl.innerHTML = footerTemplate;
	};
}

export default LayoutView;
