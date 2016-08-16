var exec = require('child_process').exec;
before(function(done) {

    // cannot get this to work. In future projects I will add a 'bootUp' and 'shutDown' function to aid this.

    // exec('node index.js', function(err, stdout, stderr) {
    //     if(err){
    //         console.log(err);
    //     }
    // });
    this.timeout(10000);
    done();

});

after(function(done){

   done();
});