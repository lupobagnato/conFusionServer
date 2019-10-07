
  const jobList = [
    {
      id: 0,
      name: 'Test0 (anno=2019 chk back=3)',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2019', chk:'', back:3},
      controls: {anno:{placeholder:'YYYY'}, chk:{type:'checkbox'}}
    },
    {
      id: 1,
      name: 'Test1 (2020-01)',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2020',mese:'01'}
    },
    {
      id: 2,
      name: 'dbRep_PDI_7 - test Transf',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'dbRep_PDI_7',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2021',mese:'02', giorno:'03'}
    } ,
    {
      id: 3,
      name: 'dbRep_PDI_7 - test',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'dbRep_PDI_7',
      rep_dir: 'testBI',
      rep_obj: 'test',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    } ,

    {
      id: 4,
      name: 'P4',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Altro',
      rep_obj: 'quattro',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    } ,
    {
      id: 5,
      name: 'P5',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50',
      rep_obj: 'cinque',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    } ,

    {
      id: 10,
      name: 'Proc 10 Param',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {zero:'ZERO', uno:'YYYY',due:'MM', tre:'DD', quattro:4, cinque:5, sei:'sei', sette:7, otto:8, nove:'9'}
    } ,
    // inizio procedure reali
    {
      id: 100,
      name: 'TMA Import',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'CUP/TMA',
      rep_obj: 'TMA_import',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    },
    {
      id: 101,
      name: 'EMONET Loader',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Interni',
      rep_obj: 'EMONET Loader',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    },
    {
      id: 102,
      name: 'Produzione.mdb Loader',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Interni',
      rep_obj: 'Produzione_mdb_loader',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    },

    {
      id: 103,
      name: 'UVMO Loader',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'UVMO',
      rep_obj: 'UVMO Loader',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    },
    {
      id: 104,
      name: 'Extract XLS UVMO',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'UVMO',
      rep_obj: 'Extract XLS UVMO',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'20YY',mese:'MM'}
    }
    

  ];
  module.exports = jobList;