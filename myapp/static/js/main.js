import { aiRequest, runGif } from './ai.js'
import { loadHydraScript } from './hydra.js'
import { importPreset } from './load_preset.js'

document.getElementById("ai-button").addEventListener('click', function() {
  runGif();
});

document.getElementById("randomize-button").addEventListener('click', function() {
  importPreset();
})

