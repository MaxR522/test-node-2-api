"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const auth_routes_1 = require("./public/auth.routes");
const user_routes_1 = require("./protected/user.routes");
const jwt_verify_1 = require("../middlewares/authorization/jwt_verify");
const blacklisted_token_verify_1 = require("../middlewares/authorization/blacklisted_token_verify");
const router = Express.Router();
router.use('/auth', auth_routes_1.default);
router.use('/users', jwt_verify_1.default, blacklisted_token_verify_1.default, user_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map