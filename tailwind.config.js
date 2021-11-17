module.exports = {
    mode: "jit",
    darkMode: "media",
    purge: [
        './pages/*.html',
        './layout/base.njk'
    ],
    theme: {
        extend: {
            transitionProperty: {
                'height': 'height'
            }
        }
    }
}