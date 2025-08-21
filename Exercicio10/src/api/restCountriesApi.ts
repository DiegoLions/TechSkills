import axios from 'axios';
import { ICountry } from '../models/country';

const BASE_URL = 'https://restcountries.com/v3.1';

export class RestCountriesApi {
  private static instance: RestCountriesApi;

  private constructor() {}

  public static getInstance(): RestCountriesApi {
    if (!RestCountriesApi.instance) {
      RestCountriesApi.instance = new RestCountriesApi();
    }
    return RestCountriesApi.instance;
  }

  public async getAllCountries(): Promise<ICountry[]> {
    try {
      const response = await axios.get<ICountry[]>(`${BASE_URL}/all?fields=name,flags`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar países:', error);
      throw new Error('Não foi possível obter a lista de países.');
    }
  }

  public async findCountries(name:string): Promise<ICountry[]> {
    try {
      const response = await axios.get<ICountry[]>(`${BASE_URL}/name/${name}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar países:', error);
      throw new Error('Não foi possível obter a lista de países.');
    }
  }

  public async findCountriesRegion(region:string): Promise<ICountry[]> {
    try {
      const response = await axios.get<ICountry[]>(`${BASE_URL}/region/${region}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar países:', error);
      throw new Error('Não foi possível obter a lista de países.');
    }
  }
  
}

