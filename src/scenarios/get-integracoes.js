import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export let GetCustomerDuration = new Trend('get_customer_duration');
export let GetCustomerFailRate = new Rate('get_customer_fail_rate');
export let GetCustomerSuccessRate = new Rate('get_customer_success_rate');
export let GetCustomerReqs = new Rate('get_customer_reqs');

export default function () {
    let res = http.get('https://test.k6.io')

    GetCustomerDuration.add(res.timings.duration);
    GetCustomerReqs.add(1);
    GetCustomerFailRate.add(res.status == 0 || res.status > 399);
    GetCustomerSuccessRate.add(res.status < 399);

    let durationMsg = 'Maxima duracao da requisição - 1000ms'
    if (!check(res, {
      'duração maxima': (r) => r.timings.duration < 1000,
    })) {
      fail(durationMsg);
    }
    sleep(1);
}


