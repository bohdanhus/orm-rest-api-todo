const dashboardModel = require('../models/dashboard');

class Dashboard {
    getDashboard(req, res) {
        dashboardModel.getDashboard(req, res);
    }
}

module.exports = new Dashboard();