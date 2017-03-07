import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let jobs = [
  {
    "id": 5092593,
    "reservationTitle": 0,
    "workAddress": "236 Dictum Court",
    "city": "Volta",
    "state": "North Dakota",
    "zip": 50164,
    "firstName": "Lewis",
    "lastName": "Calhoun",
    "phone": "+1 (905) 563-3344",
    "email": "lewiscalhoun@zenthall.com",
    "company": "ENERSAVE",
    "singleRooms": [
      {
        "number": 8,
        "price": 92,
        "days": 19,
        "startingDate": "Tue Jan 10 2017 05:54:49 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 6,
        "price": 87,
        "days": 10,
        "startingDate": "Thu Jan 05 2017 19:38:51 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": true,
    "breakfast": true,
    "kitchenette": true,
    "restaurant": false,
    "pets": false,
    "shuttle": true,
    "gym": false,
    "walkingDistance": false,
    "pool": false,
    "notes": "Sint nostrud nostrud veniam sit tempor sint eu ex aliqua anim occaecat non. Occaecat eu elit voluptate commodo ut velit irure esse non voluptate mollit non. Cillum excepteur mollit eu eu ipsum aute culpa veniam adipisicing sit id duis.\r\n",
    "urgency": "48 hours",
    "billableTo": "Sonja Palmer",
    "projectNumber": 27,
    "projectType": "construction"
  },
  {
    "id": 8028779,
    "reservationTitle": 1,
    "workAddress": "279 Aurelia Court",
    "city": "Rodman",
    "state": "Wyoming",
    "zip": 30453,
    "firstName": "Queen",
    "lastName": "Hebert",
    "phone": "+1 (913) 525-2370",
    "email": "queenhebert@enersave.com",
    "company": "FOSSIEL",
    "singleRooms": [
      {
        "number": 8,
        "price": 85,
        "days": 5,
        "startingDate": "Mon Jan 16 2017 12:01:24 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 8,
        "price": 98,
        "days": 15,
        "startingDate": "Mon Jan 23 2017 00:09:20 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": false,
    "breakfast": false,
    "kitchenette": false,
    "restaurant": false,
    "pets": true,
    "shuttle": false,
    "gym": false,
    "walkingDistance": false,
    "pool": true,
    "notes": "Amet minim velit velit Lorem. Consectetur sunt labore minim occaecat minim id magna mollit Lorem culpa excepteur pariatur. Et amet duis culpa sit occaecat pariatur mollit. Elit velit do qui deserunt cillum anim minim. Tempor culpa sit aute dolor. Consectetur laboris voluptate deserunt magna.\r\n",
    "urgency": "24 hours",
    "billableTo": "Mcdowell Doyle",
    "projectNumber": 109,
    "projectType": "construction"
  },
  {
    "id": 7171735,
    "reservationTitle": 2,
    "workAddress": "270 Gilmore Court",
    "city": "Harmon",
    "state": "Washington",
    "zip": 73453,
    "firstName": "Krystal",
    "lastName": "Stephenson",
    "phone": "+1 (944) 528-3706",
    "email": "krystalstephenson@fossiel.com",
    "company": "BARKARAMA",
    "singleRooms": [
      {
        "number": 8,
        "price": 92,
        "days": 19,
        "startingDate": "Sun Jan 01 2017 04:35:01 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 4,
        "price": 86,
        "days": 5,
        "startingDate": "Wed Jan 18 2017 15:59:32 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": false,
    "breakfast": false,
    "kitchenette": true,
    "restaurant": true,
    "pets": true,
    "shuttle": true,
    "gym": false,
    "walkingDistance": true,
    "pool": true,
    "notes": "Minim laboris aute ut est adipisicing magna id. Sunt id esse proident ex cupidatat qui. Cupidatat anim commodo ut laborum veniam pariatur eu aliqua excepteur eiusmod id ut.\r\n",
    "urgency": "24 hours",
    "billableTo": "Carver Small",
    "projectNumber": 53,
    "projectType": "construction"
  },
  {
    "id": 2629646,
    "reservationTitle": 3,
    "workAddress": "723 Sutton Street",
    "city": "Dana",
    "state": "Montana",
    "zip": 4269,
    "firstName": "Camille",
    "lastName": "Hernandez",
    "phone": "+1 (895) 500-2380",
    "email": "camillehernandez@barkarama.com",
    "company": "AQUACINE",
    "singleRooms": [
      {
        "number": 7,
        "price": 86,
        "days": 9,
        "startingDate": "Mon Jan 16 2017 00:28:37 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 3,
        "price": 109,
        "days": 20,
        "startingDate": "Sun Jan 22 2017 05:17:34 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": true,
    "breakfast": false,
    "kitchenette": false,
    "restaurant": true,
    "pets": false,
    "shuttle": false,
    "gym": true,
    "walkingDistance": false,
    "pool": true,
    "notes": "Excepteur velit elit laborum nulla incididunt dolor nisi. Elit ullamco laborum occaecat exercitation sit fugiat sunt esse. Sunt eu exercitation labore aute. Exercitation ut aliquip consequat consequat velit officia ex qui irure ex enim irure consequat. Cillum veniam anim qui ipsum amet proident mollit ea excepteur non proident enim laboris.\r\n",
    "urgency": "72 hours",
    "billableTo": "Fitzpatrick Hale",
    "projectNumber": 69,
    "projectType": "construction"
  },
  {
    "id": 5096172,
    "reservationTitle": 4,
    "workAddress": "844 Sandford Street",
    "city": "Odessa",
    "state": "Maine",
    "zip": 55179,
    "firstName": "Marcella",
    "lastName": "Young",
    "phone": "+1 (862) 525-3919",
    "email": "marcellayoung@aquacine.com",
    "company": "COMSTAR",
    "singleRooms": [
      {
        "number": 2,
        "price": 83,
        "days": 12,
        "startingDate": "Sat Jan 21 2017 16:57:48 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 8,
        "price": 91,
        "days": 7,
        "startingDate": "Wed Jan 25 2017 09:39:12 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": false,
    "breakfast": true,
    "kitchenette": false,
    "restaurant": true,
    "pets": false,
    "shuttle": false,
    "gym": false,
    "walkingDistance": false,
    "pool": false,
    "notes": "Ut excepteur veniam ea ea. Ut magna sunt minim qui reprehenderit anim sint dolor sunt id aute. Nulla velit qui aliquip quis eu. Proident aliqua minim ullamco sit consectetur sunt nisi anim non eu ex. Nostrud voluptate cupidatat laborum do commodo ex est elit ipsum tempor magna aliquip.\r\n",
    "urgency": "72 hours",
    "billableTo": "Theresa Duncan",
    "projectNumber": 23,
    "projectType": "construction"
  },
  {
    "id": 7916593,
    "reservationTitle": 5,
    "workAddress": "183 Rose Street",
    "city": "Ilchester",
    "state": "Pennsylvania",
    "zip": 12439,
    "firstName": "Geraldine",
    "lastName": "Santos",
    "phone": "+1 (836) 587-3357",
    "email": "geraldinesantos@comstar.com",
    "company": "CYTREX",
    "singleRooms": [
      {
        "number": 4,
        "price": 87,
        "days": 17,
        "startingDate": "Sat Jan 14 2017 10:23:37 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 6,
        "price": 87,
        "days": 18,
        "startingDate": "Thu Jan 12 2017 06:59:02 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": true,
    "breakfast": true,
    "kitchenette": true,
    "restaurant": false,
    "pets": false,
    "shuttle": true,
    "gym": false,
    "walkingDistance": false,
    "pool": true,
    "notes": "Non dolor ex laboris nulla proident fugiat dolor deserunt proident. Commodo reprehenderit deserunt est duis voluptate consectetur Lorem commodo tempor irure eu do ad sint. Aliqua quis aliquip nulla reprehenderit labore nulla ut. Nisi fugiat in laboris adipisicing in sunt mollit et. Proident adipisicing Lorem laboris ipsum ad aute eiusmod quis nulla pariatur. In culpa reprehenderit est commodo est sit eu.\r\n",
    "urgency": "24 hours",
    "billableTo": "Melva Harris",
    "projectNumber": 102,
    "projectType": "construction"
  },
  {
    "id": 8292421,
    "reservationTitle": 6,
    "workAddress": "396 Auburn Place",
    "city": "Rosedale",
    "state": "Minnesota",
    "zip": 43158,
    "firstName": "Harding",
    "lastName": "Lane",
    "phone": "+1 (920) 579-2094",
    "email": "hardinglane@cytrex.com",
    "company": "VISUALIX",
    "singleRooms": [
      {
        "number": 10,
        "price": 108,
        "days": 18,
        "startingDate": "Wed Jan 25 2017 06:10:23 GMT-0800 (PST)"
      }
    ],
    "doubleRooms": [
      {
        "number": 8,
        "price": 103,
        "days": 18,
        "startingDate": "Sat Jan 07 2017 08:15:07 GMT-0800 (PST)"
      }
    ],
    "status": "new",
    "internet": false,
    "breakfast": false,
    "kitchenette": false,
    "restaurant": false,
    "pets": false,
    "shuttle": false,
    "gym": false,
    "walkingDistance": true,
    "pool": false,
    "notes": "Cillum enim officia proident duis ea amet. Officia ex adipisicing culpa do do eiusmod est esse in voluptate. Non ad ut commodo reprehenderit labore magna mollit velit adipisicing sint proident officia in labore. Deserunt eiusmod quis sunt consequat mollit proident. Minim commodo cupidatat laborum dolore dolore esse non esse ad consequat reprehenderit. Ea proident sunt anim elit cillum deserunt voluptate. Amet irure occaecat aute dolore quis enim consectetur officia culpa qui commodo cillum dolor officia.\r\n",
    "urgency": "24 hours",
    "billableTo": "Boone Macias",
    "projectNumber": 53,
    "projectType": "construction"
  }
];
    return {jobs};
  }
}
