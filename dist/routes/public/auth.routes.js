"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const register_1 = require("../../controllers/user_controller/auth/register");
const login_1 = require("../../controllers/user_controller/auth/login");
const logout_1 = require("../../controllers/user_controller/auth/logout");
const field_validators_1 = require("../../middlewares/validators/field_validators");
const check_field_validators_1 = require("../../middlewares/validators/check_field_validators");
const check_user_duplicate_1 = require("../../middlewares/user/check_user_duplicate");
const check_login_validators_1 = require("../../middlewares/validators/check_login_validators");
const jwt_verify_1 = require("../../middlewares/authorization/jwt_verify");
const blacklisted_token_verify_1 = require("../../middlewares/authorization/blacklisted_token_verify");
const router = Express.Router();
router.post('/register', (0, field_validators_1.default)('register'), check_field_validators_1.default, check_user_duplicate_1.default, register_1.default);
router.post('/login', (0, field_validators_1.default)('login'), check_login_validators_1.default, login_1.default);
router.post('/logout', jwt_verify_1.default, blacklisted_token_verify_1.default, logout_1.default);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map