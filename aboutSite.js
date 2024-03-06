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
