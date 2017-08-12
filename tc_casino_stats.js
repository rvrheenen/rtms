// ==UserScript==
// @name         Rick's TC scripts | Casino Stats
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Enhance casino stats
// @author       Rick van Rheenen
// @match        *://www.torn.com/loader.php?sid=view*Stats
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://raw.githubusercontent.com/rvrheenen/tctms/master/tc_casino_stats.js
// @updateUrl    https://raw.githubusercontent.com/rvrheenen/tctms/master/tc_casino_stats.js
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

    // PERSONAL STATISTICS
    if ($('li .stat:contains("Total money gain")').length == 1) {
        var moneyGain = $('li .stat:contains("Total money gain")').next().text().trim();
        var moneyLoss = $('li .stat:contains("Total money loss")').next().text().trim();
        
        var profit = cur2num(moneyGain) - cur2num(moneyLoss);
        
        var profitDisplayColor = "";
        if (profit > 0) {
            profitDisplayColor = "green";
        } else if (profit < 0) {
            profitDisplayColor = "red";
        }

        $('li .stat:contains("Total money loss")').parent().parent().after('\
        <li> \
            <ul class="item"> \
                <li class="stat"> \
                    Total profit:<span class="m-show">:</span> \
                </li><li class="stat-value"><font color="' + profitDisplayColor + '">' + num2cur(profit) +'</font></li> \
                <li class="clear"></li> \
            </ul> \
        </li>');
    }

    // OVERALL STATISTICS
    if ($('li .stat:contains("Total money won")').length == 1) {
        var moneyGain = $('li .stat:contains("Total money won")').next().text().trim();
        var moneyLoss = $('li .stat:contains("Total money lost")').next().text().trim();
        
        var profit = cur2num(moneyGain) - cur2num(moneyLoss);
        
        var profitDisplayColor = "";
        if (profit > 0) {
            profitDisplayColor = "green";
        } else if (profit < 0) {
            profitDisplayColor = "red";
        }

        $('li .stat:contains("Total money lost")').parent().parent().after('\
        <li> \
            <ul class="item"> \
                <li class="stat"> \
                    Total profit:<span class="m-show">:</span> \
                </li><li class="stat-value"><font color="' + profitDisplayColor + '">' + num2cur(profit) +'</font></li> \
                <li class="clear"></li> \
            </ul> \
        </li>');
        
        
        
    }
})();