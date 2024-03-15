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
    var slidesDivs = document.querySelectorAll('.slideshow-container');
    var sections = document.querySelectorAll('.changeable-section');
    var articles = document.querySelectorAll('.changeable-article');
    var isContentHidden = localStorage.getItem('isContentHidden') === 'true';

    function toggleContent(hide) {
        images.forEach(function(image) {
            image.classList.toggle('hidden-content', hide);
        });

        slidesDivs.forEach(function(slidesDiv) {
            slidesDiv.classList.toggle('hidden-content', hide);
        });

        sections.forEach(function(section) {
            section.classList.toggle('stretch-container', hide);
            section.classList.toggle('changeable-section', !hide);
        });

        articles.forEach(function(article) {
            article.classList.toggle('hidden-content', hide);
        });

        toggleButton.innerHTML = hide ? "Visa bilder" : "Dölj bilder";

        localStorage.setItem('isContentHidden', hide);
    }

    toggleContent(isContentHidden);

    toggleButton.addEventListener('click', function() {
        isContentHidden = !isContentHidden;
        toggleContent(isContentHidden);
    });
});


