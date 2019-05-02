## Slider@Eiger

An Application to Cycle trough different Websites

### Config

´´´ js

 /* Begrüssungstext, HTML möglich */
 var loading_nag_title = 'Monitoring KIBWE';

 /* Ladetext, HTML möglich */
 var loading_nag_text = 'Lade Applikation ...';

 /* Intervall der Frames in Minuten */
 var frame_intervall = 0.15  ;

 /* Bildwechselzeiten anzeigen im Startbildschirm*/
 var show_refresh_rate = true;

 /*  URL welche auf dem Monitor angezeigt werden sollen  */
 var url = [
 'https://ci.sbb.ch/view/ki/view/kib/view/Monitor%20Dockerbuilds/',
 'https://ci.sbb.ch/view/ki/view/kib/view/Monitor-Develop-Continuous/',
 'https://ci.sbb.ch/view/ki/view/kib/view/Monitor-Master/',
 'https://ci.sbb.ch/view/ki/view/kib/view/Monitor-Nightly/',
 'https://smi.sbb.ch/prod/smi/index.htm',
 'https://aare.guru/#bern'];

 /* Nachtabschaltung, schaltet den Bildschirm schwarz */
 var nightshift_enabled = true; 
 var nightshift_start = '10:53';
 var nightshift_end = '10:54';

 /* Log in die JS Konsole einschalten */
 var log_to_console = false;
´´´

