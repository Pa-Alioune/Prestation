module.exports.home=(request, response)=>{
    user=request.session.user
        response.render('admin/admin',{user})   
}
