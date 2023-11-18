import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((data) => {
        const imgElement = document.createElement('img');
        imgElement.src = data[0].url;
        imgElement.style.width = '300px';
        imgElement.style.height = '300px';
        imgElement.style.display = 'block'; // Make the image a block-level element
        imgElement.style.margin = 'auto'; // Center the image horizontally
        imgElement.style.marginTop = '20vh'; // Center the image vertically (50% from the top)

        const appContainer = document.querySelector('.App');
        appContainer.innerHTML = ''; // Clear any previous content
        appContainer.appendChild(imgElement);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;
