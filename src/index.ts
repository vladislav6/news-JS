import App from './components/app/app';
import './global.css';
import type { IApp } from './types/interface/interfaces';

const app: IApp = new App();
app.start();
