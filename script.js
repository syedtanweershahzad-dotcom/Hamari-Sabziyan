document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('veggieGrid');

    if (!grid) {
        console.error('Grid element not found!');
        return;
    }

    if (typeof vegetables === 'undefined' || !Array.isArray(vegetables)) {
        console.error('Vegetables data not loaded! Make sure data.js is loaded before script.js.');
        return;
    }

    // Fast batch DOM creation
    const fragment = document.createDocumentFragment();

    vegetables.forEach(veg => {
        const card = document.createElement('div');
        card.className = 'card';

        const isLightColor = veg.color === '#edf2f7' || veg.color === '#ffffff';
        const indicatorStyle = `background-color: ${veg.color};${isLightColor ? ' border: 1px solid #cbd5e0;' : ''}`;

        card.innerHTML = `
            <div class="img-container">
                <img 
                    src="${veg.image}" 
                    alt="${veg.name}" 
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&h=400&q=80';"
                >
                <div class="indicator" style="${indicatorStyle}"></div>
            </div>
            <div>
                <div class="card-title">${veg.name}</div>
                <div class="card-subtitle">${veg.roman}</div>
                <div class="card-urdu">${veg.urdu}</div>
            </div>
            <div class="card-price">
                <span><span class="rupee">Rs.</span> ${veg.price}</span>
                <span class="per-kg">/ kg</span>
            </div>
        `;

        fragment.appendChild(card);
    });

    grid.innerHTML = '';
    grid.appendChild(fragment);

    console.log(`✅ ${vegetables.length} vegetables loaded successfully!`);
});