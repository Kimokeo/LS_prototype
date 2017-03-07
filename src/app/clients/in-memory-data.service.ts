import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let clients = [
  {
    "id": 398791,
    "companyName": "Biflex",
    "companyType": null,
    "email": "willaleon@biflex.com",
    "phone": "+1 (830) 521-2804",
    "address1": "244 Hawthorne Street",
    "city": "Tedrow",
    "state": "Maryland",
    "zipCode": 5651,
    "address2": "877 Clark Street",
    "contacts": [
      {
        "id": 0,
        "name": "Santana Norton"
      },
      {
        "id": 1,
        "name": "Hunter Crawford"
      },
      {
        "id": 2,
        "name": "Vaughan Simon"
      }
    ]
  },
  {
    "id": 148012,
    "companyName": "Kraggle",
    "companyType": null,
    "email": "vaughansimon@kraggle.com",
    "phone": "+1 (933) 431-2322",
    "address1": "981 Wythe Avenue",
    "city": "Ripley",
    "state": "Pennsylvania",
    "zipCode": 4611,
    "address2": "939 Hendrickson Place",
    "contacts": [
      {
        "id": 0,
        "name": "Barry Salazar"
      },
      {
        "id": 1,
        "name": "Howard Fleming"
      },
      {
        "id": 2,
        "name": "Hatfield Santos"
      }
    ]
  },
  {
    "id": 496935,
    "companyName": "Genmy",
    "companyType": null,
    "email": "hatfieldsantos@genmy.com",
    "phone": "+1 (805) 547-3267",
    "address1": "867 Agate Court",
    "city": "Rodanthe",
    "state": "Louisiana",
    "zipCode": 4503,
    "address2": "676 Ovington Court",
    "contacts": [
      {
        "id": 0,
        "name": "Estella Hays"
      },
      {
        "id": 1,
        "name": "Barrera Le"
      },
      {
        "id": 2,
        "name": "Riley Moss"
      }
    ]
  },
  {
    "id": 787030,
    "companyName": "Idetica",
    "companyType": null,
    "email": "rileymoss@idetica.com",
    "phone": "+1 (983) 492-2188",
    "address1": "981 Victor Road",
    "city": "Sisquoc",
    "state": "Iowa",
    "zipCode": 697,
    "address2": "392 Bergen Avenue",
    "contacts": [
      {
        "id": 0,
        "name": "Pittman Price"
      },
      {
        "id": 1,
        "name": "Margarita Doyle"
      },
      {
        "id": 2,
        "name": "Brenda Patterson"
      }
    ]
  },
  {
    "id": 495782,
    "companyName": "Hyplex",
    "companyType": null,
    "email": "brendapatterson@hyplex.com",
    "phone": "+1 (855) 441-3424",
    "address1": "970 Summit Street",
    "city": "Dorneyville",
    "state": "Kentucky",
    "zipCode": 4114,
    "address2": "184 Whitney Avenue",
    "contacts": [
      {
        "id": 0,
        "name": "Eleanor Frye"
      },
      {
        "id": 1,
        "name": "Vega Harrington"
      },
      {
        "id": 2,
        "name": "Slater Rocha"
      }
    ]
  },
  {
    "id": 180044,
    "companyName": "Daycore",
    "companyType": null,
    "email": "slaterrocha@daycore.com",
    "phone": "+1 (825) 432-3661",
    "address1": "705 Fiske Place",
    "city": "Matthews",
    "state": "Virginia",
    "zipCode": 9045,
    "address2": "616 Rodney Street",
    "contacts": [
      {
        "id": 0,
        "name": "Foreman Vaughn"
      },
      {
        "id": 1,
        "name": "Langley Nguyen"
      },
      {
        "id": 2,
        "name": "Berta Goodwin"
      }
    ]
  },
  {
    "id": 278642,
    "companyName": "Emergent",
    "companyType": null,
    "email": "bertagoodwin@emergent.com",
    "phone": "+1 (942) 520-2711",
    "address1": "639 Commercial Street",
    "city": "Driftwood",
    "state": "Connecticut",
    "zipCode": 9825,
    "address2": "212 Prince Street",
    "contacts": [
      {
        "id": 0,
        "name": "French Gilbert"
      },
      {
        "id": 1,
        "name": "Cleveland Calhoun"
      },
      {
        "id": 2,
        "name": "Janette Stafford"
      }
    ]
  },
  {
    "id": 933299,
    "companyName": "Lingoage",
    "companyType": null,
    "email": "janettestafford@lingoage.com",
    "phone": "+1 (925) 503-3610",
    "address1": "661 Terrace Place",
    "city": "Cresaptown",
    "state": "Washington",
    "zipCode": 5639,
    "address2": "783 Conduit Boulevard",
    "contacts": [
      {
        "id": 0,
        "name": "Best Barlow"
      },
      {
        "id": 1,
        "name": "Lacy Russell"
      },
      {
        "id": 2,
        "name": "Sparks Bowen"
      }
    ]
  },
  {
    "id": 885200,
    "companyName": "Golistic",
    "companyType": null,
    "email": "sparksbowen@golistic.com",
    "phone": "+1 (918) 593-2436",
    "address1": "209 Front Street",
    "city": "Matheny",
    "state": "Maine",
    "zipCode": 4982,
    "address2": "283 Underhill Avenue",
    "contacts": [
      {
        "id": 0,
        "name": "Marlene Sloan"
      },
      {
        "id": 1,
        "name": "Jeanette Carney"
      },
      {
        "id": 2,
        "name": "Hardy Ford"
      }
    ]
  },
  {
    "id": 497906,
    "companyName": "Uni",
    "companyType": null,
    "email": "hardyford@uni.com",
    "phone": "+1 (970) 480-3144",
    "address1": "711 Knapp Street",
    "city": "Kirk",
    "state": "Wyoming",
    "zipCode": 1305,
    "address2": "812 Huron Street",
    "contacts": [
      {
        "id": 0,
        "name": "Rosanne Branch"
      },
      {
        "id": 1,
        "name": "Reilly Orr"
      },
      {
        "id": 2,
        "name": "Brigitte Jefferson"
      }
    ]
  },
  {
    "id": 222141,
    "companyName": "Zilla",
    "companyType": null,
    "email": "brigittejefferson@zilla.com",
    "phone": "+1 (933) 513-3322",
    "address1": "846 Farragut Road",
    "city": "Kohatk",
    "state": "New Mexico",
    "zipCode": 3404,
    "address2": "204 Jefferson Avenue",
    "contacts": [
      {
        "id": 0,
        "name": "Gertrude Villarreal"
      },
      {
        "id": 1,
        "name": "Sharlene Lindsay"
      },
      {
        "id": 2,
        "name": "Ladonna Spence"
      }
    ]
  },
  {
    "id": 646989,
    "companyName": "Endipin",
    "companyType": null,
    "email": "ladonnaspence@endipin.com",
    "phone": "+1 (994) 456-3268",
    "address1": "587 Hamilton Avenue",
    "city": "Blue",
    "state": "South Dakota",
    "zipCode": 7259,
    "address2": "314 Cypress Avenue",
    "contacts": [
      {
        "id": 0,
        "name": "Mable Koch"
      },
      {
        "id": 1,
        "name": "Helga Gentry"
      },
      {
        "id": 2,
        "name": "Fay Morton"
      }
    ]
  },
  {
    "id": 708277,
    "companyName": "Remotion",
    "companyType": null,
    "email": "faymorton@remotion.com",
    "phone": "+1 (846) 583-2348",
    "address1": "700 Voorhies Avenue",
    "city": "Fillmore",
    "state": "North Carolina",
    "zipCode": 8696,
    "address2": "868 Preston Court",
    "contacts": [
      {
        "id": 0,
        "name": "Cantrell Hoffman"
      },
      {
        "id": 1,
        "name": "Betsy Burnett"
      },
      {
        "id": 2,
        "name": "King Watson"
      }
    ]
  },
  {
    "id": 669932,
    "companyName": "Quonata",
    "companyType": null,
    "email": "kingwatson@quonata.com",
    "phone": "+1 (833) 430-2167",
    "address1": "700 Montauk Avenue",
    "city": "Topaz",
    "state": "New Jersey",
    "zipCode": 3197,
    "address2": "940 Classon Avenue",
    "contacts": [
      {
        "id": 0,
        "name": "Weaver Pittman"
      },
      {
        "id": 1,
        "name": "Cabrera Harmon"
      },
      {
        "id": 2,
        "name": "Shepard Goodman"
      }
    ]
  }
];
    return {clients};
  }
}
