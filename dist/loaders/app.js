"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan_1 = require("./morgan");
const winston_1 = require("./winston");
const mongoose = require("mongoose");
const routes_1 = require("../routes");
const cors_config_1 = require("../configs/cors.config");
const mongo_config_1 = require("../configs/mongo.config");
const app = Express();
app.use('/', Express.static('public'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors(cors_config_1.default));
app.use(morgan_1.default);
app.use(helmet());
app.use(routes_1.default);
app.use((req, res) => {
    res.status(404).json({
        error: true,
        message: `ressource ${req.originalUrl} n'existe pas`,
    });
});
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({
            error: true,
            message: "Le body de la requete n'est pas une JSON valide",
        });
    }
});
mongoose.connect(mongo_config_1.mongoDBURI, mongo_config_1.mongoOptions, (error) => {
    if (error) {
        winston_1.default.error(`${error} ❌`);
        throw error;
    }
    else {
        winston_1.default.info(`Database :: mongodb connection @: ${mongo_config_1.mongoDBURI} ✅`);
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map