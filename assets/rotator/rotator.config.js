/**
 *  Konfiguration für den Slider@Eiger
 *  Darstellung von beliebigem Webinhalt auf einem alten BLM Monitor
 */

 /* Begrüssungstext, HTML möglich */
 var loading_nag_title = 'Monitoring KIBWE';

 /* Ladetext, HTML möglich */
 var loading_nag_text = 'Lade Applikation ...';

 /* Intervall der Frames in Minuten */
 var frame_intervall = 0.15  ;//0.75;

 /* Bildwechselzeiten anzeigen im Startbildschirm*/
 var show_refresh_rate = true;

 /*  URL welche auf dem Monitor angezeigt werden sollen  */
 var url = [
 'https://ci.sbb.ch/view/ki/view/displayserver/view/Monitor_2.x/',
 'https://smi.sbb.ch/prod/smi/index.htm',
 'http://espace.sbb.ch/teams/57/Betrieb/Pikett_KI/landing-page/ext/on_duty.html',
 'https://aare.guru/#bern'];

 /* Nachtabschaltung, schaltet den Bildschirm schwarz */
 var nightshift_enabled = true; 
 var nightshift_start = '10:53';
 var nightshift_end = '10:54';

 /* Log in die JS Konsole einschalten */
 var log_to_console = false;