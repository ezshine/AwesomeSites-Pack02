if (CryptoJS)
    CryptoJS.baibing = {
        //need core.js/enc-utf8.js/enc-base64.js/cipher-core.js/tripledes.js
        encrypt: function(val, key, iv) {
            return CryptoJS.TripleDES.encrypt(CryptoJS.enc.Utf8.parse(val), CryptoJS.enc.Base64.parse(key), {
                iv: CryptoJS.enc.Base64.parse(iv),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString();
        },
        decrypt: function(val, key, iv) {
            return CryptoJS.TripleDES.decrypt(val, CryptoJS.enc.Base64.parse(key), {
                iv: CryptoJS.enc.Base64.parse(iv),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8);
        }
    };
else console.error('3des.js need after cryptojs/core.js');