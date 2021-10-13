"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const get_one_1 = require("../../controllers/user_controller/get_one");
const get_all_1 = require("../../controllers/user_controller/get_all");
const update_1 = require("../../controllers/user_controller/update");
const update_password_1 = require("../../controllers/user_controller/update_password");
const field_validators_1 = require("../../middlewares/validators/field_validators");
const check_field_validators_1 = require("../../middlewares/validators/check_field_validators");
const router = Express.Router();
router.get('/', get_all_1.default);
router.get('/:id', get_one_1.default);
router.put('/:id', update_1.default);
router.put('/:id/password', (0, field_validators_1.default)('pwd_change'), check_field_validators_1.default, update_password_1.default);
exports.default = router;
//# sourceMappingURL=user.routes.js.map