const crypto = require('crypto-js')




export function encrypt (data){
    const key = "bonjouricilundimardimercredijeudivendredisamedidimancheplusunpetitcadeaudeveloppeparmonsieurasbilim"
    let encJson = crypto.AES.encrypt(JSON.stringify(data), key).toString();
     return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(encJson));

}

export function decrypt(data){
    const key = "bonjouricilundimardimercredijeudivendredisamedidimancheplusunpetitcadeaudeveloppeparmonsieurasbilim"
    let decData;
    try{
        decData = crypto.enc.Base64.parse(data).toString(crypto.enc.Utf8);
    }
    catch{
        return null
    }

    return JSON.parse(crypto.AES.decrypt(decData, key).toString(crypto.enc.Utf8));
}

