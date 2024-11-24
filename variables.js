const account_id=1332//cant be changed
let accountemail="shivaanirawat@gmail.com"//used for variables and can be changed
var accountpassword="777"//it changes when redefined so prefer not to use it because of blockscope and functional scope
accountCity="jaipur"

let accountscope//printing this will give unndefined

console.table([account_id,accountemail,accountpassword,accountCity,accountscope])
/*variables.js
│ 1       │ 'shivaanirawat@gmail.com' │
│ 2       │ '777'                     │
│ 3       │ 'jaipur'                  │
│ 4       │ undefined                 │
└─────────┴───────────────────────────┘*/