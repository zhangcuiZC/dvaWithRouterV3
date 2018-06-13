const md5 = require('crypto-js/md5');
const hex = require('crypto-js/enc-hex');
import { getCookie } from './cookie';
const TOKEN_KEY = 'jdqw7P6Vgu3ul2Pr';

function getK(){
    const uid = getCookie('uid');

    if(uid && uid != "" && uid != undefined){
        var keys = uid;
    }else {
        var keys = Date.parse(new Date()).toString().substr(5,4);
    }
    var tokens = base64Encode(md5_re(keys) + TOKEN_KEY);

    var kt = {
        "k" : keys,
        "t" : tokens
    }
    return kt;
}


/**
 * MD5
 * @param str
 * @returns {*}
 */
function md5_re(str){
    return md5(str).toString(hex);
}

/**
 * base64
 * @param input
 * @returns {string|*}
 */
function base64Encode(input){
    var rv;
    rv = encodeURIComponent(input);
    rv = unescape(rv);
    rv = window.btoa(rv);
    return rv;
}

/*
 * Javascript base64Decode() base64解密函数用于解密base64加密的字符串
 * 吴先成  www.51-n.com ohcc@163.com QQ:229256237
 * @param string input base64加密字符串
 * @return string 解密后的字符串
 */
function base64Decode(input){
    rv = window.atob(input);
    rv = escape(rv);
    rv = decodeURIComponent(rv);
    return rv;
}
export {getK,md5_re};
