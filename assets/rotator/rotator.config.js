/**
 *  Konfiguration für den Slider@Eiger
 *  Darstellung von beliebigem Webinhalt auf einem alten BLM Monitor
 */

 /* Begrüssungstext, HTML möglich */
 var loading_nag_title = 'Fachteam IT Kundeninformation';

 /* Ladetext, HTML möglich */
 var loading_nag_text = 'Lade Applikation ...';

 /* Intervall der Frames in Minuten */
 var frame_intervall = 0.75;

 /* Bildwechselzeiten anzeigen im Startbildschirm*/
 var show_refresh_rate = true;

 /*  URL welche auf dem Monitor angezeigt werden sollen  */
 var url = ['https://ci.sbb.ch/view/ki/view/displayserver/view/Monitor_2.x/',
 'http://smi.sbb.ch/nagvis/frontend/nagvis-js/index.php?mod=Map&show=kundeninformation',
 'http://espace.sbb.ch/teams/57/Betrieb/Pikett_KI/landing-page/ext/on_duty.html',
 'https://contentplayer-web-intranet-prod.app.ose.sbb-cloud.net/sbb-intra#!/cpweb-detail/9739',
 './wetter/index.html'];

 /* Nachtabschaltung, schaltet den Bildschirm schwarz */
 var nightshift_start = '11:08';
 var nightshift_end = '11:07';

 /* Log in die JS Konsole einschalten */
 var log_to_console = false;