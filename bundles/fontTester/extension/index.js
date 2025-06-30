module.exports = function (nodecg) {
   nodecg.log.info("Hello, from your bundle's extension!");
   nodecg.log.info("I'm where you put all your server-side code.");
   nodecg.log.info(`To edit me, open "${__filename}" in your favorite text editor or IDE.`);
   nodecg.log.info('You can use any libraries, frameworks, and tools you want. There are no limits.');
   nodecg.log.info('Visit https://nodecg.dev for full documentation.');
   nodecg.log.info('Good luck!');

   // Declare replicants for fonts
   nodecg.Replicant('selectedHeadingFont', { defaultValue: 'FinlandicaHeadline-Bold' });
   nodecg.Replicant('selectedParagraphFont', { defaultValue: 'FinlandicaText-Regular' });

   // Declare replicants for text content
   nodecg.Replicant('headingText', { defaultValue: 'Business in Finland' });
   nodecg.Replicant('subheadingText', { defaultValue: 'Opportunities and Innovation' });
   nodecg.Replicant('paragraphText', { defaultValue: 'Finland is renowned for its stable economy, innovative technology sector, and high quality of life.<br>The business environment encourages entrepreneurship, sustainability, and global collaboration.<br>Companies benefit from a skilled workforce, transparent regulations, and strong support for research and development.' });
};
