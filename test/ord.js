// ----------------------------------------------------------------------------

// npm
var test = require('tape');

// local
var ord = require('../ord.js');

// ----------------------------------------------------------------------------

test('zoneInfo.js: zoneInfo() using a zoneId', function(t) {
    // simple numbers
    t.equal(ord(0), '',   'Zero is empty');
    t.equal(ord(1), 'st', 'First');
    t.equal(ord(2), 'nd', 'Second');
    t.equal(ord(3), 'rd', 'Third');
    t.equal(ord(4), 'th', 'Fourth');

    t.equal(ord(10), 'th', 'Tenth');
    t.equal(ord(11), 'th', 'Eleventh');
    t.equal(ord(12), 'th', 'Twelfth');
    t.equal(ord(13), 'th', 'Thirteenth');
    t.equal(ord(14), 'th', 'Fourtheenth');

    t.equal(ord(20), 'th', 'Twentieth');
    t.equal(ord(21), 'st', 'Twenty First');
    t.equal(ord(22), 'nd', 'Twenty Second');
    t.equal(ord(23), 'rd', 'Twenty Third');
    t.equal(ord(24), 'th', 'Twenty Fourth');

    t.equal(ord(100), 'th', 'One Hundreth');
    t.equal(ord(101), 'st', 'One Hundred and First');
    t.equal(ord(102), 'nd', 'One Hundred and Second');
    t.equal(ord(103), 'rd', 'One Hundred and Third');
    t.equal(ord(104), 'th', 'One Hundred and Fourth');

    t.equal(ord(110), 'th', 'One Hundred and Tenth');
    t.equal(ord(111), 'th', 'One Hundred and Eleventh');
    t.equal(ord(112), 'th', 'One Hundred and Twelfth');
    t.equal(ord(113), 'th', 'One Hundred and Thirteenth');
    t.equal(ord(114), 'th', 'One Hundred and Fourtheenth');

    t.equal(ord(120), 'th', 'One Hundred and Twentieth');
    t.equal(ord(121), 'st', 'One Hundred and Twenty First');
    t.equal(ord(122), 'nd', 'One Hundred and Twenty Second');
    t.equal(ord(123), 'rd', 'One Hundred and Twenty Third');
    t.equal(ord(124), 'th', 'One Hundred and Twenty Fourth');

    // test negative numbers
    t.equal(ord(-1), '', 'Negative numbers are blank');

    // weird numbers
    t.equal(ord(NaN), '', 'NaN is blank');
    t.equal(ord(-NaN), '', '-NaN is blank');
    t.equal(ord(Infinity), '', 'Infinity is blank');
    t.equal(ord(-Infinity), '', '-Infinity is blank');

    // other values
    t.equal(ord(''), '', 'String is blank');
    t.equal(ord(function(){}), '', 'Function is blank');
    t.equal(ord(new Date()), '', 'Date is blank');
    t.equal(ord(1.23), '', '');
    t.equal(ord(/^/), '', 'Regex is blank');

    t.end();
});

// ----------------------------------------------------------------------------
