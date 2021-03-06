var test = require('tap').test;
var bigint = require('../');

test('primes', function (t) {
    var ps = { 2 : true, 3 : true, 5 : true, 7 : true };
    for (var i = 0; i <= 10; i++) {
        t.same(bigint(i).probPrime(), ps[i] ? true : false);
    }
    
    var ns = {
        2 : 3,
        3 : 5,
        15313 : 15319,
        222919 : 222931,
        611939 : 611951,
        334214459 : '334214467',
        961748927 : '961748941',
        9987704933 : '9987704953',
    };
    
    Object.keys(ns).forEach(function (n) {
        t.same(
            bigint(n).nextPrime().toString(),
            ns[n].toString()
        );
    });
    
    var uniques = [
        '3', '11', '37', '101', '9091', '9901', '333667', '909091', '99990001',
        '999999000001', '9999999900000001', '909090909090909091',
        '1111111111111111111', '11111111111111111111111',
        '900900900900990990990991',
    ];
    
    var wagstaff = [
        '3', '11', '43', '683', '2731', '43691', '174763', '2796203',
        '715827883', '2932031007403', '768614336404564651',
        '201487636602438195784363', '845100400152152934331135470251',
        '56713727820156410577229101238628035243',
    ];
    
    var big = [
        '4669523849932130508876392554713407521319117239637943224980015676156491',
        '54875133386847519273109693154204970395475080920935355580245252923343305939004903',
        '204005728266090048777253207241416669051476369216501266754813821619984472224780876488344279',
        '2074722246773485207821695222107608587480996474721117292752992589912196684750549658310084416732550077',
        '5628290459057877291809182450381238927697314822133923421169378062922140081498734424133112032854812293',
    ];
    
    [ uniques, wagstaff, big ].forEach(function (xs) {
        xs.forEach(function (x) {
            var p = bigint(x).probPrime();
            t.ok(p === true || p === 'maybe');
        });
    });
    
    t.end();
});
