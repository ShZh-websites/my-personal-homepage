module.exports = {
    purge: [
        './pages/*.html',
        './layout/base.njk'
    ],
    theme: {
        extend: {
            transitionProperty: {
                'top': 'top'
            }
        }
    }
}