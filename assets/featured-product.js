class FeaturedProductStitcher extends HTMLElement {
    constructor() {
        super();

        this.featureProductEl = document.querySelector("[js-featured-product]");
        this.sectionId = this.featureProductEl.getAttribute("data-section-id");
        this.swatchItems = this.querySelectorAll("[js-swatch-item]");
        this.init();
    }

    init() {
        this.swatchItems.forEach( swatchItem => swatchItem.addEventListener("click", this.handleAjaxFraming.bind(this)))
    }

    updateState(list, target, cls) {
        list.forEach(item => item.classList.remove(cls));
        target.classList.add(cls)
    }


    handleAjaxFraming({ currentTarget }) {
        
        this.selectedSwatch = currentTarget;
        this.selectedProductHandle = currentTarget.getAttribute('data-product-handle');
        const handle = currentTarget.getAttribute("data-product-handle");
        this.renderAjaxProduct(handle);
    }
    updateLoading() {
        this.featureProductEl.classList.toggle("is-loading");
    }

    renderAjaxProduct(handle) {
        const url = `/products/${handle}?section_id=${this.sectionId}`;

        this.updateLoading();
        fetch(url)
        .then(response => response.text())
        .then(html => {
            const ajaxContainer = new DOMParser()
                .parseFromString(html, 'text/html')
                .querySelector("[js-featured-product]");

            if (ajaxContainer) {
                this.featureProductEl.outerHTML = ajaxContainer.outerHTML;
            }
            const atcButton = document.querySelector("[js-atc-btn]");
            if(atcButton.hasAttribute("data-sold-out")){
              atcButton.addAttribute("disabled")
            }
            document.dispatchEvent(new CustomEvent("featuredProductSliders:init"));
            document.dispatchEvent(new CustomEvent("productPagePopups:init"));
            document.dispatchEvent(new CustomEvent("pdpAccordion:init"));
            this.updateLoading();
        })
        .catch(err => {
            console.log(err)
        })
    }
}

customElements.define('featured-product-stitcher', FeaturedProductStitcher);