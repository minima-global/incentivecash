class Config {

}

class Local {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly contact = '/contact'

  static readonly user = '/user'
  static readonly reward = '/reward'
  static readonly rewardUser = `${Local.reward}/:id`
  static readonly referral = '/referral'
}

class Remote {

  static readonly serverURL = 'http://localhost:8055'
  static readonly userLogin = '/auth/login'
  static readonly userPath = '/users/me'
  static readonly itemsPath = '/items'
  static readonly rewardsPath = '/reward'
}

export { Config, Local, Remote }
