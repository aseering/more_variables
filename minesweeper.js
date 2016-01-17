// WARNING: Reverse engineering probably won't get you very far.

var _0x1fb4x1 = {
    a9483: true,
    a2811: null,
    a9485: null,
    a9699: 0,
    a3829: null,
    a1122: '',
    b9381: '',
    b1124: '',
    b2456: new Array(2),
    c8921: '',
    a9265: ''
},
_0x1fb4x2 = {
    b8375: 30,
    c1948: 450,
    a6666: 450,
    a2435: 100,
    a5782: 'white',
    b8314: '14px Arial',
    c9582: '#dadada',
    c1844: 'white',
    b3111: 5,
    b4818: 'skull.png'
},
_0x1fb4x3 = {};

var board;
var board_2dcontext;

"use strict";
var _0x1fb4x4 = {
    initialize: function() {
        board = $('#board');
        board_2dcontext = board[0]['getContext']('2d');
        board_2dcontext['a5782'] = _0x1fb4x2['a5782'];
        board_2dcontext['font'] = _0x1fb4x2['b8314'];
        _0x1fb4x1['c8921'] = Math['floor'](_0x1fb4x2['c1948'] / _0x1fb4x2['b8375']);
        _0x1fb4x1['a9265'] = Math['floor'](_0x1fb4x2['a6666'] / _0x1fb4x2['b8375']);
        _0x1fb4x1['b8377'] = new Array(_0x1fb4x1['c8921'] * _0x1fb4x1['a9265']);
        _0x1fb4x1['b8377'][0] = new Array(_0x1fb4x1['c8921'] * _0x1fb4x1['a9265']);
        _0x1fb4x1['b8377'][0][0] = 1;
        for (var _0x1fb4x5 = 1; _0x1fb4x5 < _0x1fb4x1['b8377']['length']; _0x1fb4x5++) {
            _0x1fb4x1['b8377'][0][_0x1fb4x5] = 0
        };
        for (var _0x1fb4x6 = 1; _0x1fb4x6 < _0x1fb4x1['b8377']['length']; _0x1fb4x6++) {
            _0x1fb4x1['b8377'][_0x1fb4x6] = new Array(_0x1fb4x1['c8921'] * _0x1fb4x1['a9265']);
            _0x1fb4x1['b8377'][_0x1fb4x6][0] = 1;
            for (var _0x1fb4x5 = 1; _0x1fb4x5 < _0x1fb4x1['b8377']['length']; _0x1fb4x5++) {
                _0x1fb4x1['b8377'][_0x1fb4x6][_0x1fb4x5] = _0x1fb4x1['b8377'][_0x1fb4x6 - 1][_0x1fb4x5] + _0x1fb4x1['b8377'][_0x1fb4x6 - 1][_0x1fb4x5 - 1]
            };
        };
        _0x1fb4x1['a1122'] = new Array(_0x1fb4x1['c8921']);
        _0x1fb4x1['b9381'] = new Array(_0x1fb4x1['c8921']);
        _0x1fb4x3['c9381'] = $('#restartbtn');
        _0x1fb4x3['a7812'] = $('#undobtn');
        _0x1fb4x3['c9381']['on']({
            click: function() {
                _0x1fb4x4['c4419']()
            }
        });
        _0x1fb4x3['a7812']['on']({
            click: function() {
                _0x1fb4xa['a7812']()
            }
        });
        board['on']({
            mouseup: function(_0x1fb4x7) {
                _0x1fb4xa.handle_mouse_up(_0x1fb4x7)
            },
            mousemove: function(arg) {
                _0x1fb4xa['hover'](arg)
            }
        });
        _0x1fb4x1['a5555'] = new Image();
        _0x1fb4x1['a5555']['src'] = _0x1fb4x2['b4818'];
        _0x1fb4x4['c4419']();
    },
    c4419: function() {
        board_2dcontext['strokeStyle'] = _0x1fb4x2['c1844'];
        board_2dcontext['fillStyle'] = _0x1fb4x2['c9582'];
        board_2dcontext['clearRect'](0, 0, _0x1fb4x2['c1948'], _0x1fb4x2['a6666']);
        _0x1fb4x1['a3829'] = Array();
        _0x1fb4x1['a9483'] = false;
        _0x1fb4x1['a9699'] = _0x1fb4x2['a2435'];
        _0x1fb4x1['a1122'] = undefined;
        _0x1fb4x1['b9381'] = Array(_0x1fb4x1['c8921']);
        for (var _0x1fb4x8 = 0; _0x1fb4x8 < _0x1fb4x1['c8921']; _0x1fb4x8++) {
            _0x1fb4x1['b9381'][_0x1fb4x8] = Array(_0x1fb4x1['a9265'])
        };
        _0x1fb4x1['b3817'] = new Array(_0x388fx2['length']);
        for (var _0x1fb4x9 = 0; _0x1fb4x9 < _0x388fx2['length']; _0x1fb4x9++) {
            _0x1fb4x1['b3817'][_0x1fb4x9] = 0
        };
        window['clearInterval'](_0x1fb4x1['b1124']);
        _0x1fb4x21['c1144']();
    }
};
var _0x1fb4xa = {
    handle_mouse_up: function(_0x1fb4x7) {
        if (_0x1fb4x7['which'] === 3) {
            this['a7812']();
            return true;
        };
        if (_0x1fb4x1['a9483']) {
            return false
        };
        var _0x1fb4xb = Math['max'](0, Math['floor']((_0x1fb4x7['pageX'] - board[0]['offsetLeft']) / _0x1fb4x2['b8375'])),
            _0x1fb4xc = Math['max'](0, Math['floor']((_0x1fb4x7['pageY'] - board[0]['offsetTop']) / _0x1fb4x2['b8375']));
        if (_0x1fb4x7['which'] !== 1 || _0x1fb4x1['b9381'][_0x1fb4xb][_0x1fb4xc]) {
            return false
        };
        _0x1fb4x1['a3829']['push']([_0x1fb4xb, _0x1fb4xc]);
        _0x1fb4x1['b9381'][_0x1fb4xb][_0x1fb4xc] = 1;
        for (var _0x1fb4xd = 0; _0x1fb4xd < _0x388fx3[_0x1fb4xc][_0x1fb4xb]['length']; _0x1fb4xd++) {
            _0x1fb4x1['b3817'][_0x388fx3[_0x1fb4xc][_0x1fb4xb][_0x1fb4xd]] += _0x388fx4[_0x1fb4xc][_0x1fb4xb][_0x1fb4xd]
        };
        _0x1fb4x1['a1122'] = this['compute_neighbor_values']();
        if (_0x1fb4x1['a1122']) {
            _0x1fb4x21['b4256']()
        } else {
            board_2dcontext['drawImage'](_0x1fb4x1['a5555'], _0x1fb4xb * _0x1fb4x2['b8375'], _0x1fb4xc * _0x1fb4x2['b8375'], _0x1fb4x2['b8375'], _0x1fb4x2['b8375']);
            _0x1fb4x1['a9483'] = true;
        };
    },
    hover: function(_0x1fb4x7) {
        if (!_0x1fb4x1['a9483']) {
            var _0x1fb4xe = Math['max'](0, Math['floor']((_0x1fb4x7['pageX'] - board[0]['offsetLeft']) / _0x1fb4x2['b8375'])),
                _0x1fb4xf = Math['max'](0, Math['floor']((_0x1fb4x7['pageY'] - board[0]['offsetTop']) / _0x1fb4x2['b8375'])),
                _0x1fb4x10 = (_0x1fb4x1['b9381'][_0x1fb4xe][_0x1fb4xf]) ? 1 : -1;
            var _0x1fb4x11 = _0x1fb4x1['b2456'][0],
                _0x1fb4x12 = _0x1fb4x1['b2456'][1];
            if (typeof _0x1fb4x11 !== 'undefined' && _0x1fb4x1['b9381'][_0x1fb4x11][_0x1fb4x12] !== 1) {
                board_2dcontext['fillStyle'] = _0x1fb4x2['c9582'];
                _0x1fb4x21['c1168'](_0x1fb4x1['b2456'][0], _0x1fb4x1['b2456'][1]);
            };
            if (_0x1fb4x10 < 0 && !_0x1fb4x1['a9483']) {
                board_2dcontext['fillStyle'] = '#aaa';
                _0x1fb4x21['c1168'](_0x1fb4xe, _0x1fb4xf);
                _0x1fb4x1['b2456'][0] = _0x1fb4xe;
                _0x1fb4x1['b2456'][1] = _0x1fb4xf;
            };
        }
    },
    a7812: function() {
        if (_0x1fb4x1['a3829']['length'] === 0) {
            return
        };
        var _0x1fb4x13 = _0x1fb4x1['a3829']['pop']();
        var _0x1fb4xe = _0x1fb4x13[0],
            _0x1fb4xf = _0x1fb4x13[1];
        _0x1fb4x1['b9381'][_0x1fb4xe][_0x1fb4xf] = 0;
        for (var _0x1fb4xd = 0; _0x1fb4xd < _0x388fx3[_0x1fb4xf][_0x1fb4xe]['length']; _0x1fb4xd++) {
            _0x1fb4x1['b3817'][_0x388fx3[_0x1fb4xf][_0x1fb4xe][_0x1fb4xd]] -= _0x388fx4[_0x1fb4xf][_0x1fb4xe][_0x1fb4xd]
        };
        _0x1fb4x1['a1122'] = this['compute_neighbor_values']();
        board_2dcontext['fillStyle'] = _0x1fb4x2['c9582'];
        _0x1fb4x21['c1168'](_0x1fb4xe, _0x1fb4xf);
        if (_0x1fb4x1['a1122']) {
            _0x1fb4x21['b4256']();
            _0x1fb4x1['a9483'] = false;
        };
    },
    compute_neighbor_values: function() {
        var _0x1fb4x14 = Array(_0x1fb4x1['c8921']);
        var _0x1fb4x15 = 0,
            _0x1fb4x16 = 0;
        for (var _0x1fb4x17 = 0; _0x1fb4x17 < _0x1fb4x1['c8921']; _0x1fb4x17++) {
            _0x1fb4x14[_0x1fb4x17] = Array(_0x1fb4x1['a9265']);
            for (var _0x1fb4x18 = 0; _0x1fb4x18 < _0x1fb4x1['a9265']; _0x1fb4x18++) {
                if (_0x1fb4x1['b9381'][_0x1fb4x17][_0x1fb4x18]) {
                    _0x1fb4x14[_0x1fb4x17][_0x1fb4x18] = 1;
                    _0x1fb4x16 = 1;
                    for (var _0x1fb4x19 = 0; _0x1fb4x19 <= 1; _0x1fb4x19++) {
                        var _0x1fb4x1a = [0, 1];
                        var _0x1fb4x5 = _0x388fx5[_0x1fb4x18][_0x1fb4x17];
                        for (var _0x1fb4x1b = 0; _0x1fb4x1b < _0x1fb4x5['length']; _0x1fb4x1b++) {
                            if (_0x1fb4x1b == _0x1fb4x19) {
                                continue
                            };
                            var _0x1fb4x1c = _0x388fx1[_0x388fx2[_0x1fb4x5[_0x1fb4x1b]][_0x1fb4x1['b3817'][_0x1fb4x5[_0x1fb4x1b]]]];
                            var _0x1fb4x1d = new Array(Math['min'](_0x1fb4x1a['length'] + _0x1fb4x1c['length'] - 2, _0x1fb4x1['a9699'] + 2 - _0x1fb4x1a[0] - _0x1fb4x1c[0]));
                            _0x1fb4x1d[0] = _0x1fb4x1a[0] + _0x1fb4x1c[0];
                            for (var _0x1fb4x1e = 1; _0x1fb4x1e < _0x1fb4x1d['length']; _0x1fb4x1e++) {
                                _0x1fb4x1d[_0x1fb4x1e] = 0
                            };
                            for (var _0x1fb4x1e = 1; _0x1fb4x1e < _0x1fb4x1a['length']; _0x1fb4x1e++) {
                                for (var _0x1fb4x1f = 1; _0x1fb4x1f < _0x1fb4x1c['length'] && _0x1fb4x1e + _0x1fb4x1f - 1 < _0x1fb4x1d['length']; _0x1fb4x1f++) {
                                    _0x1fb4x1d[_0x1fb4x1e + _0x1fb4x1f - 1] += _0x1fb4x1a[_0x1fb4x1e] * _0x1fb4x1c[_0x1fb4x1f]
                                }
                            };
                            _0x1fb4x1a = _0x1fb4x1d;
                        };
                        var _0x1fb4x20 = 0;
                        if (_0x1fb4x1a[0] + _0x1fb4x1a['length'] - 1 == _0x1fb4x1['a9699'] + 1) {
                            _0x1fb4x20 = _0x1fb4x1a[_0x1fb4x1a['length'] - 1]
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
        board_2dcontext['fillStyle'] = _0x1fb4x2['c9582'];
        for (var _0x1fb4xd = 0; _0x1fb4xd <= _0x1fb4x1['c8921']; _0x1fb4xd++) {
            for (var _0x1fb4x22 = 0; _0x1fb4x22 <= _0x1fb4x1['a9265']; _0x1fb4x22++) {
                this['c1168'](_0x1fb4xd, _0x1fb4x22)
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
        _0x1fb4x23 = Math['round'](_0x1fb4x23 * 10);
        var _0x1fb4x26 = _0x1fb4x25[_0x1fb4x23 % 10];
        if (_0x1fb4x23 > 0 && _0x1fb4x23 < 6) {
            _0x1fb4x26 -= 10
        };
        var _0x1fb4x27 = Math['floor'](_0x1fb4x23 / 10 + 0.01);
        var _0x1fb4x14 = [];
        for (var _0x1fb4x28 = 0; _0x1fb4x28 < 3; _0x1fb4x28++) {
            _0x1fb4x14[_0x1fb4x28] = Math['round']((_0x1fb4x24[_0x1fb4x27][_0x1fb4x28] * _0x1fb4x26 + _0x1fb4x24[_0x1fb4x27 + 1][_0x1fb4x28] * (100 - _0x1fb4x26)) / 100)
        };
        return _0x1fb4x14;
    },
    b4256: function() {
        for (var _0x1fb4xe = 0; _0x1fb4xe < _0x1fb4x1['c8921']; _0x1fb4xe++) {
            for (var _0x1fb4xf = 0; _0x1fb4xf < _0x1fb4x1['a9265']; _0x1fb4xf++) {
                if (_0x1fb4x1['b9381'][_0x1fb4xe][_0x1fb4xf]) {
                    board_2dcontext['strokeStyle'] = 'white';
                    board_2dcontext['fillStyle'] = 'white';
                    this['c1168'](_0x1fb4xe, _0x1fb4xf);
                    var _0x1fb4x29 = this['b9987'](_0x1fb4x1['a1122'][_0x1fb4xe][_0x1fb4xf]);
                    board_2dcontext['fillStyle'] = 'rgb(' + _0x1fb4x29[0] + ',' + _0x1fb4x29[1] + ',' + _0x1fb4x29[2] + ')';
                    board_2dcontext['fillText'](_0x1fb4x1['a1122'][_0x1fb4xe][_0x1fb4xf]['toFixed'](1), (_0x1fb4xe * _0x1fb4x2['b8375']) + 5, (_0x1fb4xf * _0x1fb4x2['b8375']) + 20);
                }
            }
        }
    },
    c1168: function(_0x1fb4xe, _0x1fb4xf) {
        var _0x1fb4x2a = _0x1fb4x2['b8375'] - 1,
            _0x1fb4x2b = _0x1fb4x2['b8375'] - 1,
            _0x1fb4xe = _0x1fb4xe * _0x1fb4x2['b8375'],
            _0x1fb4xf = _0x1fb4xf * _0x1fb4x2['b8375'];
        board_2dcontext['beginPath']();
        board_2dcontext['moveTo'](_0x1fb4xe + _0x1fb4x2['b3111'], _0x1fb4xf);
        board_2dcontext['lineTo'](_0x1fb4xe + _0x1fb4x2a - _0x1fb4x2['b3111'], _0x1fb4xf);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf, _0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2['b3111']);
        board_2dcontext['lineTo'](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2b - _0x1fb4x2['b3111']);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2b, _0x1fb4xe + _0x1fb4x2a - _0x1fb4x2['b3111'], _0x1fb4xf + _0x1fb4x2b);
        board_2dcontext['lineTo'](_0x1fb4xe + _0x1fb4x2['b3111'], _0x1fb4xf + _0x1fb4x2b);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe, _0x1fb4xf + _0x1fb4x2b, _0x1fb4xe, _0x1fb4xf + _0x1fb4x2b - _0x1fb4x2['b3111']);
        board_2dcontext['lineTo'](_0x1fb4xe, _0x1fb4xf + _0x1fb4x2['b3111']);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe, _0x1fb4xf, _0x1fb4xe + _0x1fb4x2['b3111'], _0x1fb4xf);
        board_2dcontext['closePath']();
        board_2dcontext['stroke']();
        board_2dcontext['fill']();
    }
};


$(function() {
    _0x1fb4x4.initialize();
});
