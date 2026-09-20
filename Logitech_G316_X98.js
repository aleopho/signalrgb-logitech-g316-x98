export function Name() {
    return "Logitech G316 X98";
}

export function VendorId() {
    return 0x046D;
}

export function ProductId() {
    return 0xC36B;
}

export function Publisher() {
    return "Community";
}

export function DeviceType() {
    return "keyboard";
}

export function Type() {
    return "hid";
}

export function Size() {
    return [30, 8];
}

var leds = [
    ["A",  3, 4, 0x01], ["B",  9, 5, 0x02], ["C",  6, 5, 0x03], ["D",  6, 4, 0x04],
    ["E",  6, 3, 0x05], ["F",  7, 4, 0x06], ["G",  8, 4, 0x07], ["H", 10, 4, 0x08],
    ["I", 13, 3, 0x09], ["J", 11, 4, 0x0A], ["K", 13, 4, 0x0B], ["L", 14, 4, 0x0C],
    ["M", 12, 5, 0x0D], ["N", 10, 5, 0x0E], ["O", 14, 3, 0x0F], ["P", 16, 3, 0x10],
    ["Q",  3, 3, 0x11], ["R",  7, 3, 0x12], ["S",  4, 4, 0x13], ["T",  9, 3, 0x14],
    ["U", 12, 3, 0x15], ["V",  8, 5, 0x16], ["W",  4, 3, 0x17], ["X",  4, 5, 0x18],
    ["Z", 10, 3, 0x19], ["Y",  3, 5, 0x1A],
    ["1",  2, 2, 0x1B], ["2",  4, 2, 0x1C], ["3",  5, 2, 0x1D], ["4",  6, 2, 0x1E],
    ["5",  8, 2, 0x1F], ["6",  9, 2, 0x20], ["7", 11, 2, 0x21], ["8", 12, 2, 0x22],
    ["9", 14, 2, 0x23], ["0", 15, 2, 0x24], ["Enter", 20, 4, 0x25],
    ["ESC",        0, 1, 0x26], ["Backspace", 20, 2, 0x27], ["Tab",        0, 3, 0x28],
    ["Space",     11, 6, 0x29], ["ß",         17, 2, 0x2A], ["´",         18, 2, 0x2B],
    ["Ü",         17, 3, 0x2C], ["+",         19, 3, 0x2D], ["<",          1, 5, 0x2E],
    ["Ö",         16, 4, 0x30], ["Ä",         17, 4, 0x31], ["^",          0, 2, 0x32],
    [",",         13, 5, 0x33], [".",         14, 5, 0x34], ["-",         16, 5, 0x35],
    ["Caps Lock",  0, 4, 0x36],
    ["F1",   2, 1, 0x37], ["F2",   4, 1, 0x38], ["F3",   5, 1, 0x39], ["F4",   6, 1, 0x3A],
    ["F5",   8, 1, 0x3B], ["F6",  10, 1, 0x3C], ["F7",  11, 1, 0x3D], ["F8",  12, 1, 0x3E],
    ["F9",  14, 1, 0x3F], ["F10", 16, 1, 0x40], ["F11", 17, 1, 0x41], ["F12", 19, 1, 0x42],
    ["Entf", 21, 1, 0x49],
    ["Arrow Left",  20, 7, 0x4D], ["Arrow Down",  21, 7, 0x4E],
    ["Arrow Right", 22, 7, 0x4C], ["Arrow Up",    21, 6, 0x4F],
    ["Num Lock",  24, 2, 0x50], ["Num /",     25, 2, 0x51], ["Num *",     27, 2, 0x52],
    ["Num -",     29, 2, 0x53], ["Num +",     29, 3, 0x54], ["Num Enter", 29, 5, 0x55],
    ["Num 1",     24, 5, 0x56], ["Num 2",     26, 5, 0x57], ["Num 3",     27, 5, 0x58],
    ["Num 4",     24, 4, 0x59], ["Num 5",     26, 4, 0x5A], ["Num 6",     27, 4, 0x5B],
    ["Num 7",     24, 3, 0x5C], ["Num 8",     26, 3, 0x5D], ["Num 9",     27, 3, 0x5E],
    ["Num 0",     25, 6, 0x5F], ["Num ,",     27, 6, 0x60],
    ["#", 19, 4, 0x65], ["Strg L",   0, 6, 0x68], ["Shift L",  0, 5, 0x69],
    ["Alt L",    6, 6, 0x6A], ["Win L",    3, 6, 0x6B], ["Strg R",  19, 6, 0x6C],
    ["Shift R", 19, 5, 0x6D], ["AltGr",   17, 6, 0x6E], ["FN",      18, 6, 0x6F],
    ["Strip 01",  0, 0, 0xA0], ["Strip 02",  1, 0, 0xA1], ["Strip 03",  2, 0, 0xA2],
    ["Strip 04",  3, 0, 0xA3], ["Strip 05",  4, 0, 0xA4], ["Strip 06",  5, 0, 0xA5],
    ["Strip 07",  6, 0, 0xA6], ["Strip 08",  7, 0, 0xA7], ["Strip 09",  8, 0, 0xA8],
    ["Strip 10",  9, 0, 0xA9], ["Strip 11", 10, 0, 0xAA], ["Strip 12", 11, 0, 0xAB],
    ["Strip 13", 12, 0, 0xAC], ["Strip 14", 13, 0, 0xAD], ["Strip 15", 14, 0, 0xAE],
    ["Strip 16", 15, 0, 0xAF], ["Strip 17", 16, 0, 0xB0], ["Strip 18", 17, 0, 0xB1],
    ["Strip 19", 18, 0, 0xB2], ["Strip 20", 19, 0, 0xB3], ["Strip 21", 20, 0, 0xD4],
    ["Strip 22", 21, 0, 0xD5], ["Strip 23", 22, 0, 0xD6], ["Strip 24", 23, 0, 0xD7],
    ["Strip 25", 24, 0, 0xD8], ["Strip 26", 25, 0, 0xD9], ["Strip 27", 26, 0, 0xDA],
    ["Strip 28", 27, 0, 0xDB], ["Strip 29", 28, 0, 0xDC], ["Strip 30", 29, 0, 0xDD]
];

