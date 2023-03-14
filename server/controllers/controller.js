const register = (req,res,next)=>{
    res.json("REgistered Successfully");
    console.log(req.body)
}
const login = (req,res,next)=>{
    res.json("Login Successfully");
}
const posts = (req,res,next)=>{
    res.json("Post Successfully");
}

module.exports = {
    register,
    login,
    posts
}