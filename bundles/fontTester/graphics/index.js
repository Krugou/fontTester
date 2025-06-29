

// Replicants for heading and paragraph fonts
const headingFontRep = nodecg.Replicant('selectedHeadingFont', { defaultValue: 'FinlandicaHeadline-Bold' });
const paragraphFontRep = nodecg.Replicant('selectedParagraphFont', { defaultValue: 'FinlandicaText-Regular' });

window.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('fontSampleHeading');
    const subheading = document.getElementById('fontSampleSubheading');
    const paragraph = document.getElementById('fontSampleParagraph');

    headingFontRep.on('change', (newVal) => {
        let font = newVal;
        // If Google Finlandica option is selected, use the correct font family string
        if (font === "'Finlandica', sans-serif") {
            font = 'Finlandica, sans-serif';
        }
        if (heading) heading.style.fontFamily = font;
        if (subheading) subheading.style.fontFamily = font;
    });

    paragraphFontRep.on('change', (newVal) => {
        let font = newVal;
        if (font === "'Finlandica', sans-serif") {
            font = 'Finlandica, sans-serif';
        }
        if (paragraph) paragraph.style.fontFamily = font;
        document.body.style.fontFamily = font;
    });
});
