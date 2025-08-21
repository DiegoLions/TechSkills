"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCountriesApi = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://restcountries.com/v3.1';
class RestCountriesApi {
    constructor() { }
    static getInstance() {
        if (!RestCountriesApi.instance) {
            RestCountriesApi.instance = new RestCountriesApi();
        }
        return RestCountriesApi.instance;
    }
    async getAllCountries() {
        try {
            const response = await axios_1.default.get(`${BASE_URL}/all?fields=name,flags`);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao buscar países:', error);
            throw new Error('Não foi possível obter a lista de países.');
        }
    }
    async findCountries(name) {
        try {
            const response = await axios_1.default.get(`${BASE_URL}/name/${name}`);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao buscar países:', error);
            throw new Error('Não foi possível obter a lista de países.');
        }
    }
    async findCountriesRegion(region) {
        try {
            const response = await axios_1.default.get(`${BASE_URL}/region/${region}`);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao buscar países:', error);
            throw new Error('Não foi possível obter a lista de países.');
        }
    }
}
exports.RestCountriesApi = RestCountriesApi;
//# sourceMappingURL=restCountriesApi.js.map