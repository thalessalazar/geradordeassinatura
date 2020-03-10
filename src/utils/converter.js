const express = require('express');
const router = express.Router();
require('request');
const request = require('request-promise');

const API_ID = '7ae8aab5-fcbe-43fc-afc1-66c360679d5e';
const API_KEY = 'b1ea7797-9c86-49bd-a751-5437a631384a';

module.exports = {
    async convert(name, sector, role, extension) {

        const data = {
            html: "<div class='background'><div><img class='logo' src='img/logo.png' alt=''></div><div class='dados'><p class='nome'>"+name+"</p><p class='cargo'>"+role+"</p><div class='traco'></div><p class='telefone'>(53) 3242.8800 - "+extension+"</p><p class='endereco'>Av. Portugal, 662. Bagé - RS</p></div><ul style='list-style: none'><li><img class='icon' src='img/global.png'></li<li><p class='vermelho'>peruzzo.com.br</p></li><li style='margin-left: 10px;'><img class='icon' src='img/fb.png'></li><li><p class='verde'>@supermercadosperuzzo</p></li></ul><div class='lista'></div></div></div><div class='direita'>",
            css: "@import url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap);.background{width:605px;height:189px;background-image:url(../img/base-assinatura.jpg)}.logo{width:278px;margin-top:20px;margin-left:10px}.dados{margin-left:50%;margin-top:-160px;color:#4a4a4a;align-items:center}.nome{font-family:Roboto,sans-serif;font-weight:500;font-size:19px;margin-bottom:3px}.cargo{font-family:Roboto,sans-serif;font-weight:300;font-style:italic;margin-top:4px;margin-bottom:0;font-size:18px}.endereco,.telefone{font-family:Roboto,sans-serif;font-weight:300;font-style:italic;margin-top:25px;font-size:17px;margin-bottom:0}.endereco{margin-bottom:0;margin-top:2px}.nome_empresa{font-family:Roboto,sans-serif;font-size:20px}.traco{background-color:#acc90b;height:1px;width:50px;margin-top:12px;float:left;color:#acc90b}.lista{margin-left:50%;position:relative}.icon{width:15px}.lista p{font-family:Roboto,sans-serif;font-weight:400;font-size:12px;float:right;margin-left:1px;margin-bottom:0}ul{margin:0;padding:0;align-items:center}li{display:inline-block}ul li img{margin-top:0}.verde{color:#95aa1e}.vermelho{color:#e30613}",
        };

        const image = await request
            .post({ url: 'https://hcti.io/v1/image', form: data })
            .auth(API_ID, API_KEY)

        const { url } = JSON.parse(image);
        
        return url;
    }
}