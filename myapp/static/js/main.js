import { runGif } from './rungif.js'
import { loadHydraScript } from './hydra.js'
import { importPreset } from './load_preset.js'

const aiForm = document.getElementById("ai-form");
const aiButton = document.getElementById("ai-button");
const randomButton = document.getElementById("randomize-button");
const codeTextarea = document.getElementById("code-textarea")
codeTextarea.addEventListener('keydown', function(event){
  if (event.key === "Enter" && event.shiftKey) {
    event.preventDefault();

    const text = codeTextarea.value;
    if (text !== '')
      loadHydraScript(text);
  }
});

randomButton.addEventListener('click', function() {
  importPreset();
})

