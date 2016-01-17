// WARNING: Reverse engineering probably won't get you very far.
var _0x2084 = {4: '#dadada', 5: 'skull.png', 6: 'a2811', 7: '#board', 9: '2d', 10: 'getContext', 11: 'a5782', 12: 'font', 13: 'b8314', 14: 'c8921', 15: 'c1948', 16: 'b8375', 17: 'floor', 18: 'a9265', 19: 'a6666', 20: 'b8377', 21: 'length', 22: 'a1122', 23: 'b9381', 24: 'c9381', 25: '#restartbtn', 27: '#undobtn', 32: 'a5555', 33: 'src', 34: 'b4818', 35: 'strokeStyle', 36: 'c1844', 37: 'fillStyle', 38: 'c9582', 39: 'clearRect', 40: 'a3829', 41: 'a9483', 42: 'a9699', 43: 'a2435', 44: 'b3817', 45: 'b1124', 46: 'clearInterval', 47: 'c1144', 48: 'which', 49: 'pageX', 50: 'offsetLeft', 51: 'max', 52: 'pageY', 53: 'offsetTop', 54: 'push', 55: 'c1849', 56: 'b4256', 57: 'drawImage', 58: 'b2456', 59: 'undefined', 60: 'c1168', 61: '#aaa', 62: 'pop', 63: 'min', 64: 'round', 65: 'b9987', 66: 'rgb(', 67: ',', 68: ')', 69: 'toFixed', 70: 'fillText', 71: 'beginPath', 72: 'b3111', 73: 'moveTo', 74: 'lineTo', 75: 'quadraticCurveTo', 76: 'closePath', 77: 'stroke', 78: 'fill'};

var _0x1fb4x1 = {
    a9483: true,
    a2811: null,
    a9485: null,
    a9699: 0,
    a3829: null,
    a1122: _0x2084[1],
    b9381: _0x2084[1],
    b1124: _0x2084[1],
    b2456: new Array(2),
    c8921: _0x2084[1],
    a9265: _0x2084[1]
},
_0x1fb4x2 = {
    b8375: 30,
    c1948: 450,
    a6666: 450,
    a2435: 100,
    a5782: 'white',
    b8314: '14px Arial',
    c9582: _0x2084[4],
    c1844: 'white',
    b3111: 5,
    b4818: _0x2084[5]
},
_0x1fb4x3 = {};

