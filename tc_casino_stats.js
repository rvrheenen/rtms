// ==UserScript==
// @name         tc_casino_stats
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Enhance casino stats
// @author       Rick van Rheenen
// @match        *://www.torn.com/loader.php?sid=view*Stats
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://raw.githubusercontent.com/rvrheenen/tctms/master/tc_casino_stats.js
// @updateUrl    https://raw.githubusercontent.com/rvrheenen/tctms/master/tc_casino_stats.js
// ==/UserScript==

(function() {
    'use strict';
    function cur2num(currency) {
        return Number(currency.replace(/[^0-9\.]+/g,""));
    }
    
    function num2cur(number) {
        return '$' + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    
    var moneyGain = $('li .stat:contains("Total money gain")').next().text().trim();
    var moneyLoss = $('li .stat:contains("Total money loss")').next().text().trim();
    
    var profit = num2cur( cur2num(moneyGain) - cur2num(moneyLoss) );
    

    $('li .stat:contains("Total money loss")').parent().parent().after('\
    <li> \
        <ul class="item"> \
            <li class="stat"> \
                Total profit:<span class="m-show">:</span> \
            </li><li class="stat-value">' + profit +'</li> \
            <li class="clear"></li> \
        </ul> \
    </li>');
})();