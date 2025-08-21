import { ICountry } from '../models/country';
export declare class RestCountriesApi {
    private static instance;
    private constructor();
    static getInstance(): RestCountriesApi;
    getAllCountries(): Promise<ICountry[]>;
    findCountries(name: string): Promise<ICountry[]>;
    findCountriesRegion(region: string): Promise<ICountry[]>;
}
//# sourceMappingURL=restCountriesApi.d.ts.map