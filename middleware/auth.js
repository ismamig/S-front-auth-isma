export default function ({ route, store, redirect, app }) {
  //
  let authRoutes = ['auth-login', 'auth-register']
  let publicRoutes = ['auth-login', 'auth-register', 'index', 'about']
  let privateRoutes = ['dashboard']

  if (route.name === 'auth-logout') {
    return redirect('/')
  }
  //console.log(store.state.users.session['email'])
  if (privateRoutes.includes(route.name) && store.state.users.session.email === '') {
    //console.log("Pas le droit!")
    return redirect('/auth/login')
  }
  else if (authRoutes.includes(route.name) && store.state.users.session.email !== '') {
    //console.log("Pas le droit!")
    return redirect('/dashboard')
  }
  else if (privateRoutes.includes(route.name) && store.state.users.session !== '') {
    //console.log("Droit!")
  }
}

