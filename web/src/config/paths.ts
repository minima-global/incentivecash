class Config {

}

class Local {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly contact = '/contact'

  static readonly login = '/login'
}

class Remote {

    static readonly secure = 'https://'
    static readonly insecure = 'http://'
}

export { Config, Local, Remote }