"use strict";
var _0x1fb4x4 = {
    compute_math_stuff: function() {
        _0x1fb4x1['a2811'] = $(_0x2084[7]);
        _0x1fb4x1['a9485'] = _0x1fb4x1['a2811'][0][_0x2084[10]](_0x2084[9]);
        _0x1fb4x1['a9485'][_0x2084[11]] = _0x1fb4x2[_0x2084[11]];
        _0x1fb4x1['a9485'][_0x2084[12]] = _0x1fb4x2[_0x2084[13]];
        _0x1fb4x1[_0x2084[14]] = Math[_0x2084[17]](_0x1fb4x2[_0x2084[15]] / _0x1fb4x2[_0x2084[16]]);
        _0x1fb4x1[_0x2084[18]] = Math[_0x2084[17]](_0x1fb4x2[_0x2084[19]] / _0x1fb4x2[_0x2084[16]]);
        _0x1fb4x1[_0x2084[20]] = new Array(_0x1fb4x1[_0x2084[14]] * _0x1fb4x1[_0x2084[18]]);
        _0x1fb4x1[_0x2084[20]][0] = new Array(_0x1fb4x1[_0x2084[14]] * _0x1fb4x1[_0x2084[18]]);
        _0x1fb4x1[_0x2084[20]][0][0] = 1;
        for (var _0x1fb4x5 = 1; _0x1fb4x5 < _0x1fb4x1[_0x2084[20]][_0x2084[21]]; _0x1fb4x5++) {
            _0x1fb4x1[_0x2084[20]][0][_0x1fb4x5] = 0
        };
        for (var _0x1fb4x6 = 1; _0x1fb4x6 < _0x1fb4x1[_0x2084[20]][_0x2084[21]]; _0x1fb4x6++) {
            _0x1fb4x1[_0x2084[20]][_0x1fb4x6] = new Array(_0x1fb4x1[_0x2084[14]] * _0x1fb4x1[_0x2084[18]]);
            _0x1fb4x1[_0x2084[20]][_0x1fb4x6][0] = 1;
            for (var _0x1fb4x5 = 1; _0x1fb4x5 < _0x1fb4x1[_0x2084[20]][_0x2084[21]]; _0x1fb4x5++) {
                _0x1fb4x1[_0x2084[20]][_0x1fb4x6][_0x1fb4x5] = _0x1fb4x1[_0x2084[20]][_0x1fb4x6 - 1][_0x1fb4x5] + _0x1fb4x1[_0x2084[20]][_0x1fb4x6 - 1][_0x1fb4x5 - 1]
            };
        };
        _0x1fb4x1[_0x2084[22]] = new Array(_0x1fb4x1[_0x2084[14]]);
        _0x1fb4x1[_0x2084[23]] = new Array(_0x1fb4x1[_0x2084[14]]);
        _0x1fb4x3[_0x2084[24]] = $(_0x2084[25]);
        _0x1fb4x3['a7812'] = $(_0x2084[27]);
        _0x1fb4x3[_0x2084[24]]['on']({
            click: function() {
                _0x1fb4x4['c4419']()
            }
        });
        _0x1fb4x3['a7812']['on']({
            click: function() {
                _0x1fb4xa['a7812']()
            }
        });
        _0x1fb4x1['a2811']['on']({
            mouseup: function(_0x1fb4x7) {
                _0x1fb4xa.handle_mouse_up(_0x1fb4x7)
            },
            mousemove: function(_0x1fb4x7) {
                _0x1fb4xa['hover'](_0x1fb4x7)
            }
        });
        _0x1fb4x1[_0x2084[32]] = new Image();
        _0x1fb4x1[_0x2084[32]][_0x2084[33]] = _0x1fb4x2[_0x2084[34]];
        _0x1fb4x4['c4419']();
    },
    c4419: function() {
        _0x1fb4x1['a9485'][_0x2084[35]] = _0x1fb4x2[_0x2084[36]];
        _0x1fb4x1['a9485'][_0x2084[37]] = _0x1fb4x2[_0x2084[38]];
        _0x1fb4x1['a9485'][_0x2084[39]](0, 0, _0x1fb4x2[_0x2084[15]], _0x1fb4x2[_0x2084[19]]);
        _0x1fb4x1[_0x2084[40]] = Array();
        _0x1fb4x1[_0x2084[41]] = false;
        _0x1fb4x1[_0x2084[42]] = _0x1fb4x2[_0x2084[43]];
        _0x1fb4x1[_0x2084[22]] = undefined;
        _0x1fb4x1[_0x2084[23]] = Array(_0x1fb4x1[_0x2084[14]]);
        for (var _0x1fb4x8 = 0; _0x1fb4x8 < _0x1fb4x1[_0x2084[14]]; _0x1fb4x8++) {
            _0x1fb4x1[_0x2084[23]][_0x1fb4x8] = Array(_0x1fb4x1[_0x2084[18]])
        };
        _0x1fb4x1[_0x2084[44]] = new Array(_0x388fx2[_0x2084[21]]);
        for (var _0x1fb4x9 = 0; _0x1fb4x9 < _0x388fx2[_0x2084[21]]; _0x1fb4x9++) {
            _0x1fb4x1[_0x2084[44]][_0x1fb4x9] = 0
        };
        window[_0x2084[46]](_0x1fb4x1[_0x2084[45]]);
        _0x1fb4x21[_0x2084[47]]();
    }
};
var _0x1fb4xa = {
    handle_mouse_up: function(_0x1fb4x7) {
        if (_0x1fb4x7[_0x2084[48]] === 3) {
            this['a7812']();
            return true;
        };
        if (_0x1fb4x1[_0x2084[41]]) {
            return false
        };
        var _0x1fb4xb = Math[_0x2084[51]](0, Math[_0x2084[17]]((_0x1fb4x7[_0x2084[49]] - _0x1fb4x1['a2811'][0][_0x2084[50]]) / _0x1fb4x2[_0x2084[16]])),
            _0x1fb4xc = Math[_0x2084[51]](0, Math[_0x2084[17]]((_0x1fb4x7[_0x2084[52]] - _0x1fb4x1['a2811'][0][_0x2084[53]]) / _0x1fb4x2[_0x2084[16]]));
        if (_0x1fb4x7[_0x2084[48]] !== 1 || _0x1fb4x1[_0x2084[23]][_0x1fb4xb][_0x1fb4xc]) {
            return false
        };
        _0x1fb4x1[_0x2084[40]][_0x2084[54]]([_0x1fb4xb, _0x1fb4xc]);
        _0x1fb4x1[_0x2084[23]][_0x1fb4xb][_0x1fb4xc] = 1;
        for (var _0x1fb4xd = 0; _0x1fb4xd < _0x388fx3[_0x1fb4xc][_0x1fb4xb][_0x2084[21]]; _0x1fb4xd++) {
            _0x1fb4x1[_0x2084[44]][_0x388fx3[_0x1fb4xc][_0x1fb4xb][_0x1fb4xd]] += _0x388fx4[_0x1fb4xc][_0x1fb4xb][_0x1fb4xd]
        };
        _0x1fb4x1[_0x2084[22]] = this[_0x2084[55]]();
        if (_0x1fb4x1[_0x2084[22]]) {
            _0x1fb4x21[_0x2084[56]]()
        } else {
            _0x1fb4x1['a9485'][_0x2084[57]](_0x1fb4x1[_0x2084[32]], _0x1fb4xb * _0x1fb4x2[_0x2084[16]], _0x1fb4xc * _0x1fb4x2[_0x2084[16]], _0x1fb4x2[_0x2084[16]], _0x1fb4x2[_0x2084[16]]);
            _0x1fb4x1[_0x2084[41]] = true;
        };
    },
    hover: function(_0x1fb4x7) {
        if (!_0x1fb4x1[_0x2084[41]]) {
            var _0x1fb4xe = Math[_0x2084[51]](0, Math[_0x2084[17]]((_0x1fb4x7[_0x2084[49]] - _0x1fb4x1['a2811'][0][_0x2084[50]]) / _0x1fb4x2[_0x2084[16]])),
                _0x1fb4xf = Math[_0x2084[51]](0, Math[_0x2084[17]]((_0x1fb4x7[_0x2084[52]] - _0x1fb4x1['a2811'][0][_0x2084[53]]) / _0x1fb4x2[_0x2084[16]])),
                _0x1fb4x10 = (_0x1fb4x1[_0x2084[23]][_0x1fb4xe][_0x1fb4xf]) ? 1 : -1;
            var _0x1fb4x11 = _0x1fb4x1[_0x2084[58]][0],
                _0x1fb4x12 = _0x1fb4x1[_0x2084[58]][1];
            if (typeof _0x1fb4x11 !== _0x2084[59] && _0x1fb4x1[_0x2084[23]][_0x1fb4x11][_0x1fb4x12] !== 1) {
                _0x1fb4x1['a9485'][_0x2084[37]] = _0x1fb4x2[_0x2084[38]];
                _0x1fb4x21[_0x2084[60]](_0x1fb4x1[_0x2084[58]][0], _0x1fb4x1[_0x2084[58]][1]);
            };
            if (_0x1fb4x10 < 0 && !_0x1fb4x1[_0x2084[41]]) {
                _0x1fb4x1['a9485'][_0x2084[37]] = _0x2084[61];
                _0x1fb4x21[_0x2084[60]](_0x1fb4xe, _0x1fb4xf);
                _0x1fb4x1[_0x2084[58]][0] = _0x1fb4xe;
                _0x1fb4x1[_0x2084[58]][1] = _0x1fb4xf;
            };
        }
    },
    a7812: function() {
        if (_0x1fb4x1[_0x2084[40]][_0x2084[21]] === 0) {
            return
        };
        var _0x1fb4x13 = _0x1fb4x1[_0x2084[40]][_0x2084[62]]();
        var _0x1fb4xe = _0x1fb4x13[0],
            _0x1fb4xf = _0x1fb4x13[1];
        _0x1fb4x1[_0x2084[23]][_0x1fb4xe][_0x1fb4xf] = 0;
        for (var _0x1fb4xd = 0; _0x1fb4xd < _0x388fx3[_0x1fb4xf][_0x1fb4xe][_0x2084[21]]; _0x1fb4xd++) {
            _0x1fb4x1[_0x2084[44]][_0x388fx3[_0x1fb4xf][_0x1fb4xe][_0x1fb4xd]] -= _0x388fx4[_0x1fb4xf][_0x1fb4xe][_0x1fb4xd]
        };
        _0x1fb4x1[_0x2084[22]] = this[_0x2084[55]]();
        _0x1fb4x1['a9485'][_0x2084[37]] = _0x1fb4x2[_0x2084[38]];
        _0x1fb4x21[_0x2084[60]](_0x1fb4xe, _0x1fb4xf);
        if (_0x1fb4x1[_0x2084[22]]) {
            _0x1fb4x21[_0x2084[56]]();
            _0x1fb4x1[_0x2084[41]] = false;
        };
    },
    c1849: function() {
        var _0x1fb4x14 = Array(_0x1fb4x1[_0x2084[14]]);
        var _0x1fb4x15 = 0,
            _0x1fb4x16 = 0;
        for (var _0x1fb4x17 = 0; _0x1fb4x17 < _0x1fb4x1[_0x2084[14]]; _0x1fb4x17++) {
            _0x1fb4x14[_0x1fb4x17] = Array(_0x1fb4x1[_0x2084[18]]);
            for (var _0x1fb4x18 = 0; _0x1fb4x18 < _0x1fb4x1[_0x2084[18]]; _0x1fb4x18++) {
                if (_0x1fb4x1[_0x2084[23]][_0x1fb4x17][_0x1fb4x18]) {
                    _0x1fb4x14[_0x1fb4x17][_0x1fb4x18] = 1;
                    _0x1fb4x16 = 1;
                    for (var _0x1fb4x19 = 0; _0x1fb4x19 <= 1; _0x1fb4x19++) {
                        var _0x1fb4x1a = [0, 1];
                        var _0x1fb4x5 = _0x388fx5[_0x1fb4x18][_0x1fb4x17];
                        for (var _0x1fb4x1b = 0; _0x1fb4x1b < _0x1fb4x5[_0x2084[21]]; _0x1fb4x1b++) {
                            if (_0x1fb4x1b == _0x1fb4x19) {
                                continue
                            };
                            var _0x1fb4x1c = _0x388fx1[_0x388fx2[_0x1fb4x5[_0x1fb4x1b]][_0x1fb4x1[_0x2084[44]][_0x1fb4x5[_0x1fb4x1b]]]];
                            var _0x1fb4x1d = new Array(Math[_0x2084[63]](_0x1fb4x1a[_0x2084[21]] + _0x1fb4x1c[_0x2084[21]] - 2, _0x1fb4x1[_0x2084[42]] + 2 - _0x1fb4x1a[0] - _0x1fb4x1c[0]));
                            _0x1fb4x1d[0] = _0x1fb4x1a[0] + _0x1fb4x1c[0];
                            for (var _0x1fb4x1e = 1; _0x1fb4x1e < _0x1fb4x1d[_0x2084[21]]; _0x1fb4x1e++) {
                                _0x1fb4x1d[_0x1fb4x1e] = 0
                            };
                            for (var _0x1fb4x1e = 1; _0x1fb4x1e < _0x1fb4x1a[_0x2084[21]]; _0x1fb4x1e++) {
                                for (var _0x1fb4x1f = 1; _0x1fb4x1f < _0x1fb4x1c[_0x2084[21]] && _0x1fb4x1e + _0x1fb4x1f - 1 < _0x1fb4x1d[_0x2084[21]]; _0x1fb4x1f++) {
                                    _0x1fb4x1d[_0x1fb4x1e + _0x1fb4x1f - 1] += _0x1fb4x1a[_0x1fb4x1e] * _0x1fb4x1c[_0x1fb4x1f]
                                }
                            };
                            _0x1fb4x1a = _0x1fb4x1d;
                        };
                        var _0x1fb4x20 = 0;
                        if (_0x1fb4x1a[0] + _0x1fb4x1a[_0x2084[21]] - 1 == _0x1fb4x1[_0x2084[42]] + 1) {
                            _0x1fb4x20 = _0x1fb4x1a[_0x1fb4x1a[_0x2084[21]] - 1]
                        };
                        if (_0x1fb4x19) {
                            if (_0x1fb4x20 < 1e-20) {
                                return undefined
                            };
                            _0x1fb4x14[_0x1fb4x17][_0x1fb4x18] /= _0x1fb4x20;
                        } else {
                            _0x1fb4x14[_0x1fb4x17][_0x1fb4x18] *= _0x1fb4x20
                        };
                    };
                    _0x1fb4x15 += _0x1fb4x14[_0x1fb4x17][_0x1fb4x18];
                } else {
                    _0x1fb4x14[_0x1fb4x17][_0x1fb4x18] = 0
                }
            };
        };
        if (_0x1fb4x16 && _0x1fb4x15 < 0.01) {
            return undefined
        };
        return _0x1fb4x14;
    }
};
var _0x1fb4x21 = {
    c1144: function() {
        _0x1fb4x1['a9485'][_0x2084[37]] = _0x1fb4x2[_0x2084[38]];
        for (var _0x1fb4xd = 0; _0x1fb4xd <= _0x1fb4x1[_0x2084[14]]; _0x1fb4xd++) {
            for (var _0x1fb4x22 = 0; _0x1fb4x22 <= _0x1fb4x1[_0x2084[18]]; _0x1fb4x22++) {
                this[_0x2084[60]](_0x1fb4xd, _0x1fb4x22)
            }
        };
    },
    b9987: function(_0x1fb4x23) {
        var _0x1fb4x24 = [
            [255, 255, 255],
            [1, 0, 254],
            [1, 127, 1],
            [254, 0, 0],
            [1, 0, 128],
            [129, 1, 2],
            [0, 128, 129],
            [0, 0, 0],
            [128, 128, 128],
            [128, 128, 128]
        ];
        var _0x1fb4x25 = [100, 97, 92, 84, 70, 50, 30, 16, 8, 3, 0];
        _0x1fb4x23 = Math[_0x2084[64]](_0x1fb4x23 * 10);
        var _0x1fb4x26 = _0x1fb4x25[_0x1fb4x23 % 10];
        if (_0x1fb4x23 > 0 && _0x1fb4x23 < 6) {
            _0x1fb4x26 -= 10
        };
        var _0x1fb4x27 = Math[_0x2084[17]](_0x1fb4x23 / 10 + 0.01);
        var _0x1fb4x14 = [];
        for (var _0x1fb4x28 = 0; _0x1fb4x28 < 3; _0x1fb4x28++) {
            _0x1fb4x14[_0x1fb4x28] = Math[_0x2084[64]]((_0x1fb4x24[_0x1fb4x27][_0x1fb4x28] * _0x1fb4x26 + _0x1fb4x24[_0x1fb4x27 + 1][_0x1fb4x28] * (100 - _0x1fb4x26)) / 100)
        };
        return _0x1fb4x14;
    },
    b4256: function() {
        for (var _0x1fb4xe = 0; _0x1fb4xe < _0x1fb4x1[_0x2084[14]]; _0x1fb4xe++) {
            for (var _0x1fb4xf = 0; _0x1fb4xf < _0x1fb4x1[_0x2084[18]]; _0x1fb4xf++) {
                if (_0x1fb4x1[_0x2084[23]][_0x1fb4xe][_0x1fb4xf]) {
                    _0x1fb4x1['a9485'][_0x2084[35]] = 'white';
                    _0x1fb4x1['a9485'][_0x2084[37]] = 'white';
                    this[_0x2084[60]](_0x1fb4xe, _0x1fb4xf);
                    var _0x1fb4x29 = this[_0x2084[65]](_0x1fb4x1[_0x2084[22]][_0x1fb4xe][_0x1fb4xf]);
                    _0x1fb4x1['a9485'][_0x2084[37]] = _0x2084[66] + _0x1fb4x29[0] + _0x2084[67] + _0x1fb4x29[1] + _0x2084[67] + _0x1fb4x29[2] + _0x2084[68];
                    _0x1fb4x1['a9485'][_0x2084[70]](_0x1fb4x1[_0x2084[22]][_0x1fb4xe][_0x1fb4xf][_0x2084[69]](1), (_0x1fb4xe * _0x1fb4x2[_0x2084[16]]) + 5, (_0x1fb4xf * _0x1fb4x2[_0x2084[16]]) + 20);
                }
            }
        }
    },
    c1168: function(_0x1fb4xe, _0x1fb4xf) {
        var _0x1fb4x2a = _0x1fb4x2[_0x2084[16]] - 1,
            _0x1fb4x2b = _0x1fb4x2[_0x2084[16]] - 1,
            _0x1fb4xe = _0x1fb4xe * _0x1fb4x2[_0x2084[16]],
            _0x1fb4xf = _0x1fb4xf * _0x1fb4x2[_0x2084[16]];
        _0x1fb4x1['a9485'][_0x2084[71]]();
        _0x1fb4x1['a9485'][_0x2084[73]](_0x1fb4xe + _0x1fb4x2[_0x2084[72]], _0x1fb4xf);
        _0x1fb4x1['a9485'][_0x2084[74]](_0x1fb4xe + _0x1fb4x2a - _0x1fb4x2[_0x2084[72]], _0x1fb4xf);
        _0x1fb4x1['a9485'][_0x2084[75]](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf, _0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2[_0x2084[72]]);
        _0x1fb4x1['a9485'][_0x2084[74]](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2b - _0x1fb4x2[_0x2084[72]]);
        _0x1fb4x1['a9485'][_0x2084[75]](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2b, _0x1fb4xe + _0x1fb4x2a - _0x1fb4x2[_0x2084[72]], _0x1fb4xf + _0x1fb4x2b);
        _0x1fb4x1['a9485'][_0x2084[74]](_0x1fb4xe + _0x1fb4x2[_0x2084[72]], _0x1fb4xf + _0x1fb4x2b);
        _0x1fb4x1['a9485'][_0x2084[75]](_0x1fb4xe, _0x1fb4xf + _0x1fb4x2b, _0x1fb4xe, _0x1fb4xf + _0x1fb4x2b - _0x1fb4x2[_0x2084[72]]);
        _0x1fb4x1['a9485'][_0x2084[74]](_0x1fb4xe, _0x1fb4xf + _0x1fb4x2[_0x2084[72]]);
        _0x1fb4x1['a9485'][_0x2084[75]](_0x1fb4xe, _0x1fb4xf, _0x1fb4xe + _0x1fb4x2[_0x2084[72]], _0x1fb4xf);
        _0x1fb4x1['a9485'][_0x2084[76]]();
        _0x1fb4x1['a9485'][_0x2084[77]]();
        _0x1fb4x1['a9485'][_0x2084[78]]();
    }
};


$(function() {
    _0x1fb4x4.compute_math_stuff();
});
