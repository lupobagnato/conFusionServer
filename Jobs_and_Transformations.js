
  const jobList = [
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
    
    // {
    //   id: 101,
    //   name: 'EMONET Loader',
    //   cmd: './kitchen.sh',
    //   working_dir: '/home/kettle/pdi/data-integration',
    //   rep_name: 'pdi_file_rep',
    //   rep_dir: 'Interni',
    //   rep_obj: 'EMONET Loader',
    //   rep_usr: 'admin',
    //   rep_pwd: 'admin'
    // },
    // {
    //   id: 102,
    //   name: 'Produzione.mdb Loader',
    //   cmd: './kitchen.sh',
    //   working_dir: '/home/kettle/pdi/data-integration',
    //   rep_name: 'pdi_file_rep',
    //   rep_dir: 'Interni',
    //   rep_obj: 'Produzione_mdb_loader',
    //   rep_usr: 'admin',
    //   rep_pwd: 'admin'
    // },

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
      pdi_par: {anno:'202Y',mese:'MM'}
    },
    {
      id: 105,
      name: 'Extract XLS Lavanolo',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Vari/Lavanolo',
      rep_obj: 'Extract XLS Lavanolo',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'202Y',mese:'MM'}
    },

    {
      id: 199,
      name: 'Extract SGP',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'record_SeT/LP/SGP',
      rep_obj: 'Extract_SGP_loop',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {BACK_MONTHS:1,
                ANNO_INIZIO:'202Y', ANNO_FINE:'202Y', MESE_INIZIO:'MM', MESE_FINE:'MM',
                EXPORT_DIR:'/mnt/minollo/record_SeT_LP'}
    },
    {
      id: 106,
      name: 'LP Loader',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'record_SeT/LP',
      rep_obj: 'LP Loader',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {INPUT_PATH:'/mnt/minollo/record_SeT_LP'}
    },
    {
      id: 107,
      name: 'Export SeT',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'record_SeT/export',
      rep_obj: 'Export_SeT_loop',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {BACK_MONTHS:3,
                ANNO_INIZIO:'202Y', ANNO_FINE:'202Y', MESE_INIZIO:'MM', MESE_FINE:'MM',
                DESTINATARIO:'',
                EXPORT_DIR:'/mnt/minollo/output_SeT'}
    },
    {
      id: 108,
      name: 'HSP23F_fast',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS/Fast',
      rep_obj: 'HSP23F_fast',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {path_nsis:'/mnt/minollo/Input/NSIS'}
    },
    {
      id: 109,
      name: 'HSP22b_file',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'HSP22b_file',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', s_MM:'MM', e_MM:'MM',
                nsis_out:'/mnt/minollo/NSIS_out'}
    },
    {
      id: 110,
      name: 'HSP22b_conferma',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'HSP22b_conferma',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', s_MM:'MM', e_MM:'MM'}
    },
    {
      id: 111,
      name: 'HSP24 tutti',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'Esegui_HSP24_tutti',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', s_MM:'MM', e_MM:'MM',
                nsis_out:'/mnt/minollo/NSIS_out'}
    },
    {
      id: 112,
      name: 'HSP24 conferma',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'Conferma_HSP24_tutti',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', s_MM:'MM', e_MM:'MM'}
    },
    {
      id: 113,
      name: 'Crea FileW',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'CUP',
      rep_obj: 'Crea Filew',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {output_dir:'/mnt/minollo', YYYYMM:'000000'}
    },
    {
      id: 114,
      name: 'PL Mensile',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'PL_file',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {BACK_MONTHS:1,
                nsis_out:'/mnt/minollo/NSIS_out'}
    },
    {
      id: 115,
      name: 'Vertica vib_spec_esterni',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Vertica',
      rep_obj: 'load_Vib_Spec_Esterni',
      rep_usr: 'admin',
      rep_pwd: 'admin'
    },
    {
      id: 116,
      name: 'STS21_file',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'STS21_file',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', 
                nsis_out:'/mnt/minollo/NSIS_out'}
    },
    {
      id: 117,
      name: 'STS21_conferma',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'STS21_conferma',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y'}
    },

    {
      id: 118,
      name: 'STS24F_file',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS/Fast',
      rep_obj: 'STS24F_file',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', 
                path_nsis:'/mnt/minollo/Input/NSIS'}
    },
    {
      id: 119,
      name: 'STS24F_conferma',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS/Fast',
      rep_obj: 'STS24F_conferma',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y'}
    },
    {
      id: 120,
      name: 'STS24G_file',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS/Fast',
      rep_obj: 'STS24G_file',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y', 
                path_nsis:'/mnt/minollo/Input/NSIS'}
    },
    {
      id: 121,
      name: 'STS24G_conferma',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS/Fast',
      rep_obj: 'STS24G_conferma',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y'}
    },    
    {
      id: 122,
      name: 'PL Annuale',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'NSIS',
      rep_obj: 'PL_Anno_file',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYY:'202Y',
                nsis_out:'/mnt/minollo/NSIS_out'}
    },

    {
      id: 123,
      name: 'CEDAP',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'CEDAP',
      rep_obj: 'Export Cedap',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {T:'1', YYYY:'202Y',
                cedap_out:'/mnt/minollo/CEDAP_out'}
    },

    {
      id: 124,
      name: 'Export Ex_Ante',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'CUP/Ex_Ante',
      rep_obj: 'Export Ex_Ante',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {P:'2', YYYYMMDD_from:'2021-05-17', YYYYMMDD_to:'2021-05-21'}
    },

    {
      id: 125,
      name: 'int_ETL_Loop',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Interni',
      rep_obj: 'int_ETL_Loop',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {YYYYMM_from:'202201', YYYYMM_to:'202202'}
    },
    
    // Art50
    {
      id: 151,
      name: 'Import RIS',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50',
      rep_obj: 'Import Imago',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {S_DATARIF:'20YYMMDD', E_DATARIF:'20YYMMDD',
                ROOTPATH:'/mnt/minollo'}
    },
    {
      id: 152,
      name: 'Import LIS',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50',
      rep_obj: 'Import Dnlab',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {S_DATARIF:'20YYMMDD', E_DATARIF:'20YYMMDD',
                ROOTPATH:'/mnt/minollo'}
    },
    {
      id: 153,
      name: 'Import Patidok',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50',
      rep_obj: 'Import Patidok',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {S_DATARIF:'20YYMMDD', E_DATARIF:'20YYMMDD',
                ROOTPATH:'/mnt/minollo'}
    },
    {
      id: 154,
      name: 'Import Anat',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50',
      rep_obj: 'Import Anat',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {S_DATARIF:'20YYMMDD', E_DATARIF:'20YYMMDD',
                ROOTPATH:'/mnt/minollo'}
    },
    {
      id: 155,
      name: 'Import Dialisi',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50',
      rep_obj: 'Import Dialisi',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {S_DATARIF:'20YYMMDD', E_DATARIF:'20YYMMDD',
                ROOTPATH:'/mnt/minollo'}
    },
    {
      id: 156,
      name: 'Dati x MEF',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50/MEF',
      rep_obj: 'Dati x MEF',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {ROOTPATH:'/mnt/minollo'}
    },
    {
      id: 157,
      name: 'mef_Export_xml',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50/MEF/XML',
      rep_obj: 'mef_Export_xml',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {ROOTPATH:'/mnt/minollo', XML_NAME:'OUTnn'}
    },
    {
      id: 158,
      name: 'Conferma Invio',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50/MEF',
      rep_obj: 'Conferma Invio',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {PATH_VALIDATI:'/mnt/minollo/RicetteSSNOnline/onLine/fileValidati', 
                PATH_ARCHIVIO:'/mnt/minollo/ArchivioValidati'}
    },

    {
      id: 159,
      name: '2Regione Loop',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'Art50/2Regione',
      rep_obj: '2Regione_loop',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {BACK_MONTHS:'3',
                ANNO_INIZIO:'202y',
                MESE_INIZIO:'mm',
                ANNO_FINE:'202y',
                MESE_FINE:'mm'}
    },
	
    //  Anno_Fine=${ANNO_FINE} .....
    //  Anno_Inizio=${} .....
    //  Back_Months=${BACK_MONTHS} .....
    //  Mese_Fine=${MESE_FINE} .....
    //  Mese_Inizio=${MESE_INIZIO} .....

    
    // Gestione 730
    
    {
      id: 200,
      name: 'Import 730 (tutte le origini)',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'Import 730',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {s_YYYYMMDD:'202ymmdd o 202ymm',
                e_YYYYMMDD:'202ymmdd o 202ymm'}
    },
    {
      id: 201,
      name: 'Import 730 CUPSSN',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'import_cupssn',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {s_YYYYMMDD:'202ymmdd o 202ymm',
                e_YYYYMMDD:'202ymmdd o 202ymm'}
    },
    {
      id: 202,
      name: 'Import 730 CUPEXTRA',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'import_cupextra',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {s_YYYYMMDD:'202ymmdd o 202ymm',
                e_YYYYMMDD:'202ymmdd o 202ymm'}
    },
    {
      id: 203,
      name: 'Import 730 LPAMB',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'import_lpamb',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {s_YYYYMMDD:'202ymmdd o 202ymm',
                e_YYYYMMDD:'202ymmdd o 202ymm'}
    },
		{
      id: 204,
      name: 'Export 730',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'Export 730',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {s_YYYYMMDD:'202ymmdd o 202ymm',
                e_YYYYMMDD:'202ymmdd o 202ymm'}
    },
    {
      id: 205,
      name: 'Invio 730',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'Invio 730',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {ric_path:'/mnt/minollo/730/ricevute'}
    },
    {
      id: 206,
      name: 'Lista Esiti x Data (x 730)',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato/web_services',
      rep_obj: 'Lista Esiti x Data',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {BackDays:'0'}
    },
    {
      id: 207,
      name: 'Get Esiti 730',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'Get Esiti',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {protocollo:'x',
                ric_path:'/mnt/minollo/730/ricevute'}
    },
    {
      id: 208,
      name: 'Conferma 730',
      cmd: './kitchen.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: '730_precompilato',
      rep_obj: 'Conferma invio XML',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {protocollo:'x',
                ric_path:'/mnt/minollo/730/ricevute'}
    },

