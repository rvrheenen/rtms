// ==UserScript==
// @name         Rick's TC scripts | Market Buyer
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Buy the first item in the market
// @author       Rick van Rheenen
// @match        *://www.torn.com/imarket.php*
// @downloadURL  https://raw.githubusercontent.com/rvrheenen/rtms/master/torn/tc_market_buyer.js
// @updateUrl    https://raw.githubusercontent.com/rvrheenen/rtms/master/torn/tc_market_buyer.js
// ==/UserScript==

(function() {
    function buyFirst(delay = 500, verbose = false) {
        var offset = 0;
        for (var i = 1; i <= 20; i++) {
            if ($('#item-market-main-wrap > div.shop-market-page > div > div.items-list.bottom-round.cont-gray > ul.items > li:nth-child(' + i + ') > ul > li.buy > span').length > 0) {
                offset = i;
                break;
            }
        }
        if (offset == 0) return;
        if (verbose) console.log(offset);
            
        setTimeout(function() {
            $('#item-market-main-wrap > div.shop-market-page > div > div.items-list.bottom-round.cont-gray > ul.items > li:nth-child(' + i + ') > ul > li.buy > span').trigger('click');
            if (verbose) console.log("clicked buy");
            }, delay);
            
        setTimeout(function() {
            $('#item-market-main-wrap > div.shop-market-page > div > div.items-list.bottom-round.cont-gray > ul.items > li.active > div.confirm-buy > span.confirm > a').trigger('click');
            if (verbose) console.log("clicked confirm");
            }, 2 * delay);

        setTimeout(function() { 
            $('#item-market-main-wrap > div.shop-market-page > div > div.items-list.bottom-round.cont-gray > ul.items > li.active > div.success-buy > span.close-icon.c-pointer').trigger('click');
            if (verbose) console.log("clicked close");
            } , 3 * delay);
    }

    function addBuyFirstButton() {
        var button_html ='\
        <span class="btn-wrap">\
            <span class="btn">\
                <button type="button" id="buy-first" class="btn" style="\
                    background-color: transparent;\
                    padding: 0 10px;\
                    cursor: pointer;\
                    text-shadow: 0 1px 0 rgba(255,255,255,.4);\
                    color: #333;\
                    font-size: 14px;\
                    font: inherit;\
                ">Buy first!</button>\
            </span>\
        </span>';
        if ($('#item-market-main-wrap > div.shop-market-page > div > div.market-search div.cont.right > form').length > 0) {
            $('#item-market-main-wrap > div.shop-market-page > div > div.market-search div.cont.right > form').append(button_html);
        }
    }

    addBuyFirstButton();
    if ($('#buy-first').length > 0) {
        $('#buy-first').on('click', function(){
            buyFirst();
        });
    }


    /* BUYING MULTIPLE ISN'T READY YET.
    function buyFirstN(amount = 20, delay = 500, verbose = false) {
        verbose = true;
        for (var i = 0; i < amount; i++) {
            buyFirstNHelper(i, delay);
        }
    }

    function buyFirstNHelper(n, delay) {
        setTimeout(function(){
                buyFirst(delay);
                if (verbose) console.log("bought " + n + "at delay: " + delay * n);
            }, (delay * n));
    }
    */
})();