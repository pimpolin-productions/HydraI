async function loadRandomScript() {
  // Array of scripts
  const scripts = ['preset1.txt', 'preset2.txt', 'preset3.txt', 'preset4.txt', 'preset5.txt', 'preset6.txt', 'preset7.txt', 'preset8.txt', 'preset9.txt', 'preset10.txt', 'preset11.txt', 'preset12.txt', 'preset13.txt', 'preset14.txt', 'preset15.txt', 'preset16.txt', 'preset17.txt', 'preset18.txt', 'preset19.txt', 'preset20.txt', 'preset22.txt', 'preset23.txt', 'preset24.txt', 'preset25.txt', 'preset27.txt', 'preset28.txt', 'preset29.txt', 'preset30.txt'];

  // Randomly select a script
  const randomIndex = Math.floor(Math.random() * scripts.length);
  const selectedScript = scripts[randomIndex];
  console.log(selectedScript);
  try {
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

    // Fetch the script content using AJAX
    const response = await fetch(selectedScript);
    const scriptContent = await response.text();

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
    const variable1 = `
    var hydra = new Hydra({
      canvas: document.getElementById("hydra-canvas"),
      detectAudio: true
    })
    `;
    const fullCode = variable1.trim() + "\n" + scriptContent;

    newScript.innerHTML = fullCode;

    // Append the new script element to the document head
    document.head.appendChild(newScript);

    // Update the placeholder with the script content
    document.getElementById('code-textarea').textContent = scriptContent;
  } catch (error) {
    console.error('Failed to fetch the script:', error);
  }
}


