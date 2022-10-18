import GetIntegrations from "./scenarios/get-integracoes.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {group , sleep} from 'k6';


//para gerar os relatorios
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }
//opcoes
  export const options = {
    // vus: 10,  //usuarios simultaneos
    // duration: '30s',
    stages: [
        { duration: '30s', target: 20 }, // below normal load
        { duration: '40s', target: 30 },
        { duration: '40s', target: 1 },
    
      ],
  };


export default () => {
    group('Endpoint Get Integrations - hangfire - Integrador.Api', () => {
        GetIntegrations();
    });

    sleep(1);
}