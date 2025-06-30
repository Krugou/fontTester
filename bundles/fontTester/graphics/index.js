// Replicants for fonts
const headingFontRep = nodecg.Replicant('selectedHeadingFont', { defaultValue: 'FinlandicaHeadline-Bold' });
const paragraphFontRep = nodecg.Replicant('selectedParagraphFont', { defaultValue: 'FinlandicaText-Regular' });

// Replicants for text content
const headingTextRep = nodecg.Replicant('headingText', { defaultValue: 'Business in Finland' });
const subheadingTextRep = nodecg.Replicant('subheadingText', { defaultValue: 'Opportunities and Innovation' });
const paragraphTextRep = nodecg.Replicant('paragraphText', { defaultValue: 'Finland is renowned for its stable economy, innovative technology sector, and high quality of life.<br>The business environment encourages entrepreneurship, sustainability, and global collaboration.<br>Companies benefit from a skilled workforce, transparent regulations, and strong support for research and development.' });

window.addEventListener('DOMContentLoaded', () => {
    // Font change listeners
    headingFontRep.on('change', (newVal) => {
        const headingElement = document.getElementById('fontSampleHeading');
        const subheadingElement = document.getElementById('fontSampleSubheading');
        if (headingElement) {
            headingElement.style.fontFamily = newVal;
        }
        if (subheadingElement) {
            subheadingElement.style.fontFamily = newVal;
        }
    });

    paragraphFontRep.on('change', (newVal) => {
        const paragraphElement = document.getElementById('fontSampleParagraph');
        if (paragraphElement) {
            paragraphElement.style.fontFamily = newVal;
        }
    });

    // Text content change listeners
    headingTextRep.on('change', (newVal) => {
        const headingElement = document.getElementById('fontSampleHeading');
        if (headingElement) {
            headingElement.innerHTML = newVal;
        }
    });

    subheadingTextRep.on('change', (newVal) => {
        const subheadingElement = document.getElementById('fontSampleSubheading');
        if (subheadingElement) {
            subheadingElement.innerHTML = newVal;
        }
    });

    paragraphTextRep.on('change', (newVal) => {
        const paragraphElement = document.getElementById('fontSampleParagraph');
        if (paragraphElement) {
            paragraphElement.innerHTML = newVal;
        }
    });
});
