module.exports = function(eleventyConfig) {
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