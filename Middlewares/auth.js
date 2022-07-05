module.exports = (request,response,next)=>{
 
    if (request.session.user === undefined) {
        response.redirect("/login")
    }
    else
    next()
}