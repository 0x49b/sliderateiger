/**
 *  Rotator Class for SBB, written by F. Thiévent, u210645 @ 2017
 */


 class Rotator {
    constructor(frame,numUrl,url,intervall,logToConsole,nightshiftStart,nightshiftEnd) {
        this.frame = frame;
        this.numUrl = numUrl;
        this.intervall = intervall * 1000 * 60;
        this.url = url;
        this.logConsole = logToConsole;
        this.nightshiftStart = nightshiftStart;
        this.nightshiftEnd = nightshiftEnd;


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

        this.logToConsole('Act Time: ' + cTime + ' | NightShift Start: ' + this.nightshiftStart + ' | NightShift End:  ' + this.nightshiftEnd + ' | DateObject: ' + dateCheck);

        if (Date.parse('01/01/2011 ' + this.nightshiftEnd) < Date.parse('01/01/2011' + cTime) < Date.parse('01/01/2011 ' + this.nightshiftStart)) {
            shutter.style.display = "none";
            this.logToConsole('Nightshift off');
        } else {
            shutter.style.display = "block";
            shutter.style.backgroundColor = "black";
            this.logToConsole('NightShift on');
        }

        if (Date.parse('01/01/2011 ' + this.nightshiftEnd) >= Date.parse('01/01/2011' + cTime)) {
            this.logToConsole('end >= cTime true')
        } else {
            this.logToConsole('end >= cTime false')
        }

        if (Date.parse('01/01/2011 ' + cTime >= Date.parse('01/01/2011 ' + this.nightshiftStart) )) {
            this.logToConsole('START >= cTime true')
        } else {
            this.logToConsole('START >= cTime false')
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
