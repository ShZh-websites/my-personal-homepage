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
            },
            boxShadow: {
                white: '0 4px 14px 0 rgba(255, 255, 255, 1)'
            }
        }
    }
}