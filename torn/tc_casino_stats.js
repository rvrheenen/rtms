// ==UserScript==
// @name         Rick's TC scripts | Casino Stats
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Enhance casino stats
// @author       Rick van Rheenen
// @match        *://www.torn.com/loader.php?sid=view*Stats
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://raw.githubusercontent.com/rvrheenen/tctms/master/torn/tc_casino_stats.js
// @updateUrl    https://raw.githubusercontent.com/rvrheenen/tctms/master/torn/tc_casino_stats.js
// ==/UserScript==

(function() {
    //convert currency to number
    function cur2num(currency) {
        return Number(currency.replace(/[^0-9\.]+/g,""));
    }

    // Convert number to currency
    function num2cur(number) {
        return '$' + number.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

    function showProfits(gainLI, lossLI) {
        if (gainLI.length == 1) {
            var moneyGain = gainLI.next().text().trim();
            var moneyLoss = lossLI.next().text().trim();
            
            var profit = cur2num(moneyGain) - cur2num(moneyLoss);
            
            var profitDisplayColor = "";
            if (profit > 0) {
                profitDisplayColor = "green";
            } else if (profit < 0) {
                profitDisplayColor = "red";
            }

            lossLI.parent().parent().after('\
            <li> \
                <ul class="item"> \
                    <li class="stat"> \
                        Total profit:<span class="m-show">:</span> \
                    </li><li class="stat-value"><font color="' + profitDisplayColor + '">' + num2cur(profit) +'</font></li> \
                    <li class="clear"></li> \
                </ul> \
            </li>'); 
        }
    }

    showProfits( $('li .stat:contains("Total money gain")'), $('li .stat:contains("Total money loss")') ); // Personal Statistics
    showProfits( $('li .stat:contains("Total money won")'), $('li .stat:contains("Total money lost")') ); // Global Statistics

})();