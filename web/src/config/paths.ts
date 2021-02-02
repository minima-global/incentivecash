class Config {

}

class Local {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly contact = '/contact'

  static readonly user = '/user'
}

class Remote {

  static readonly serverURL = 'http://localhost:8055'
  static readonly userLogin = '/auth/login'
  static readonly userPath = '/users/me'
}

export { Config, Local, Remote }
