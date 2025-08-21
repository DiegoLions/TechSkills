import { Request, Response } from 'express';
export declare const getCountries: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getCountries1: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getCountryByName: (req: Request<{
    name: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getCountryByRegion: (req: Request<{
    region: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=countryController.d.ts.map