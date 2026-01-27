
//   document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector('[data-modelviewer-glasses-id]');
//     const button = container?.querySelector('button');

//     // Injected directly from Liquid into JS
//     const trymeId = '{{ product.selected_or_first_available_variant.metafields.custom.tryme_3d_viewer_code | escape }}'.trim();

//     if (container && button && trymeId) {
//       button.addEventListener('click', () => {
//         container.setAttribute('data-class', trymeId);
//         console.log(`Set data-class to: ${trymeId}`);
//       });

//       // Optionally trigger the click immediately
//       // button.click();
//     }
//   });





