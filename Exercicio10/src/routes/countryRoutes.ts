import { Router } from 'express';
import { getCountries, getCountryByName, getCountryByRegion } from '../controllers/countryController';

const router = Router();


router.get('/countries', getCountries);

router.get('/countries/:name', getCountryByName);

router.get('/regions/:region', getCountryByRegion)

export default router;