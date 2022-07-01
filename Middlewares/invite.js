module.exports = (request,response,next)=>{
 
    if (request.session.user != undefined) {
        response.redirect("/dashboard") 
    }
    else
    next()
}