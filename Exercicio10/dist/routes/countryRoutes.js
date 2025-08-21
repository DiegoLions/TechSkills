"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countryController_1 = require("../controllers/countryController");
const router = (0, express_1.Router)();
router.get('/countries', countryController_1.getCountries);
router.get('/countries/:name', countryController_1.getCountryByName);
router.get('/regions/:region', countryController_1.getCountryByRegion);
exports.default = router;
//# sourceMappingURL=countryRoutes.js.map