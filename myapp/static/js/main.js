import { runGif } from './rungif.js'
import { loadHydraScript } from './hydra.js'
import { importPreset } from './load_preset.js'

const aiForm = document.getElementById("ai-form");
const aiButton = document.getElementById("ai-button");
const randomButton = document.getElementById("randomize-button");
let data = window.data;
let response = data.response;

//aiButton.addEventListener('click', function() {
//  console.log(response.response);
//  aiForm.submit();
//});


aiForm.addEventListener('submit', function (event) {
  console.log(response);
  event.preventDefault();
  while (true) {
    console.log('x')
    if (response !== 101) {
      console.log(response)
//      loadHydraScript(response);
      break;
    }
  }
});

randomButton.addEventListener('click', function() {
  importPreset();
})