// esecuzione manuale di procedure già in CrontabUI
{
  id: 301,
  name: 'SDOePAC Loader',
  cmd: './kitchen.sh',
  working_dir: '/home/kettle/pdi/data-integration',
  rep_name: 'pdi_file_rep',
  rep_dir: 'SDOePAC/Loader',
  rep_obj: 'SDOePAC Loader',
  rep_usr: 'admin',
  rep_pwd: 'admin'
},
{
  id: 302,
  name: 'Accessi Day Loader',
  cmd: './kitchen.sh',
  working_dir: '/home/kettle/pdi/data-integration',
  rep_name: 'pdi_file_rep',
  rep_dir: 'Ricoveri Patidok',
  rep_obj: 'Accessi Day Loader',
  rep_usr: 'admin',
  rep_pwd: 'admin'
},    

// procedure di Test
    {
      id: 0,
      name: '----- TEST -----',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2019', chk:'', back:3},
      controls: {anno:{placeholder:'YYYY'}, chk:{type:'checkbox'}}
      // l'idea del placeholder sarebbe la scrittina in grigio visualizzata
      // nel controllo (ad es. per visualizzare il formato), ma senza valorizzare il campo
    },

    {
      id: 1,
      name: 'Test0 (anno=2019 chk back=3)',
      cmd: './pan.sh',
      working_dir: '/home/kettle/pdi/data-integration',
      rep_name: 'pdi_file_rep',
      rep_dir: 'testBI',
      rep_obj: 'test Transf',
      rep_usr: 'admin',
      rep_pwd: 'admin',
      pdi_par: {anno:'2019', chk:'', back:3},
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
    } 
    


  ];
  module.exports = jobList;