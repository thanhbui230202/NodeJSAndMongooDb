const newRoutes = require('./news');
const meRoutes = require('./me');
const courseRoutes = require('./courses');
const siteRoutes = require('./site');
function routes(app) {
    app.use('/news', newRoutes);
    app.use('/me', meRoutes);
    app.use('/courses', courseRoutes);
    app.use('/search', siteRoutes);
    app.use('/', siteRoutes);
}
module.exports = routes;
