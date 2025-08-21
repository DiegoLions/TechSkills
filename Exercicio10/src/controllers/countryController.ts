import { Request, Response } from 'express';
import { RestCountriesApi } from '../api/restCountriesApi';
import { Region } from '../models/country';

const restCountriesApi = RestCountriesApi.getInstance();

export const getCountries = async (req: Request, res: Response) => {
  try {
    const { name, region } = req.query;
    let countries = await restCountriesApi.getAllCountries();

    if (name) {
      const nameSearch = String(name).toLowerCase();
      countries = countries.filter(country => 
        country.name.common.toLowerCase().includes(nameSearch)
      );
    }


    if (region) {
      const regionSearch = String(region).toLowerCase();
      countries = countries.filter(country => 
        country.region.toLowerCase() === regionSearch
      );
    }

    return res.status(200).json(countries);

  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};



const restCountriesApi1 = RestCountriesApi.getInstance();

export const getCountries1 = async (req: Request, res: Response) => {
  try {
    const { name, region } = req.query;
    let countries = await restCountriesApi.getAllCountries();

    if (name) {
      const nameSearch = String(name).toLowerCase();
      countries = countries.filter(country => 
        country.name.common.toLowerCase().includes(nameSearch)
      );
    }

    if (region) {
      const regionSearch = String(region).toLowerCase();
      countries = countries.filter(country => 
        country.region.toLowerCase() === regionSearch
      );
    }

    return res.status(200).json(countries);

  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};


export const getCountryByName = async (req: Request<{ name:string }> , res: Response) => {
  try {
    const { name } = req.params;
    const country = await restCountriesApi.findCountries(name);

    if (!country) {
      return res.status(404).json({ message: 'País não encontrado.' });
    }

    return res.status(200).json(country);

  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

export const getCountryByRegion = async (req: Request<{ region:string }> , res: Response) => {
  try {
    const { region } = req.params;
    const country = await restCountriesApi.findCountriesRegion(region);

    if (!country) {
      return res.status(404).json({ message: 'País não encontrado.' });
    }

    return res.status(200).json(country);

  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};