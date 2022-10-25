import GetIntegrations from "./scenarios/get-integracoes.js";
import PostIntegracao1 from "./scenarios/post_integracao1.js";
import PostIntegracao2 from "./scenarios/post_integracao2.js";
import PostIntegracao3 from "./scenarios/post_integracao3";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { group, sleep } from 'k6';

//para gerar os relatorios
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
// //opcoes
// export const options = {
//   // vus: 10,  //usuarios simultaneos
//   // duration: '30s',
//   stages: [
//     { duration: '5s', target: 2 }
//   ],
// };

export const options = {

  scenarios: {
    post_integracao1: {
      executor: 'shared-iterations',
      startTime: '0s',
      vus: 1,
      iterations: 1,
      maxDuration: '1s',
    },
    // post_integracao2: {
    //   executor: 'shared-iterations',
    //   startTime: '1s',
    //   vus: 1,
    //   iterations: 1,
    //   maxDuration: '1s'
    // },
    // post_integracao3: {
    //   executor: 'shared-iterations',
    //   startTime: '1s',
    //   vus: 1,
    //   iterations: 1,
    //   maxDuration: '1s'
    // },
  },
};

export default () => {

  group('Endpoint Post Hangfire - Condicao Pagamento ', () => {
    PostIntegracao1();
  });

  // group('Endpoint Post Hangfire - Filiais ', () => {
  //   PostIntegracao2();
  // });

  // group('Endpoint Post Hangfire - Empresa ', () => {
  //   PostIntegracao3();
  // });

  sleep(1);
}