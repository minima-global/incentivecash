class Local {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly contact = '/contact'
  static readonly welcome = '/welcome'

  static readonly signIn = '/signIn'
  static readonly register = '/register'
  static readonly registerReferral = `${Local.register}/:uid/:referral`
  static readonly registerEmail = `${Local.register}/:email`
  static readonly registerEmailUID = `${Local.register}/:uid/:referral/:email`

  static readonly user = '/user'
  static readonly reward = '/reward'

  static readonly rewardUser = `${Local.reward}/:id`
  static readonly referral = '/referral'
  static readonly referralUser = `${Local.referral}/:id`
}

class Remote {

  static readonly devHttpsServerURL = 'https://127.0.0.1:8085'
  static readonly devDbaseServerURL = 'http://localhost:8055'

  static readonly prodHttpsServerURL = 'https://incentive.minima.global'
  static readonly prodDbaseServerURL = 'https://incentivedb.minima.global'

  static readonly miniDappURL = 'https://github.com/minima-global/incentivecash/raw/main/im/incentiveCash/minidapp/incentivecash.minidapp'

  static readonly aPKURL = 'https://github.com/minima-global/MiniDroid/raw/master/apk/minima-0.97.13.1.apk'

  static readonly aPKVideo = 'https://www.youtube.com/watch?v=osjVMAyeg6I'
  static readonly miniDappVideo = 'https://www.youtube.com/watch?v=osjVMAyeg6I'

  static readonly userLogin = '/auth/login'
  static readonly userPath = '/users/me'
  static readonly itemsPath = '/items'
  static readonly rewardsPath = '/reward'
  static readonly referralsPath = '/referral'
  static readonly createUser = "/users"
  static readonly customPath = "/custom/minima"
}

export { Local, Remote }
