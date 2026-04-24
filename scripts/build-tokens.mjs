import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
    source: ['tokens/*.tokens.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'src/styules/',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables'
                }
            ]
        }
    }
});

await sd.buildAllPlatforms();