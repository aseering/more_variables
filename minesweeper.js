// WARNING: Reverse engineering probably won't get you very far.

var state = {
    a9483: true,
    a2811: null,
    a9485: null,
    a9699: 0,
    undo_stack: null,
    neighbor_values: '',
    has_been_clicked: '',
    b1124: '',
    b2456: new Array(2),
    width: '',
    height: ''
},
config = {
    box_size: 30,
    x_size: 480,
    y_size: 480,
    a2435: 100,
    a5782: 'white',
    b8314: '14px Arial',
    c9582: '#dadada',
    c1844: 'white',
    b3111: 8,
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
        board_2dcontext['a5782'] = config['a5782'];
        board_2dcontext['font'] = config['b8314'];
        state['width'] = Math['floor'](config['x_size'] / config['box_size']) - 1;
        state['height'] = Math['floor'](config['y_size'] / config['box_size']) - 1;
        state['b8377'] = new Array(state['width'] * state['height']);
        state['b8377'][0] = new Array(state['width'] * state['height']);
        state['b8377'][0][0] = 1;
        for (var _0x1fb4x5 = 1; _0x1fb4x5 < state['b8377']['length']; _0x1fb4x5++) {
            state['b8377'][0][_0x1fb4x5] = 0
        };
        for (var _0x1fb4x6 = 1; _0x1fb4x6 < state['b8377']['length']; _0x1fb4x6++) {
            state['b8377'][_0x1fb4x6] = new Array(state['width'] * state['height']);
            state['b8377'][_0x1fb4x6][0] = 1;
            for (var _0x1fb4x5 = 1; _0x1fb4x5 < state['b8377']['length']; _0x1fb4x5++) {
                state['b8377'][_0x1fb4x6][_0x1fb4x5] = state['b8377'][_0x1fb4x6 - 1][_0x1fb4x5] + state['b8377'][_0x1fb4x6 - 1][_0x1fb4x5 - 1]
            };
        };
        state['neighbor_values'] = new Array(state['width']);
        state['has_been_clicked'] = new Array(state['width']);
        _0x1fb4x3['restartbtn'] = $('#restartbtn');
        _0x1fb4x3['undo'] = $('#undobtn');
        _0x1fb4x3['restartbtn']['on']({
            click: function() {
                _0x1fb4x4['do_restart']()
            }
        });
        _0x1fb4x3['undo']['on']({
            click: function() {
                _0x1fb4xa['undo']()
            }
        });
        board['on']({
            mouseup: function(arg) {
                _0x1fb4xa.handle_mouse_up(arg)
            },
            mousemove: function(arg) {
                //_0x1fb4xa['hover'](arg)
            }
        });
        state['a5555'] = new Image();
        state['a5555']['src'] = config['b4818'];
        _0x1fb4x4['do_restart']();
    },
    do_restart: function() {
        board_2dcontext['strokeStyle'] = config['c1844'];
        board_2dcontext['fillStyle'] = config['c9582'];
        board_2dcontext['clearRect'](0, 0, config['x_size'], config['y_size']);
        state['undo_stack'] = Array();
        state['a9483'] = false;
        state['a9699'] = config['a2435'];
        state['neighbor_values'] = undefined;
        state['has_been_clicked'] = Array(state['width']);
        for (var _0x1fb4x8 = 0; _0x1fb4x8 < state['width']; _0x1fb4x8++) {
            state['has_been_clicked'][_0x1fb4x8] = Array(state['height'])
        };
        state['b3817'] = new Array(data2['length']);
        for (var _0x1fb4x9 = 0; _0x1fb4x9 < data2['length']; _0x1fb4x9++) {
            state['b3817'][_0x1fb4x9] = 0
        };
        window['clearInterval'](state['b1124']);
        _0x1fb4x21['c1144']();
    }
};