var vLedNames = [];
var vLedPositions = [];

for (var i = 0; i < leds.length; i++) {
    vLedNames.push(leds[i][0]);
    vLedPositions.push([leds[i][1], leds[i][2]]);
}

export function LedNames() {
    return vLedNames;
}

export function LedPositions() {
    return vLedPositions;
}

export function Validate(endpoint) {
    return endpoint.interface === 2 &&
           endpoint.usage_page === 0xff00 &&
           endpoint.usage === 0x0002;
}

function SendLong(packet) {
    device.write(packet, 20);
}

function SendThree(a, b, c) {
    var id1 = a ? a.id : 0;
    var r1  = a ? a.r  : 0;
    var g1  = a ? a.g  : 0;
    var b1  = a ? a.b  : 0;

    var id2 = b ? b.id : 0;
    var r2  = b ? b.r  : 0;
    var g2  = b ? b.g  : 0;
    var b2  = b ? b.b  : 0;

    var id3 = c ? c.id : 0;
    var r3  = c ? c.r  : 0;
    var g3  = c ? c.g  : 0;
    var b3  = c ? c.b  : 0;

    SendLong([
        0x11, 0xff, 0x08, 0x5e,
        id1, id1, r1, g1, b1,
        id2, id2, r2, g2, b2,
        id3, id3, r3, g3, b3,
        0x00
    ]);
}

function Commit() {
    SendLong([
        0x11, 0xff, 0x08, 0x7e,
        0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00
    ]);
}

var lastColors = [];
var ledAge = [];
var sweepIndex = 0;

export function Initialize() {
    lastColors = [];
    ledAge = [];
    for (var i = 0; i < leds.length; i++) {
        lastColors.push([-1, -1, -1]);
        ledAge.push(0);
    }
    sweepIndex = 0;
}

export function Render() {
    var candidates = [];

    for (var i = 0; i < leds.length; i++) {
        var led = leds[i];
        var col = device.color(led[1], led[2]);
        var prev = lastColors[i];

        var diff = Math.abs(col[0] - prev[0]) + Math.abs(col[1] - prev[1]) + Math.abs(col[2] - prev[2]);
        
        if (diff > 0) {
            ledAge[i]++;
            var priorityScore = diff + (ledAge[i] * 15);
            candidates.push({
                index: i,
                id: led[3],
                col: col,
                score: priorityScore
            });
        } else {
            ledAge[i] = 0;
        }
    }

    candidates.sort(function(a, b) {
        return b.score - a.score;
    });

    var toSend = [];
    var sentIndices = {};

    var budget = Math.min(18, candidates.length);
    for (var k = 0; k < budget; k++) {
        var item = candidates[k];
        toSend.push({ id: item.id, r: item.col[0], g: item.col[1], b: item.col[2] });
        lastColors[item.index] = [item.col[0], item.col[1], item.col[2]];
        ledAge[item.index] = 0;
        sentIndices[item.index] = true;
    }

    for (var s = 0; s < 9; s++) {
        var swIdx = (sweepIndex + s) % leds.length;
        if (!sentIndices[swIdx]) {
            var swLed = leds[swIdx];
            var swCol = device.color(swLed[1], swLed[2]);
            toSend.push({ id: swLed[3], r: swCol[0], g: swCol[1], b: swCol[2] });
            lastColors[swIdx] = [swCol[0], swCol[1], swCol[2]];
            ledAge[swIdx] = 0;
        }
    }
    sweepIndex = (sweepIndex + 9) % leds.length;

    for (var p = 0; p < toSend.length; p += 3) {
        SendThree(
            toSend[p],
            toSend[p + 1] || null,
            toSend[p + 2] || null
        );
    }

    Commit();
}

export function Shutdown() {
}

export function ImageUrl() {
    return "https://raw.githubusercontent.com/aleopho/signalrgb-logitech-g316-x98/main/LG316X98.png";
}
