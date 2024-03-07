function ChangeTheme() {
    document.addEventListener('DOMContentLoaded', () => {
        const modeToggle = document.getElementById('mode-toggle');
        const currentMode = localStorage.getItem('theme');

        // Initialt tema vid sidladdning
        if (currentMode === 'light') {
            document.body.classList.add('light-mode');
            modeToggle.checked = false; // Ljusläge är inaktiverat
        } else {
            document.body.classList.remove('light-mode');
            modeToggle.checked = true; // Mörkläge är aktiverat
        }

        // Växlingsfunktion vid ändring av toggle
        modeToggle.addEventListener('change', () => {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');

            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            modeToggle.checked = !isLightMode;
        });
    });
}

ChangeTheme();

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-content');
    var images = document.querySelectorAll('.hide-img'); 
    var textDivs = document.querySelectorAll('.text');
    var button = document.getElementById("toggle-content");
    var slidesDivs = document.querySelectorAll('.slideshow-container')

    var isContentHidden = localStorage.getItem('isContentHidden') === 'true';

    function toggleContent(hide) {
        images.forEach(function(image) {
            if(hide) {
                image.classList.add('hidden-content');
                button.innerHTML = "Visa bilder";
            } else {
                image.classList.remove('hidden-content');
                button.innerHTML = "Dölj bilder";
            }
        });
        textDivs.forEach(function(textDiv) {
            if(hide) {
                textDiv.classList.add('hidden-content');
            } else {
                textDiv.classList.remove('hidden-content');
            }
        });
        slidesDivs.forEach(function(slidesDiv) {
        if(hide) {
            slidesDiv.classList.add('hidden-content');
        } else {
            slidesDiv.classList.remove('hidden-content');
        }
        });
        localStorage.setItem('isContentHidden', hide);
    }
    toggleContent(isContentHidden);
    toggleButton.addEventListener('click', function() {
        isContentHidden = !isContentHidden;
        toggleContent(isContentHidden);
    });
});

