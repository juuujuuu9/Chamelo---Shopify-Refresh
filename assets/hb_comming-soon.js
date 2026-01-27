class HbColorSwatcher extends HTMLElement {
  constructor() {
    super()
    this.swatchAttr = '[js-hb-color-swatch-img]';
    this.colorSwatch = this.querySelectorAll('[js-color-swatch]');
    this.init();
  }

  init() {
    this.colorSwatch.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        // Get the closest parent product card
        let parentProductCard = swatch.closest('[js-card-product]');
        
        this.updateClass(swatch, parentProductCard)
        this.updateImage(swatch, parentProductCard)
        this.updateLinks(swatch, parentProductCard)
        this.updateTitle(swatch, parentProductCard)
        this.updatePrices(swatch, parentProductCard)
        this.updateVideo(swatch, parentProductCard)
        this.updateHoverImages(swatch, parentProductCard)
        this.updateDescription(swatch, parentProductCard)
        this.updateCompareProductDetails(swatch, parentProductCard)
        this.updateCommingSoon(swatch, parentProductCard);
          
      });
    });
  }

  updateCommingSoon(swatch, parent) {
    const comminSoonBtn = parent.querySelector('[js-product-comming-soon]')
    const showNowBtn = parent.querySelector('[js-product-available]')

    const comingsoonText = swatch.querySelector('[js-hb-color-swatch-img]').getAttribute('data-commingsoon-text');

    if(comingsoonText){
      comminSoonBtn.classList.remove('hide')
      showNowBtn.classList.add('hide')
    } else {
      showNowBtn.classList.remove('hide')
      comminSoonBtn.classList.add('hide')
    }

  }

  updateDescription(swatch, parent) {

    const productDescriptionContent = swatch.querySelector(this.swatchAttr).getAttribute('data-product-description')
    const productDescription = parent.querySelector('[js-hb-product-description]')

    if(productDescription) {
      productDescription.innerHTML = productDescriptionContent
    }

  }

  updateHoverImages(swatch, parent) {

    const featuredImageUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-img-src-value');
    const collectionHoverImageUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-collection-hover-image');
    const fullHoverImageUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-full-hover-image');

    const collectionImage= parent.querySelector('[js-hb-collection-image]')
    const collectionHoverImage= parent.querySelector('[js-hb-collection-hover-image]')
    const collectionHoverVideo= parent.querySelector('[js-hb-collection-hover-video]')
    
    const fullHoverImage= parent.querySelector('[js-hb-full-hover-image]')

    if(collectionImage) {
      collectionImage.setAttribute('src', featuredImageUrl);
      collectionImage.setAttribute('srcset', featuredImageUrl); 
    }

    if(collectionHoverImage) {
      collectionHoverImage.setAttribute('src', collectionHoverImageUrl);
      collectionHoverImage.setAttribute('srcset', collectionHoverImageUrl);
    }

    if(collectionHoverVideo) {
      const videoUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-collection-hover-video');
      const videoPoster = swatch.querySelector(this.swatchAttr).getAttribute('data-collection-hover-video-poster');

      collectionHoverVideo.setAttribute('video_url', videoUrl);
      collectionHoverVideo.setAttribute('src', videoUrl);
      collectionHoverVideo.play();
      collectionHoverVideo.setAttribute('poster', videoPoster);
    }

    if(fullHoverImage) {
      fullHoverImage.setAttribute('src', fullHoverImageUrl);
      fullHoverImage.setAttribute('srcset', fullHoverImageUrl);
    }

  }

  updateVideo(swatch, parent) {
    // Update the video src if available
    let newVideoUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-video-url');
    let newPosterImage = swatch.querySelector(this.swatchAttr).getAttribute('data-poster');
    let mainProductVideo = parent.querySelector('[js-hb-video]');

    if (mainProductVideo) {
      // If a valid video URL is available, set the video source and poster
      mainProductVideo.setAttribute('video_url', newVideoUrl);
      mainProductVideo.setAttribute('src', newVideoUrl);
      mainProductVideo.play();
      mainProductVideo.setAttribute('poster', newPosterImage);
    }
  }

  updatePrices(swatch, parent) {
    let newPrice = swatch.querySelector(this.swatchAttr).getAttribute('data-price');
    let newRegularPrice = swatch.querySelector(this.swatchAttr).getAttribute('data-compare-price');
        
    // Update the product price
    let mainProductPrices = parent.querySelectorAll('.price-item.price-item--sale');
    let mainProductRegularPrices = parent.querySelectorAll('.price-item.price-item--regular');
    
    if(!newRegularPrice) {
      mainProductRegularPrices.forEach(function(mainProductRegularPrice) {
        mainProductRegularPrice.textContent = newPrice;
      });
    } else {
      mainProductRegularPrices.forEach(function(mainProductRegularPrice) {
        mainProductRegularPrice.textContent = newRegularPrice;
      });
    }

    mainProductPrices.forEach(function(mainProductPrice) {
      mainProductPrice.textContent = newPrice;
    });

  }

  updateTitle(swatch, parent) {
    let newTitle = swatch.querySelector(this.swatchAttr).getAttribute('data-title');
        
    // Update product title in the card
    let mainProductTitle = parent.querySelector('[js-hb-product-title]');
    if (mainProductTitle) {
      mainProductTitle.textContent = newTitle;
    }
  }

  updateClass(swatch, parent) {
    // Remove 'active' class from all color swatches inside the product card
    const allColorSwatches = parent.querySelectorAll('[js-color-swatch]');
    allColorSwatches.forEach(function(swatch) {
      swatch.classList.remove('active');
    });

    // Add 'active' class to the clicked swatch
    swatch.classList.add('active');
  }

  updateImage(swatch, parent) {
    const compareProductImageUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-compare-product-image');
    const compareProductImage = parent.querySelector('[js-hb-compare-product-image-wrapper] img');
    if (compareProductImage) {
      compareProductImage.setAttribute('src', compareProductImageUrl);
      compareProductImage.setAttribute('srcset', compareProductImageUrl);
    }
  }

  updateLinks(swatch, parent) {
    // Get and update the product URL, title, and price
    let mainProductUrl = parent.querySelectorAll('[js-btn-link]');
    let newProductUrl = swatch.querySelector(this.swatchAttr).getAttribute('data-new-product-url');

    // Update all product link URLs
    mainProductUrl.forEach(function(link) {
      link.setAttribute('href', newProductUrl);
    });
  }

  updateCompareProductDetails(swatch, parent) {
    const compareProductDetailsTags = parent.querySelectorAll('[js-hb-compare-product-details]');
    const compareProductDetails = swatch.querySelector(this.swatchAttr).getAttribute('data-compare-product-details');
    
    compareProductDetailsTags.forEach(function(compareProductDetailsTag) {
      compareProductDetailsTag.innerHTML = compareProductDetails;
    });
  }
}

customElements.define('hb-color-swatch', HbColorSwatcher)