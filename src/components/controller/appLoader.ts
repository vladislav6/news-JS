import Loader from './loader';
import type { IApiKey } from '../../types/interfaces';

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env.API_URL;
        const apiKey: IApiKey = { apiKey: process.env.API_KEY };
        if (!apiUrl) return;
        super(apiUrl, apiKey);
    }
}

export default AppLoader;
