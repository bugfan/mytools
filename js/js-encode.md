### js比较全的加密函数实现 见名知意
```
// Native ArrayBuffer to Base64
function base64ArrayBuffer(arrayBuffer) {
  var base64    = ''
  var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  var bytes         = new Uint8Array(arrayBuffer)
  var byteLength    = bytes.byteLength
  var byteRemainder = byteLength % 3
  var mainLength    = byteLength - byteRemainder

  var a, b, c, d
  var chunk

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
    d = chunk & 63               // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder == 1) {
    chunk = bytes[mainLength]

    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3)   << 4 // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '=='
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '='
  }
  
  return base64
}

(function() {
  var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  base64DecodeChars = new Array(( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 62, ( - 1), ( - 1), ( - 1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), ( - 1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, ( - 1), ( - 1), ( - 1), ( - 1), ( - 1));
  this.base64encode = function(e) {
      var r, a, c, h, o, t;
      for (c = e.length, a = 0, r = ''; a < c;) {
          if (h = 255 & e.charCodeAt(a++), a == c) {
              r += base64EncodeChars.charAt(h >> 2),
              r += base64EncodeChars.charAt((3 & h) << 4),
              r += '==';
              break
          }
          if (o = e.charCodeAt(a++), a == c) {
              r += base64EncodeChars.charAt(h >> 2),
              r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
              r += base64EncodeChars.charAt((15 & o) << 2),
              r += '=';
              break
          }
          t = e.charCodeAt(a++),
          r += base64EncodeChars.charAt(h >> 2),
          r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
          r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
          r += base64EncodeChars.charAt(63 & t)
      }
      return r
  }
  this.base64decode = function(e) {
      var r, a, c, h, o, t, d;
      for (t = e.length, o = 0, d = ''; o < t;) {
          do r = base64DecodeChars[255 & e.charCodeAt(o++)];
          while (o < t && r == -1);
          if (r == -1) break;
          do a = base64DecodeChars[255 & e.charCodeAt(o++)];
          while (o < t && a == -1);
          if (a == -1) break;
          d += String.fromCharCode(r << 2 | (48 & a) >> 4);
          do {
              if (c = 255 & e.charCodeAt(o++), 61 == c) return d;
              c = base64DecodeChars[c]
          } while ( o < t && c == - 1 );
          if (c == -1) break;
          d += String.fromCharCode((15 & a) << 4 | (60 & c) >> 2);
          do {
              if (h = 255 & e.charCodeAt(o++), 61 == h) return d;
              h = base64DecodeChars[h]
          } while ( o < t && h == - 1 );
          if (h == -1) break;
          d += String.fromCharCode((3 & c) << 6 | h)
      }
      return d
  }
  this.hexToBase64 = function(str) {
      return base64encode(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
  }
  this.Base64Tohex = function(str) {
      for (var i = 0,
      bin = base64decode(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
          var tmp = bin.charCodeAt(i).toString(16);
          if (tmp.length === 1) tmp = "0" + tmp;
          hex[hex.length] = tmp;
      }
      return hex.join("");
  }
}) ();
//hexToBase64 Base64Tohex base64decode base64encode

function bytesToString(bytes){
	return hexToString(bytesToHex(bytes));
}


function bytesToBase64(bytes){
	return base64ArrayBuffer(bytes);
}

// Convert a byte array to a hex string
function bytesToHex(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
    }
    return hex.join("");
}


function stringToBase64(str){
	return base64encode(str); 
}

function stringToBytes(str){
  return hexToBytes(stringToHex(str));
}

// Convert a ASCII string to a hex string
function stringToHex(str) {
    return str.split("").map(function(c) {
        return ("0" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join("");
}

function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

// Convert a hex string to a ASCII string
function hexToString(hexStr) {
    var hex = hexStr.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function hexToBase64(hexStr){
  return hexToBase64(hexStr);
}

function base64ToString(base64str){
  return base64decode(base64str);
}

function base64ToHex(base64str){
  return Base64Tohex(base64str);
}

function base64ToBytes(base64str){
  //null
}
//bytesToString bytesToBase64 bytesToHex
//stringToBase64 stringToBytes stringToHex
//hexToBytes hexToString hexToBase64
//base64ToString base64ToHex

```
