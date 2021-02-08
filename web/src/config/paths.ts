class Config {

}

class Local {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly contact = '/contact'

  static readonly register = '/register'
  static readonly registerReferral = `${Local.register}/:referral`
  static readonly registerPassword = `${Local.register}/:email/:referral/:token`

  static readonly user = '/user'
  static readonly reward = '/reward'
  static readonly rewardUser = `${Local.reward}/:id`
  static readonly referral = '/referral'
  static readonly referralUser = `${Local.referral}/:id`
}

class Remote {

  static readonly serverURL = 'http://localhost:8055'
  static readonly userLogin = '/auth/login'
  static readonly userPath = '/users/me'
  static readonly itemsPath = '/items'
  static readonly rewardsPath = '/reward'
  static readonly referralsPath = '/referral'
}

export { Config, Local, Remote }
