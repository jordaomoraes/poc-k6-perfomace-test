import http from 'k6/http';

export default function () {
  const url = 'http://10.10.3.2:5020/api/job';
  const payload = JSON.stringify({
    assemblyName: "Rech.Integracao.Filiais",
    className: "FiliaisRunner",
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}