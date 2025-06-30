// Replicants for heading and paragraph fonts
const headingFontRep = nodecg.Replicant('selectedHeadingFont', { defaultValue: 'FinlandicaHeadline-Bold' });
const paragraphFontRep = nodecg.Replicant('selectedParagraphFont', { defaultValue: 'FinlandicaText-Regular' });

// Replicants for text content
const headingTextRep = nodecg.Replicant('headingText', { defaultValue: 'Business in Finland' });
const subheadingTextRep = nodecg.Replicant('subheadingText', { defaultValue: 'Opportunities and Innovation' });
const paragraphTextRep = nodecg.Replicant('paragraphText', { defaultValue: 'Finland is renowned for its stable economy, innovative technology sector, and high quality of life.<br>The business environment encourages entrepreneurship, sustainability, and global collaboration.<br>Companies benefit from a skilled workforce, transparent regulations, and strong support for research and development.' });

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

    // Text input handlers
    const headingInput = document.getElementById('headingTextInput');
    const subheadingInput = document.getElementById('subheadingTextInput');
    const paragraphInput = document.getElementById('paragraphTextInput');
    const loadTestTextBtn = document.getElementById('loadTestText');
    const saveBtn = document.getElementById('saveSettings');

    if (headingInput) {
        headingInput.addEventListener('input', () => {
            headingTextRep.value = headingInput.value;
        });
        headingTextRep.on('change', (newVal) => {
            headingInput.value = newVal;
        });
    }

    if (subheadingInput) {
        subheadingInput.addEventListener('input', () => {
            subheadingTextRep.value = subheadingInput.value;
        });
        subheadingTextRep.on('change', (newVal) => {
            subheadingInput.value = newVal;
        });
    }

    if (paragraphInput) {
        paragraphInput.addEventListener('input', () => {
            paragraphTextRep.value = paragraphInput.value.replace(/\n/g, '<br>');
        });
        paragraphTextRep.on('change', (newVal) => {
            paragraphInput.value = newVal.replace(/<br>/g, '\n');
        });
    }

    // Load test text button
    if (loadTestTextBtn) {
        loadTestTextBtn.addEventListener('click', () => {
            headingTextRep.value = 'Business in Finland';
            subheadingTextRep.value = 'Opportunities and Innovation';
            paragraphTextRep.value = 'Finland is renowned for its stable economy, innovative technology sector, and high quality of life.<br>The business environment encourages entrepreneurship, sustainability, and global collaboration.<br>Companies benefit from a skilled workforce, transparent regulations, and strong support for research and development.';
        });
    }

    // Save button
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            // Show confirmation
            const originalText = saveBtn.textContent;
            saveBtn.textContent = 'Saved!';
            saveBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
            saveBtn.classList.add('bg-green-500');

            setTimeout(() => {
                saveBtn.textContent = originalText;
                saveBtn.classList.remove('bg-green-500');
                saveBtn.classList.add('bg-green-600', 'hover:bg-green-700');
            }, 2000);
        });
    }
});
