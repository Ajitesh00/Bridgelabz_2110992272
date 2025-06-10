function loadScript(scriptName) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = scriptName;
    script.onload = () => resolve(`Script ${scriptName} loaded successfully`);
    script.onerror = () => reject(new Error(`Failed to load script ${scriptName}`));
    document.head.appendChild(script);
    });
}