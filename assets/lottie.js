import { DotLottie } from "https://esm.sh/@lottiefiles/dotlottie-web";


const canvases = document.querySelectorAll('.hb-tab-section__tab_img-wrap canvas');

canvases.forEach((canvas) => {
  const lottieUrl = canvas.closest('.hb-tab-section__tab_img-wrap').getAttribute('lottie-url');
  console.log(lottieUrl)
  if (lottieUrl && lottieUrl !== "blank") {
    let dotLottie = new DotLottie({
      canvas,
      src: lottieUrl
    });

    if(window.innerWidth > 767) {
      canvas.addEventListener('mouseenter', () => {
        dotLottie.setMode('forward');
        dotLottie.play();
      });
      canvas.addEventListener('mouseleave', () => {
        dotLottie.setMode('reverse');
        dotLottie.play();
      });
    } else {
      canvas.addEventListener('click', () => {
        if(canvas.hasAttribute('js-expend')) {
           canvas.removeAttribute('js-expend')
           dotLottie.setMode('reverse');
        } else {
            canvas.setAttribute('js-expend', '')
           dotLottie.setMode('forward');
        }
        dotLottie.play();
      });
    }
    
  }
});
