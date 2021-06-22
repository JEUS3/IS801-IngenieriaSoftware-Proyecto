const jwt = require("jsonwebtoken");

const generarJWT = (uid) => {
    const payload = {uid};
    return new Promise( (resolve, reject) => {
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {expiresIn:'2h'}, (err, token)=>{
            if(err){
                console.log(`Error al momento de general el token ${err}`);
                reject("Error al momento de general el token");
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
};