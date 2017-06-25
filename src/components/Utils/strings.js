let sampleData = {
  request: {
    passenger: 1,
    class: "economy"
  },
  type: "search",
  oneWay: true,
  last: false,
  totalElements: 25,
  totalPages: 3,
  size: 10,
  numberOfElements: 10,
  first: false,
  content: [
    {
      id: "59482cf4b46c534e956d85c8",
      date: 1498348800000,
      departureTime: 1498408800000,
      arrivalTime: 1498413000000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 24582.4,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498435200000,
      flightNumber: "4P - 7126"
    }, {
      id: "59482cf4b46c534e956d85c9",
      date: 1498348800000,
      departureTime: 1498413600000,
      arrivalTime: 1498417800000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 20574.41,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498435200000,
      flightNumber: "4P - 7270"
    }, {
      id: "59482cf4b46c534e956d85ca",
      date: 1498348800000,
      departureTime: 1498415400000,
      arrivalTime: 1498419600000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 20574.41,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498435200000,
      flightNumber: "4P - 7156"
    }, {
      id: "59482cfab46c534e956d86de",
      date: 1498435200000,
      departureTime: 1498459800000,
      arrivalTime: 1498464000000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 20574.41,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7120"
    }, {
      id: "59482cfab46c534e956d86df",
      date: 1498435200000,
      departureTime: 1498465800000,
      arrivalTime: 1498470000000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 24582.4,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7200"
    }, {
      id: "59482cfab46c534e956d86e0",
      date: 1498435200000,
      departureTime: 1498473000000,
      arrivalTime: 1498477200000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 24582.4,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7198"
    }, {
      id: "59482cfab46c534e956d86e1",
      date: 1498435200000,
      departureTime: 1498482600000,
      arrivalTime: 1498486800000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 24582.4,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7140"
    }, {
      id: "59482cfab46c534e956d86e2",
      date: 1498435200000,
      departureTime: 1498488600000,
      arrivalTime: 1498492800000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 24582.4,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7122"
    }, {
      id: "59482cfab46c534e956d86e3",
      date: 1498435200000,
      departureTime: 1498494000000,
      arrivalTime: 1498498200000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 0,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 0,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7144"
    }, {
      id: "59482cfab46c534e956d86e4",
      date: 1498435200000,
      departureTime: 1498500600000,
      arrivalTime: 1498504800000,
      from: "lagos",
      to: "abuja",
      airline: "airpeace",
      prices: {
        price: [
          {
            cost: 24582.4,
            class: "Economy"
          }, {
            cost: 0,
            class: "Premium Economy"
          }, {
            cost: 54027.84,
            class: "Business"
          }
        ]
      },
      expiresAt: 1498521600000,
      flightNumber: "4P - 7156"
    }
  ]
}

let airportCodes = {
  abuja: "abv",
  asaba: "abb",
  benin: "bni",
  enugu: "enu",
  gombe: "gmo",
  ibadan: "iba",
  ilorin: "ilr",
  jos: "jos",
  kaduna: "kad",
  kano: "kan",
  lagos: "los",
  maiduguri: "miu",
  calabar: "cbq",
  owerri: "qow",
  sokoto: "sko",
  portharcourt: "phc",
  uyo: "quo",
  warri: "qrw",
  yola: "yol"
};

let getCity = {
  abv:"abuja",
  abb:"asaba",
  bni:"benin",
  enu:"enugu",
  gmo:"gombe",
  iba:"ibadan",
  ilr:"ilorin",
  jos:"jos",
  kad:"kaduna",
  kan:"kano",
  los:"lagos",
  miu:"maiduguri",
  cbq:"calabar",
  qow:"owerri",
  sko:"sokoto",
  phc:"portharcourt",
  quo:"uyo",
  qrw:"warri",
  yol:"yola"
};

let airlineFullNames = {
  apk: "Air peace",
  ara: "Arik air",
  dan: "Dana Air",
  frn: "First Nation",
  mev: "Medview Airways",
  ola: "Overland Airways",
  aer: "Aero Contractors"
};

let airports = {
  abuja: "Nnamdi Azikiwe Airport",
  asaba: "Asaba Airport",
  dutse: "Dutse Airport",
  enugu: "Akanu Ibiam Airport",
  kano: "Mallam Aminu Kano Airport",
  lagos: "Murtala Muhammed Airport",
  portharcourt: "Port Harcourt Airport",
  sokoto: "Sadiq Abubakar IIIAirport",
  calabar: "Margaret Ekpo Airport",
  uyo: "Akwa Ibom Airport",
  bauchi: "Sir Abubakar Tafawa Balewa Airport",
  jos: "Yakubu Gowon Airport",
  kaduna: "Kaduna Airport",
  maiduguri: "Maiduguri Airport",
  yola: "Yola Airport",
  ibadan: "Ibadan Airport",
  akure: "Akure Airport",
  benin: "Benin Airport",
  birnin: "Kebbi Airport",
  ilorin: "Ilorin Airport",
  jalingo: "Jalingo Airport",
  katsina: "Katsina Airport",
  makurdi: "Makurdi Airport",
  minna: "Minna Airport",
  owerri: "Sam Mbakwe Airport",
  warri: "Warri Airport",
  zaria: "Zaria Airport"
}

module.exports = {
  sampleData,
  airportCodes,
  airlineFullNames,
  airports,
  getCity
}
