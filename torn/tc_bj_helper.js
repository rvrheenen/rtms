// ==UserScript==
// @name         Rick's TC scripts | BlackJack Helper
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  Enhance casino stats
// @author       Rick van Rheenen
// @match        *://www.torn.com/loader.php?sid=blackjack
// @downloadURL  https://raw.githubusercontent.com/rvrheenen/rtms/master/torn/tc_bj_helper.js
// @updateUrl    https://raw.githubusercontent.com/rvrheenen/rtms/master/torn/tc_bj_helper.js
// ==/UserScript==


(function() {
    // SETTINGS
        var enableBettingTable = true;
        var startWithTableOpen = true;
    // END SETTINGS    
    
    if (enableBettingTable) {
        if (startWithTableOpen) {
            showBettingTable();
        } else {
            showBettingOpener();
        }
    }


    $("body").on("click", "#betting-table-closer", function(){
        $("#betting-table").remove();
        showBettingOpener();
    });

    $("body").on("click", "#betting-table-opener", function(){
        $("#betting-table-opener").remove();
        showBettingTable();
    });

    function showBettingOpener() {
        $("body").append('\
            <button type="button" id="betting-table-opener" style="\
                position: absolute;\
                visibility: visible;\
                right: 15%;\
                top: 150px;\
                z-index: 200;\
            ">Open betting table</button>');
    }

    function showBettingTable() {
        $("body").append('\
            <table id="betting-table" border="2" bgcolor="#000000" style="\
                position: absolute;\
                visibility: visible;\
                right: 20px;\
                top: 150px;\
                z-index: 200;\
            ">\
          <tbody><tr bgcolor="#000000">\
            <td colspan="11" bgcolor="#333333"><div align="center" style="color: #FFFFFF; font-weight: bold; font-size: 16px;">Dealers Card Showing:</div></td>\
            <td colspan="1" bgcolor="#333333"><button id="betting-table-closer">close</button></td>\
          </tr>\
          <tr>\
            <td rowspan="35" bgcolor="#333333"><div align="center" style="color: #FFFFFF; font-weight: bold; font-size: 16px;">Your Hand: </div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">&nbsp;</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">2</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">3</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">4</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">5</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">6</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">7</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">8</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">9</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">10</span></div></td>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">5</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">6</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">7</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">8</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">9</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">10</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">11</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">12</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">13</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">14</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">15</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#FFFF66"><div align="center"><span style="font-size: 14px;">S/R</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">16</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#FFFF66"><div align="center"><span style="font-size: 14px;">S/R</span></div></td>\
            <td bgcolor="#FFFF66"><div align="center"><span style="font-size: 14px;">S/R</span></div></td>\
            <td bgcolor="#FFFF66"><div align="center"><span style="font-size: 14px;">S/R</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">17</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">18</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">19</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,2</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,3</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,4</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,5</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,6</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,7</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,8</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,9</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">2,2</span></div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">3,3</span></div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">4,4</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">5,5</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#0099FF"><div align="center"><span style="font-size: 14px;">DD</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">6,6</span></div></td>\
            <td bgcolor="#FFFF00"><div align="center" style="font-size: 14px;">S/D</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">7,7</span></div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
            <td bgcolor="#009900"><div align="center"><span style="color: #FFFFFF; font-size: 14px;">H</span></div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">8,8</span></div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">9,9</span></div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">10,10</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,A</span></div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
            <td bgcolor="#0033FF"><div align="center" style="color: #FFFFFF; font-size: 14px;">P</div></td>\
          </tr>\
          <tr>\
            <td bgcolor="#006600"><div align="center"><span style="color: #FFFFFF; font-weight: bold; font-size: 14px;">A,10</span></div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
            <td bgcolor="#FF0000"><div align="center" style="color: #FFFFFF; font-size: 14px;">S</div></td>\
          </tr>\
        </tbody></table>');
    }

    function uCheck() {
        return jQuery.inArray($('#player-stats div.menu-info-row.info-name.left a').text(), ["Recklezz", "Baxtab"]) != -1;
    }

})();