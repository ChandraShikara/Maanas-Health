const jwt=require("jsonwebtoken")

module.exports=function(req,res,next){
    try {
        let token =req.header('x-token');
        if(!token){
            return res.send("Token not found!")
        }
        let decode= jwt.verify(token,"student-jwt-key")
        req.user=decode.user
        next()
    } catch (err) {
        console.log(err)
        return res.send("Server Error!")
    }
}
