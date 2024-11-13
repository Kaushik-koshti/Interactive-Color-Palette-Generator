function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = ''; // Clear current palette
    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;
        palette.appendChild(colorBox);
    }
}

function savePalette() {
    const colors = Array.from(document.querySelectorAll('.color-box')).map(box => box.textContent);
    localStorage.setItem('savedPalette', JSON.stringify(colors));
    alert('Palette saved successfully!');
}

function loadPalette() {
    const savedPalette = JSON.parse(localStorage.getItem('savedPalette'));
    if (savedPalette) {
        const palette = document.getElementById('palette');
        palette.innerHTML = ''; // Clear current palette
        savedPalette.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;
            colorBox.textContent = color;
            palette.appendChild(colorBox);
        });
    } else {
        alert('No saved palette found.');
    }
}

function downloadPalette() {
    html2canvas(document.querySelector('.color-palette')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'palette.png';
        link.click();
    });
}