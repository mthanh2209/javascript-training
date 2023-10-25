export default class HomeController {
	/**
	 * Constructor of Controller object
	 * @param {Object} productModel - The model for handling product data.
	 * @param {Object} productView - The view for rendering product data and handling user interactions.
	 */
	constructor(productModel, categoryModel, productView, layoutView) {
		this.productModel = productModel;
		this.categoryModel = categoryModel;
		this.productView = productView;
		this.layoutView = layoutView;

		this.init();
	}

	init = async () => {
		await this.handleRenderCategory()
		this.handleRenderProduct()
		this.productView.addEventSwitchPage();
		this.productView.addEventMoreProduct();
		this.productView.renderProduct();
		this.layoutView.addEventCartPage();
		this.layoutView.addEventForIcons();
	}

	/**
	 * Get the category list from model
	 * Then execute renderLayout method in view
	 */
	async handleRenderCategory() {
		const categories = await this.categoryModel.getCategoryList();
		this.layoutView.renderLayout(categories);
	}

	/**
	 * Get the product list from model
	 * Then execute renderProduct method in view
	 */
	async handleRenderProduct() {
		const products = await this.productModel.getProductList();
		this.productView.renderProduct(products);
	}
}
