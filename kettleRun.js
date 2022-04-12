const { spawn } = require('child_process');


function kettleRun(req, callback){
    
    var rep_obj;    // diverso per Job e Transf

    const cmd = req.body.cmd;
    const working_dir = req.body.working_dir;

    const rep_name ='-rep=' + req.body.rep_name;
    const rep_dir ='-dir=' + req.body.rep_dir;
    const rep_usr ='-user=' + req.body.rep_usr;
    const rep_pwd ='-pass=' + req.body.rep_pwd;

    console.log('deb-->kettleRun: inizio');

    if (cmd.includes('pan'))
        rep_obj ='-trans=' + req.body.rep_obj;
    else
        rep_obj ='-job=' + req.body.rep_obj;
    
    const lista_parametri = req.body.pdi_par

    const log_level ='-level=Basic';
    // Basic, Detailed, Debug, Rowlevel, Error, Nothing

    let run_log = '';
    let err_log = '';

    let kettle_call = [rep_name, rep_dir, rep_obj, rep_usr, rep_pwd, log_level];

    for (var k in lista_parametri) {
        pp = ' -param='+k+'='+lista_parametri[k]
        // console.log('kettleRun: '+ pp); 
        kettle_call.push(pp);
    }
    console.log('kettle_call');
    console.log(kettle_call);

    

    // ***** CallBack di test, senza eseguire Kettle *****
    // let messaggio = {
    //     log: cmd,
    //     err: err_log
    // };
    // callback(messaggio);
    // ***************************************************


    const cmd_line = spawn(cmd, kettle_call, {cwd:working_dir });    
  
    cmd_line.on('exit', (code) => { 
        console.log(`§§§ runKettle exited with code ${code} §§§`);
        if (code !== 0) {
            err_log += `runKettle exited with code ${code} \n`;
            err_log += run_log.substring(run_log.indexOf('ERROR'),run_log.length);
        }
     
        let messaggio = {
            log: run_log,
            err: err_log
        };
        console.log('deb-->kettleRun: fine, prima della callback');
        callback(messaggio);

    });  

    //
    // 07.10.2020 
    // commentato per avere  meno righe in Console e capire il motivo dele doppie esecuzioni
    // 12.04.2022 scommentato
    cmd_line.stdout.on('data', (data) => {
        console.log('# blocco  Start#\n' + data.toString() + '\n# blocco End #\n') ;
        run_log += data.toString();
    });  
    
    cmd_line.stderr.on('data', (data) => {
        console.log('# ERR #\n' + data.toString() + '\n###### #\n') ;
        err_log += data.toString();
    });  
    
     
    cmd_line.stdout.on('end', (data) => {
        let messaggio = {
            log: run_log,
            err: err_log
        };
        callback(messaggio);
    }); 
    
  
}  

module.exports = kettleRun;

console.log(`modulo : ${module.filename}`);
console.log(module.exports);
// console.log(module.id);
