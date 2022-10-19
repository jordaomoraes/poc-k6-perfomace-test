import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";

export default function () {

  http.get('https://test.k6.io');
  sleep(1);
}
