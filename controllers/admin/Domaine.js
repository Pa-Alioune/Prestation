module.exports.create= (request,response)=>{
    user=request.session.user
    response.render('admin/domaine/create',{user})
}