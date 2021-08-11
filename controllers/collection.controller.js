const Model = require('../models/collection.js');

class Collection {
    getData() {
        Model.getData();
    };

    async getCollection(res) {
        res.status(200);
        res.json(await Model.showDate(res));
    }
}

module.exports = new Collection();