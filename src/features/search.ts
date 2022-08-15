import {
  store,
  search,
  set_success_res,
  set_error_res,
  set_query,
} from "@ip-address/features";
import axios from "axios";

export async function Search(query: string) {
  const BASE_URL: string =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_5QeDwfNrsg6wZ0XI5vXTtC80A95vc&";
  let res: string;

  store.dispatch(set_query(query));
  store.dispatch(search());

  if (isValidIp(query)) {
    res = `&ipAddress=${query}`;
  } else {
    res = `&domain=${query}`;
  }

  axios.get(`${BASE_URL}${res}`).then((response) => response.data)
  .then((response) => {
    store.dispatch(set_success_res(response))
  })
  .catch((e) => {
    store.dispatch(set_error_res(e.message))
  })
}

function isValidIp(n: any) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      n
    )
  ) {
    return true;
  }
  return false;
}
