module.exports = (request,response,next)=>{
 
    if (request.session.user !== undefined && request.session.user.role === "admin" ) {
        next()
    }
    else{
        response.redirect("/login")
    }
}