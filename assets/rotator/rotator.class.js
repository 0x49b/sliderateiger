/**
 *  Rotator Class for SBB, written by F. Thiévent, u210645 @ 2017
 */


 class Rotator {
    constructor(frame,numUrl,url,intervall,logToConsole,nightshiftStart,nightshiftEnd, nightshiftEnabled) {
        this.frame = frame;
        this.numUrl = numUrl;
        this.intervall = intervall * 1000 * 60;
        this.url = url;
        this.logConsole = logToConsole;
        this.nightshiftStart = nightshiftStart;
        this.nightshiftEnd = nightshiftEnd;
        this.nightshiftEnabled = nightshiftEnabled;


        this.readConfig();

        this.logToConsole('Rotator Constructed: frame ' + this.frame + ' numUrl ' + this.numUrl + ' frame_intervall ' + (this.intervall / 1000) + 's');
        this.logToConsole('Number of Frames loaded: ' + this.numUrl);
        this.logToConsole('Starting runner ... ');
    }

    runner() {
        setInterval(this.rotation.bind(this),this.intervall);
        this.logToConsole('Runner started, intervall set to ' + (this.intervall / 1000) + 's');
    }

    rotation() {
        this.checkNightShift();

        this.logToConsole('Actual Frame: ' + this.frame);
        if (this.frame < this.numUrl) {
            // aktuelles verstecken
            $('#frame' + (this.frame - 1)).hide();
            //neues anzeigen
            $('#frame' + (this.frame)).show();
            //altes Frame reloaden
            $('#frame' + (this.frame - 1)).attr('src', $('#frame' + (this.frame - 1)).attr('src'));

            this.frame++;
        } else {
            $('#frame' + (this.frame - 1)).hide();
            $('#frame0').show();
            this.frame = 0;
        }
        this.logToConsole('Prepared Frame:  ' + this.frame);

    }

    readConfig() {

        document.getElementById('loading-nag-title').innerHTML = loading_nag_title;
        document.getElementById('loading-nag-text').innerHTML = loading_nag_text;

        if (show_refresh_rate == true) {
            document.getElementById('refresh-rate').innerHTML = 'Bildwechsel alle ' + (this.intervall / 1000) + ' s';
        }
    }

    checkNightShift() {
        var dateCheck = new Date();
        var cHour = this.addZeroToTime(dateCheck.getHours());
        var cMin = this.addZeroToTime(dateCheck.getMinutes());
        var cTime = cHour + ':' + cMin;
        var shutter = document.getElementById('night-shift-shutter');

        var nowTime = new Date(1901,0,1,dateCheck.getHours(),dateCheck.getMinutes());

        var endSplit = this.nightshiftEnd.split(":");
        var endTime = new Date(1901,0, 1, endSplit[0],  endSplit[1]);

        var startSplit = this.nightshiftStart.split(":");
        var startTime = new Date(1901,0, 1, startSplit[0],  startSplit[1]);

        this.logToConsole('NightShift enabled: '+ this.nightshiftEnabled +' Act Time: ' + cTime + ' | NightShift Start: ' + this.nightshiftStart + ' | NightShift End:  ' + this.nightshiftEnd + ' | DateObject: ' + dateCheck);

        if(  startTime <= nowTime && endTime >= nowTime){
            shutter.style.display = "block";
            shutter.style.backgroundColor = "black";
            this.logToConsole('Nightshift on');

        } else {
            shutter.style.display = "none";
            shutter.style.backgroundColor = "none";
            this.logToConsole('NightShift off');
        }
    }

    addZeroToTime(time) {

        if (time < 10) {
            time = "0" + time;
        }

        return time;

    }

    logToConsole(text) {

        if (this.logConsole == true) {
            console.log(text);
        }

    }

}
