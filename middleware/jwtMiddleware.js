var jwt = require('jsonwebtoken');
const jwt1 = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers["x-access-token"] || req.params.token;
    if (token){
        try {
            jwt.verify(token, appSecret, (err, decoded) => {
            if (err){
                //console.log('Failed to authenticate token.');
                return res.json({
                    success: false,
                    message: "Failed to authenticate token."
                });
            } else{
                console.log(decoded);
                req.jwt = decoded;
                next();
            }
        });
    }catch (err) {}
    }else{
        //console.log('No token Provided.');
        return res.send({
            success: false,
            message: "No token Provided."
        });
    }
}
module.exports = jwt1;