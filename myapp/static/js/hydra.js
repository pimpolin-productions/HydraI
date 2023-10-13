export function loadHydraScript(scriptContent) {
  // Remove the previous script element
  const existingScript = document.getElementById('hydra-script');
  if (existingScript) {
    document.head.removeChild(existingScript);
  }
   // Remove the previous canvas element
  const existingCanvas = document.getElementById('hydra-canvas');
  if (existingCanvas) {
    document.getElementById('right-section').textContent = '';
  }

  // Create a new canvas element
  const newCanvas = document.createElement('canvas');
  newCanvas.width = 1280;
  newCanvas.height = 720;
  newCanvas.id = 'hydra-canvas';

  // Append the new canvas element to the document
  document.getElementById('right-section').appendChild(newCanvas);

  // Create a new script element
  const newScript = document.createElement('script');
  newScript.id = 'hydra-script';
  const hydraPreCode= `
  var hydra = new Hydra({
    canvas: document.getElementById("hydra-canvas"),
    detectAudio: true
  })
  `;
  const fullCode = hydraPreCode.trim() + "\n" + scriptContent;
   
  newScript.innerHTML = fullCode;
  // Append the new script element to the document head
  document.head.appendChild(newScript);
  
  // Update the placeholder with the script content
  document.getElementById('code-textarea').textContent = scriptContent;
}

