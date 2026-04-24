export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/styles': 'styles' });

    return {
        dir: {
            input: 'src/docs',
            output: '_site'
        }
    };
}