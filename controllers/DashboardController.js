module.exports.home = (request,response)=>{
      user=request.session.user
        if ( request.session.user.role == 'admin') {
            response.render('admin',{user})
        }
        else
        response.render('dashboard',{user})
}