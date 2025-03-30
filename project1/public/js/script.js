document.getElementById('loadBeyblades').addEventListener('click', async () => {
  try {
      const response = await fetch('/api/beyblades');
      const data = await response.json();
      displayBeyblades(data);
  } catch (error) {
      console.error('Arena malfunction:', error);
  }
});

document.getElementById('resetArena').addEventListener('click', () => {
  document.getElementById('beybladeContainer').innerHTML = '';
});

function displayBeyblades(blades) {
  const container = document.getElementById('beybladeContainer');
  container.innerHTML = blades.map(blade => `
      <div class="beyblade-card ${blade.type.toLowerCase()}">
      <br><br/>
          <div class="beyblade-header">
              <h3>${blade.name}</h3>
              <span class="power">⚡${blade.power_level}</span>
          </div>
          <div class="beyblade-details">
              <p><strong>Blader:</strong> ${blade.owner}</p>
              <p><strong>Type:</strong> ${blade.type}</p>
              <p><strong>Special Move:</strong> ${blade.special_move}</p>
          </div>
          
      </div>
  `).join('');
}