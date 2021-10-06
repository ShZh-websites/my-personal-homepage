module.exports = function(eleventyConfig) {
    // Copy `assets/` to output directory
    eleventyConfig.addPassthroughCopy({"assets": "assets"});

    // Parse .txt file as data input
    eleventyConfig.dataExtensions = new Map([
        ["txt", function parse(str) {
            // must return object, otherwise TemplateData cleanupData throws TypeError
            return { text: str };
        }],
    ]);

    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "pages",
            // The relevant path is the input directory
            includes: "../layout",
            data: "../data",
            output: "dist"
        }
    };
};