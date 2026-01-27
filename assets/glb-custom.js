//if(window.innerWidth > 749) {
  
  const findClosest = (array, target) => {
  let smallestDiff = Math.abs(target - array[0]);
  let closest = 0; //index of the current closest number
  for (let i = 1; i < array.length; i++) {
    let currentDiff = Math.abs(target - array[i]);
    if (currentDiff < smallestDiff) {
       smallestDiff = currentDiff;
      closest = i;
    }
  }
  return closest;
}

  const changeModel = (tabLink) => {
    // console.log('changeModel');
     const cameraOrbit = tabLink.getAttribute('data-camera-orbit');
     if(modelViewer) modelViewer.cameraOrbit = cameraOrbit; 
  }
  
  const changeContent = (tabLink) => {
     if(window.innerWidth > 749) {
      // console.log('test demo');
      
       const tabId =tabLink.getAttribute("tab_id");
        // console.log('test11', !tabLink.classList.contains('active'), document.querySelector(`.Product_object_features_main_new [js-custom-content="${tabId}"]`));
       //if(!tabLink.classList.contains('active')) {
         //console.log('run run');
            tabLinks.forEach((tabLink)=> {
               tabLink.classList.remove('active');
            });
            infoTabs.forEach((tabContent)=> {
                tabContent.classList.add('hidden');
             });
            tabLink.classList.add('active');
        
            document.querySelector(`.Product_object_features_main_new [js-custom-content="${tabId}"]`).classList.remove('hidden');
     // }
     }
     else {
       //if(!tabLink.classList.contains('swiper-slide-active')) {
          //console.log('changeContent', tabLink, tabLink.getAttribute('data-index'));
          // Product_object_features_slider?.slideTo(tabLink.getAttribute('data-index'));
      // }
     }
  }

  
  const modelViewer = window.innerWidth > 749?document.querySelector('[js-sunglasses-model]'):document.querySelector('[js-sunglasses-model-mobile]');
  let tabLinks = document.querySelectorAll('.Product_object_features_main_new .common_tab_new .Tabs_common_inner_new');
  const infoTabs = document.querySelectorAll('.Product_object_features_main_new [js-custom-content]');
  let Product_object_features_slider = null;

   if(window.innerWidth <= 749) {
         Product_object_features_slider = new Swiper(".Product_object_features_slider", {
            loop: false,
            grabCursor: false,
            spaceBetween: 8,
            slidesPerGroup: 1,
            slidesPerView: 1,
            watchSlidesProgress: true,
            draggable:!0,
            autoHeight:!1,
            watchOverflow:!0,
            threshold:10,
            mousewheel:{
            forceToAxis:!0
          },
          pagination: {
           el: ".swiper-pagination",
           clickable: true,
          }
      });
         tabLinks = Product_object_features_slider.slides;

        Product_object_features_slider.on('slideChange', () => {
         
         const currentIndex = Product_object_features_slider.realIndex;
         const currentSlide = Product_object_features_slider.slides[currentIndex];
           //console.log('slideChange',currentIndex);
           // setTimeout(() => {
             changeModel(currentSlide);
           // }, 200);
        
        });
       
   }
   else {
      tabLinks.forEach((tabLink)=> {
      tabLink.addEventListener('click', (event) => {
         changeContent(tabLink);
         changeModel(tabLink);
      });
      tabLink.addEventListener('mouseover', (event) => {
          changeContent(tabLink);
          changeModel(tabLink);
      });
     });
  }
  

 // modelViewer?.addEventListener('camera-change', function(evt) {
 //   // modelViewer.getCameraOrbit()
 //    const cameraOrbit = modelViewer.getCameraOrbit();
 //     const camview = {
 //      theta: cameraOrbit.theta* (180 / Math.PI),
 //      phi: cameraOrbit.phi* (180 / Math.PI),
 //      radius: cameraOrbit.radius
 //     // fov:fov,
 //    };
 //      let valueXarray = [];
 //      let valueYarray = [];
 //       tabLinks.forEach((tabLink)=> {
 //         valueXarray.push(tabLink.getAttribute('data-camera-orbit-x'));
 //         valueYarray.push(tabLink.getAttribute('data-camera-orbit-y'));
 //       });

 //      const closestX = findClosest(valueXarray, camview.theta);
 //      const closestY = findClosest(valueYarray, camview.phi);
 //      const diffX = Math.abs(valueXarray[closestX] - camview.theta);
 //      const diffY = Math.abs(valueYarray[closestY] - camview.phi);
 //      console.log('current', camview.theta, camview.phi);
 //      // if(diffX < diffY) {
 //      //   console.log('CALL X');
 //      //     /// call x
 //      //    changeContent(tabLinks[closestX]);
 //      // }
 //      // else if(diffX > diffY) {
 //      //   console.log('CALL Y');
 //      //   //call Y
 //      //    changeContent(tabLinks[closestY]);
 //      // }
 //      // else {
 //      //    console.log('CALL X another');
 //      //    changeContent(tabLinks[closestX]);
 //      //    /// call x
 //      // }
     
 //  })

 
  
 
 



  



// Handles loading the events for <model-viewer>'s slotted progress bar
// const onProgress = (event) => {
//   const progressBar = event.target.querySelector('.progress-bar');
//   const updatingBar = event.target.querySelector('.update-bar');

//   if (event.detail.totalProgress === 0) {
//     progressBar.style.display = 'block';
//     updatingBar.style.width = '0%';
//   } else {
//     updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

//     if (event.detail.totalProgress === 1) {
//       setTimeout(() => {
//         progressBar.style.display = 'none';
//       }, 500);
//     }
//   }
// };
// modelViewer.addEventListener('progress', onProgress);
  
 //=========== Onload click
 // modelViewer.addEventListener('load', e => {
 //   console.log('LOAD', e);
 //  if(modelViewer) {
 //    console.log('CLICK CLICK');
 //    modelViewer.click();
 //  }
 // }, { once: true });


// tabs.forEach(tab => {
  //   tab.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     const target = tab.getAttribute('href');

  //     // Update 3D model view
  //     modelViewer.cameraOrbit = featureData[target].cameraOrbit;

  //     // Update feature description
  //     featureDescription.textContent = featureData[target].text;
  //   });
  // });
  
 

 