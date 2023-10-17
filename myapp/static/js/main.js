import { runGif } from './rungif.js'
import { loadHydraScript } from './hydra.js'
import { importPreset } from './load_preset.js'

const aiForm = document.getElementById("ai-form");
const aiButton = document.getElementById("ai-button");
const randomButton = document.getElementById("randomize-button");
let response = window.data;


aiButton.addEventListener('click', function() {
  console.log("z");
  aiForm.submit()
});

aiForm.addEventListener('submit', function (event) {
  console.log('aaa')
  event.preventDefault();
  while (true) {
    console.log('x')
    if (response !== 101) {
      loadHydraScript(response);
      break;
    }
  }
});

randomButton.addEventListener('click', function() {
  importPreset();
})

