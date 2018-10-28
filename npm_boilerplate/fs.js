const fs = require('fs');

fs.copy('/tmp/myfile','tmp/mynwfile')
  .then(()=>{
    console.log('done')
  })
  .cath(err =>{console.error(err);});
