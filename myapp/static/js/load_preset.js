import { loadHydraScript } from './hydra.js'

export function importPreset() {
  try {
    let scriptContent;
    fetch('/fetch_file/')
      .then(response => response.text())
      .then(scriptContent => {
        loadHydraScript(scriptContent)
      }).catch(error => {
        console.error('Error', error);
      })
  } catch (error) {
    console.error('Failed to fetch the script:', error);
  }
}

