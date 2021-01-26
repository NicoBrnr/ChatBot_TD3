'use strict'

class FBeamer{
    constructor({pageAccessToken, VerifyToken}){

        this.pageAccessToken=pageAccessToken;
        this.VerifyToken=VerifyToken;

    }

    registerHook(req, res){
        const params = req.query;
        const mode = params['hub.mode'],
        token = params['hubs.verify_token'],
        challenge = params['hub.challenge'];

        try{
            if(mode==='suscribe' && token===this.VerifyToken){
                console.log('webhook is registered')
                return res.send(challenge);
            }
            else{
                console.log("Could not registered webhook !")
                return res.sendStatus(200);
            }
        }
        catch(e){
            console.log(e);
        }
        
    }
}


module.exports = FBeamer;