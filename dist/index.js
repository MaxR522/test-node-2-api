"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("./configs");
const app_1 = require("./loaders/app");
const winston_1 = require("./loaders/winston");
app_1.default
    .listen(configs_1.port, () => winston_1.default.info(`Server :: application is running @ 'http://localhost:${configs_1.port}' ! 🎉 `))
    .on('error', (error) => {
    winston_1.default.error(`${error} ❌`);
});
exports.default = app_1.default;
//# sourceMappingURL=index.js.map