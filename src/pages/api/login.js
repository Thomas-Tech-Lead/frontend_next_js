export default function login(req, res) {
    const body = req.body
    if (body.Phone === "251944719460" && body.Password === "password") {
        res.status(200).json({ 
            message: "true"
        })
    } else {
        res.status(200).json({ 
            message: "false"
        })
    }
   
}