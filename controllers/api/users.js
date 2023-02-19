//-----Backend User Controllers-----//

const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        {expiresIn: "24h"}
        )
}

async function create(req, res, next) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        
        const token = createJWT(user)

        console.log(token)
        //res.json({ token: token })
        res.json(token) //I think this is the full json payload
        
      } catch (error) {
        console.error(error)
        res.status(400).json(error);
      }
}

async function login(req, res, next) {
    try {
        //query for the user based upon their email 
        //console.log(req.body.email)   
        const user = await User.findOne({email: req.body.email})
        // console.log(`User Controller: ${user}`)

        if(!user) throw new Error()

        //verify the password is correct
        const passwordsMatch = bcrypt.compare(req.body.password, user.password)
        //if true create a JWT and send it back
        if (passwordsMatch) {
            const token = createJWT(user)
            console.log(token)
            //res.json({ token: token })
            res.json(token)
        } else {
            throw new Error()
        }

    } catch {
        res.status(400).json("Bad Credentials")
    }
}

function checkToken(req, res) {
   // console.log(req)
    res.json(req.exp)
}

module.exports = {create, login, checkToken}
