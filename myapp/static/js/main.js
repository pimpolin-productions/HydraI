import { runGif } from './rungif.js'
import { loadHydraScript } from './hydra.js'
import { importPreset } from './load_preset.js'

const aiForm = document.getElementById("ai-form");
const aiButton = document.getElementById("ai-button");
const randomButton = document.getElementById("randomize-button");

//aiButton.addEventListener('click', function() {
//  console.log(response.response);
//  aiForm.submit();
//});

randomButton.addEventListener('click', function() {
  importPreset();
})

