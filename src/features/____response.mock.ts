export interface IResponse {
  ip: string;
  location: object;
  as: object;
  isp: string;
}

export const mockResponse: IResponse = {
  ip: "200.106.194.55",
  location: {
    country: "BR",
    region: "São Paulo",
    city: "Carapicuíba",
    lat: -23.52272,
    lng: -46.835,
    postalCode: "",
    timezone: "-03:00",
    geonameId: 3466998,
  },
  as: {
    asn: 271268,
    name: "LACNIC-ASNBLOCK-270749",
    route: "200.106.192.0/22",
    domain: "",
    type: "",
  },
  isp: "Cloudflare, Inc.",
};

//https://geo.ipify.org/api/v2/country,city?apiKey=at_5QeDwfNrsg6wZ0XI5vXTtC80A95vc