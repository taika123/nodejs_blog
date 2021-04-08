const newRoute = require('./news');
const SiteRoute = require('./site');

function route(app) {
    app.use('/news', newRoute);
    app.use('/', SiteRoute);
}
module.exports = route;