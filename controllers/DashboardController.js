module.exports.home = (request,response)=>{
      user=request.session.user
        if ( request.session.user.role == 'admin') {
            response.redirect('/admin')
        }
        else
        response.render('dashboard',{user})
}