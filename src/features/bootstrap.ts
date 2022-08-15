import { store, set_bootstrap, set_response } from "@ip-address/features";
import axios from "axios";

function getLocalStorage() {
  let local = localStorage.getItem("ip-address");
  if (local !== null) {
    return JSON.parse(local);
  } else {
    return null;
  }
}

function inputLocalStorage(param: string): void {
  localStorage.setItem("ip-address", JSON.stringify(param));
}

export async function Bootstrap() {
  store.dispatch(set_bootstrap("pending"));

  if (getLocalStorage() == null) {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_5QeDwfNrsg6wZ0XI5vXTtC80A95vc"
      )
      .then((res) => {
        inputLocalStorage(res.data);
        store.dispatch(set_response(res.data));
        store.dispatch(set_bootstrap("fulfilled"));
      })
      .catch(() => {
        store.dispatch(set_bootstrap("rejected"));
      });
  } else {
    store.dispatch(set_response(getLocalStorage()));
    store.dispatch(set_bootstrap("fulfilled"));
  }
}
