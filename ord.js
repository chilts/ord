// ----------------------------------------------------------------------------
//
// ord.js - Easily get the ordinal 'st', 'nd', 'rd' or 'th' of cardinal numbers.
//
// Copyright (c) 2013 Andrew Chilton. All Rights Reserved.
//
// ----------------------------------------------------------------------------

module.exports = function(n) {
    // for non-numbers and weird numbers
    if ( typeof n !== 'number' || isNaN(n) || n === Infinity || n === -Infinity ) {
        return '';
    }

    // for negative numbers, return blank (e.g. 1.23)
    if ( n <= 0 ) {
        return '';
    }

    // for real numbers, return blank (e.g. 1.23)
    if ( n % 1 !== 0 ) {
        return '';
    }

    var rem100 = n % 100;
    if ( rem100 === 11 || rem100 === 12 || rem100 === 13 ) {
        return 'th';
    }

    var rem10 = n % 10;
    if ( rem10 === 1 ) {
        return 'st';
    }
    if ( rem10 === 2 ) {
        return 'nd';
    }
    if ( rem10 === 3 ) {
        return 'rd';
    }

    return 'th';
};

// ----------------------------------------------------------------------------
