module.exports = {
    mode: "jit",
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