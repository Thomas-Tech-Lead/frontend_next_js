export default function login(req, res) {
    const body = req.body
    if ((body.Phone === "user" || body.Phone === "User") && (body.Password === "password" || body.Password === "Password") ) {
        res.status(200).json({ 
            message: "true"
        })
    } else {
        res.status(200).json({ 
            message: "false"
        })
    }
   
}