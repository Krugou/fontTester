

// Replicants for heading and paragraph fonts
const headingFontRep = nodecg.Replicant('selectedHeadingFont', { defaultValue: 'FinlandicaHeadline-Bold' });
const paragraphFontRep = nodecg.Replicant('selectedParagraphFont', { defaultValue: 'FinlandicaText-Regular' });

window.addEventListener('DOMContentLoaded', () => {
    // Heading font buttons
    const headingFontButtons = document.getElementById('headingFontButtons');
    if (headingFontButtons) {
        const headingBtns = headingFontButtons.querySelectorAll('button[data-font]');
        headingBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                headingFontRep.value = btn.getAttribute('data-font');
            });
        });
        headingFontRep.on('change', (newVal) => {
            headingBtns.forEach(btn => {
                if (btn.getAttribute('data-font') === newVal) {
                    btn.classList.add('ring', 'ring-offset-2', 'ring-blue-400');
                } else {
                    btn.classList.remove('ring', 'ring-offset-2', 'ring-blue-400');
                }
            });
        });
    }

    // Paragraph font buttons
    const paragraphFontButtons = document.getElementById('paragraphFontButtons');
    if (paragraphFontButtons) {
        const paraBtns = paragraphFontButtons.querySelectorAll('button[data-font]');
        paraBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                paragraphFontRep.value = btn.getAttribute('data-font');
            });
        });
        paragraphFontRep.on('change', (newVal) => {
            paraBtns.forEach(btn => {
                if (btn.getAttribute('data-font') === newVal) {
                    btn.classList.add('ring', 'ring-offset-2', 'ring-purple-400');
                } else {
                    btn.classList.remove('ring', 'ring-offset-2', 'ring-purple-400');
                }
            });
        });
    }
});
