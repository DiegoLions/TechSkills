"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryByRegion = exports.getCountryByName = exports.getCountries1 = exports.getCountries = void 0;
const restCountriesApi_1 = require("../api/restCountriesApi");
const restCountriesApi = restCountriesApi_1.RestCountriesApi.getInstance();
const getCountries = async (req, res) => {
    try {
        const { name, region } = req.query;
        let countries = await restCountriesApi.getAllCountries();
        if (name) {
            const nameSearch = String(name).toLowerCase();
            countries = countries.filter(country => country.name.common.toLowerCase().includes(nameSearch));
        }
        if (region) {
            const regionSearch = String(region).toLowerCase();
            countries = countries.filter(country => country.region.toLowerCase() === regionSearch);
        }
        return res.status(200).json(countries);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};
exports.getCountries = getCountries;
const restCountriesApi1 = restCountriesApi_1.RestCountriesApi.getInstance();
const getCountries1 = async (req, res) => {
    try {
        const { name, region } = req.query;
        let countries = await restCountriesApi.getAllCountries();
        if (name) {
            const nameSearch = String(name).toLowerCase();
            countries = countries.filter(country => country.name.common.toLowerCase().includes(nameSearch));
        }
        if (region) {
            const regionSearch = String(region).toLowerCase();
            countries = countries.filter(country => country.region.toLowerCase() === regionSearch);
        }
        return res.status(200).json(countries);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};
exports.getCountries1 = getCountries1;
const getCountryByName = async (req, res) => {
    try {
        const { name } = req.params;
        const country = await restCountriesApi.findCountries(name);
        if (!country) {
            return res.status(404).json({ message: 'País não encontrado.' });
        }
        return res.status(200).json(country);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};
exports.getCountryByName = getCountryByName;
const getCountryByRegion = async (req, res) => {
    try {
        const { region } = req.params;
        const country = await restCountriesApi.findCountriesRegion(region);
        if (!country) {
            return res.status(404).json({ message: 'País não encontrado.' });
        }
        return res.status(200).json(country);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};
exports.getCountryByRegion = getCountryByRegion;
//# sourceMappingURL=countryController.js.map