var _0x1fb4xa = {
    handle_mouse_up: function(arg) {
        if (arg['which'] === 3) {
            this['undo']();
            return true;
        };
        if (state['a9483']) {
            return false
        };
        var box_x_coord = Math['max'](0, Math['floor']((arg['pageX'] - board[0]['offsetLeft']) / config['box_size'])),
            box_y_coord = Math['max'](0, Math['floor']((arg['pageY'] - board[0]['offsetTop']) / config['box_size']));
        if (arg['which'] !== 1 || state['has_been_clicked'][box_x_coord][box_y_coord]) {
            return false
        };
	this.handle_event_on_coord(box_x_coord, box_y_coord);
    },
    handle_event_on_coord: function(box_x_coord, box_y_coord) {
        state['undo_stack']['push']([box_x_coord, box_y_coord]);
        state['has_been_clicked'][box_x_coord][box_y_coord] = 1;
        for (var _0x1fb4xd = 0; _0x1fb4xd < data3[box_y_coord][box_x_coord]['length']; _0x1fb4xd++) {
            state['b3817'][data3[box_y_coord][box_x_coord][_0x1fb4xd]] += data4[box_y_coord][box_x_coord][_0x1fb4xd]
        };
        state['neighbor_values'] = this['compute_neighbor_values']();
        if (state['neighbor_values']) {
            _0x1fb4x21['render_neighbor_values']()
        } else {
            board_2dcontext['drawImage'](state['a5555'], box_x_coord * config['box_size'], box_y_coord * config['box_size'], config['box_size'], config['box_size']);
            state['a9483'] = true;
        };
    },
    hover: function(arg) {
        if (!state['a9483']) {
            var _0x1fb4xe = Math['max'](0, Math['floor']((arg['pageX'] - board[0]['offsetLeft']) / config['box_size'])),
                _0x1fb4xf = Math['max'](0, Math['floor']((arg['pageY'] - board[0]['offsetTop']) / config['box_size'])),
                _0x1fb4x10 = (state['has_been_clicked'][_0x1fb4xe][_0x1fb4xf]) ? 1 : -1;
            var _0x1fb4x11 = state['b2456'][0],
                _0x1fb4x12 = state['b2456'][1];
            if (typeof _0x1fb4x11 !== 'undefined' && state['has_been_clicked'][_0x1fb4x11][_0x1fb4x12] !== 1) {
                board_2dcontext['fillStyle'] = config['c9582'];
                _0x1fb4x21['c1168'](state['b2456'][0], state['b2456'][1]);
            };
            if (_0x1fb4x10 < 0 && !state['a9483']) {
                board_2dcontext['fillStyle'] = '#aaa';
                _0x1fb4x21['c1168'](_0x1fb4xe, _0x1fb4xf);
                state['b2456'][0] = _0x1fb4xe;
                state['b2456'][1] = _0x1fb4xf;
            };
        }
    },
    undo: function() {
        if (state['undo_stack']['length'] === 0) {
            return
        };
        var _0x1fb4x13 = state['undo_stack']['pop']();
        var _0x1fb4xe = _0x1fb4x13[0],
            _0x1fb4xf = _0x1fb4x13[1];
        state['has_been_clicked'][_0x1fb4xe][_0x1fb4xf] = 0;
        for (var _0x1fb4xd = 0; _0x1fb4xd < data3[_0x1fb4xf][_0x1fb4xe]['length']; _0x1fb4xd++) {
            state['b3817'][data3[_0x1fb4xf][_0x1fb4xe][_0x1fb4xd]] -= data4[_0x1fb4xf][_0x1fb4xe][_0x1fb4xd]
        };
        state['neighbor_values'] = this['compute_neighbor_values']();
        board_2dcontext['fillStyle'] = config['c9582'];
        _0x1fb4x21['c1168'](_0x1fb4xe, _0x1fb4xf);
        if (state['neighbor_values']) {
            _0x1fb4x21['render_neighbor_values']();
            state['a9483'] = false;
        };
    },

    compute_neighbor_values: function() {
        var neighbor_values = Array(state['width']);
        var total_neighbor_values = 0,
            any_squares_tried = 0;
        for (var x = 0; x < state['width']; x++) {
            neighbor_values[x] = Array(state['height']);
            for (var y = 0; y < state['height']; y++) {
                if (true) {
                    neighbor_values[x][y] = 1;
                    any_squares_tried = 1;
                    for (var should_divide = 0; should_divide <= 1; should_divide++) {
                        var _0x1fb4x1a = [0, 1];
                        var _0x1fb4x5 = data5[y][x];
                        for (var _0x1fb4x1b = 0; _0x1fb4x1b < _0x1fb4x5['length']; _0x1fb4x1b++) {
                            if (_0x1fb4x1b == should_divide) {
                                continue
                            };
                            var _0x1fb4x1c = data1[data2[_0x1fb4x5[_0x1fb4x1b]][state['b3817'][_0x1fb4x5[_0x1fb4x1b]]]];
                            var _0x1fb4x1d = new Array(Math['min'](_0x1fb4x1a['length'] + _0x1fb4x1c['length'] - 2, state['a9699'] + 2 - _0x1fb4x1a[0] - _0x1fb4x1c[0]));
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
                        if (_0x1fb4x1a[0] + _0x1fb4x1a['length'] - 1 == state['a9699'] + 1) {
                            _0x1fb4x20 = _0x1fb4x1a[_0x1fb4x1a['length'] - 1]
                        };
                        if (should_divide) {
                            if (_0x1fb4x20 < 1e-20) {
                                return undefined
                            };
                            neighbor_values[x][y] /= _0x1fb4x20;
                        } else {
                            neighbor_values[x][y] *= _0x1fb4x20
                        };
                    };
                    total_neighbor_values += neighbor_values[x][y];
                } else {
                    neighbor_values[x][y] = 0
                }
            };
        };
        if (any_squares_tried && total_neighbor_values < 0.01) {
            return undefined
        };
        console.log(neighbor_values);
        return neighbor_values;
    }

};
var _0x1fb4x21 = {
    c1144: function() {
        board_2dcontext['fillStyle'] = config['c9582'];
        for (var _0x1fb4xd = 0; _0x1fb4xd <= state['width']; _0x1fb4xd++) {
            for (var _0x1fb4x22 = 0; _0x1fb4x22 <= state['height']; _0x1fb4x22++) {
                this['c1168'](_0x1fb4xd, _0x1fb4x22)
            }
        };
        for (var x = 0; x <= state['width']; x++) {
          this['c1168'](x, state['height']);
        };
        for (var y = 0; y < state['height']; y++) {
          this['c1168'](state['width'], y);
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
    render_neighbor_values: function() {
        // hacked to draw on all squares
        for (var _0x1fb4xe = 0; _0x1fb4xe < state['width']; _0x1fb4xe++) {
            for (var _0x1fb4xf = 0; _0x1fb4xf < state['height']; _0x1fb4xf++) {
                if (state['has_been_clicked'][_0x1fb4xe][_0x1fb4xf]) {
                    board_2dcontext['strokeStyle'] = 'white';
                    board_2dcontext['fillStyle'] = 'white';
                    this['c1168'](_0x1fb4xe, _0x1fb4xf);
                } else {
                    board_2dcontext['strokeStyle'] = '#dadada';
                    board_2dcontext['fillStyle'] = '#dadada';
                    this['c1168'](_0x1fb4xe, _0x1fb4xf);
                }
                var _0x1fb4x29 = this['b9987'](state['neighbor_values'][_0x1fb4xe][_0x1fb4xf]);
                board_2dcontext['fillStyle'] = 'rgb(' + _0x1fb4x29[0] + ',' + _0x1fb4x29[1] + ',' + _0x1fb4x29[2] + ')';
                board_2dcontext['fillText'](state['neighbor_values'][_0x1fb4xe][_0x1fb4xf]['toFixed'](1), (_0x1fb4xe * config['box_size']) + 5, (_0x1fb4xf * config['box_size']) + 20);
            }
        }
    },
    c1168: function(x, y) {
        var _0x1fb4x2a = config['box_size'] - 1,
            _0x1fb4x2b = config['box_size'] - 1,
            _0x1fb4xe = x * config['box_size'],
            _0x1fb4xf = y * config['box_size'];
        board_2dcontext['beginPath']();
        board_2dcontext['moveTo'](_0x1fb4xe + config['b3111'], _0x1fb4xf);
        board_2dcontext['lineTo'](_0x1fb4xe + _0x1fb4x2a - config['b3111'], _0x1fb4xf);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf, _0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + config['b3111']);
        board_2dcontext['lineTo'](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2b - config['b3111']);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe + _0x1fb4x2a, _0x1fb4xf + _0x1fb4x2b, _0x1fb4xe + _0x1fb4x2a - config['b3111'], _0x1fb4xf + _0x1fb4x2b);
        board_2dcontext['lineTo'](_0x1fb4xe + config['b3111'], _0x1fb4xf + _0x1fb4x2b);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe, _0x1fb4xf + _0x1fb4x2b, _0x1fb4xe, _0x1fb4xf + _0x1fb4x2b - config['b3111']);
        board_2dcontext['lineTo'](_0x1fb4xe, _0x1fb4xf + config['b3111']);
        board_2dcontext['quadraticCurveTo'](_0x1fb4xe, _0x1fb4xf, _0x1fb4xe + config['b3111'], _0x1fb4xf);
        board_2dcontext['closePath']();
        //board_2dcontext['stroke']();
        var oldFill = board_2dcontext['fillStyle'];
        if ((x < state['width']) && (y < state['height'])) {
            board_2dcontext['fill']();
            return;
        }
        var labelText = '  ';
        if (x == state['width']) {
          labelText = '' + (2 + y);
        } else if (y == state['height']) {
          labelText = String.fromCharCode(66 + x);
        }
        if (x == y)
          labelText = '  ';
        board_2dcontext['fillStyle'] = 'black';
        board_2dcontext['moveTo'](_0x1fb4xe + config['b3111'], _0x1fb4xf);
        board_2dcontext['fillText'](labelText, (_0x1fb4xe) + 5, (_0x1fb4xf) + 20);
        board_2dcontext['fillStyle'] = oldFill;
    }
};

function do_game_click(x, y) {
    _0x1fb4xa.handle_event_on_coord(x,y);
}

$(function() {
    _0x1fb4x4.initialize();
});
