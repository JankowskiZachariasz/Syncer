const fetch = require("isomorphic-fetch");
var Service = require('node-windows').Service;

function register() {





// Create a new service object
var svc = new Service({
  name:'BUFOR_SYNCER',
  description: 'Moduł pobierający dane z PLC.',
  script: 'C:\\Users\\Zacki\\Desktop\\theRightKeystone\\bufor2_keystone5\\node_modules\\@keystonejs\\keystone\\bin\\cli.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();

    
    }
 
    register();

