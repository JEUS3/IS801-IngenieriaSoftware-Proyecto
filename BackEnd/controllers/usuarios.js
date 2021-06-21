const test = (req,res)=>{
    res.status(200).json({
        ok  : true,
        msj : "El test se realizo de manera exitosa!!"
    });
}

module.exports = {
    test
};