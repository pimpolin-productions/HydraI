import { runGif } from './rungif.js'
import { loadHydraScript } from './hydra.js'
import { importPreset } from './load_preset.js'

const form = document.getElementById("ai-form");
const aiButton = document.getElementById("ai-button");

aiButton.addEventListener('click', function() {
  form.submit();
  runGif();
});

document.getElementById("randomize-button").addEventListener('click', function() {
  importPreset();
})

