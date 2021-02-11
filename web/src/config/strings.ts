class App {

  static readonly title = 'Minima'
  static readonly appName = 'Incentive Cash'
  static readonly catchLine = `Powered by ${App.title}`
  static readonly tagline = ''
  static readonly copyright = '© Copyright 2021 Minima GmbH'
  static readonly author = 'Dr Steve Huckle'
  static readonly enquiries = 'Chris Brown'
  static readonly email = 'chris.brown@minima.global'
  static readonly bugEmail = 'minima-global@fire.fundersclub.com'
  static readonly version = '0.1.0'
  static readonly release = 'Testnet'
}

class Paths {

  static readonly home = 'Home'
  static readonly about = 'About'
  static readonly help = 'Help'
  static readonly contact = 'Contact'

  static readonly register = 'Register'
  static readonly registerReferral = `${Paths.register}`
  static readonly registerEmail = `${Paths.register}`
  static readonly registerEmailUID = `${Paths.register}`

  static readonly user = 'User'
  static readonly reward = 'Reward'
  static readonly rewardUser = `${Paths.reward}`
  static readonly referral = 'Referral'
  static readonly referralUser = `${Paths.referral}`
}

class GeneralError {

  static readonly required = "Required"

}

class Home {

  static readonly heading = `${App.appName}`

  static readonly info = [`The ${App.title} Incentives Server!`,`For all ${App.title} incentive program enquires, please email ${App.enquiries} at ${App.email}.`]
}

class About {

  static readonly heading = 'About'

  static readonly info = [`Version ${App.version}.`,`${App.catchLine}.`,`${App.release}.`,`Created by ${App.author}.`,`${App.copyright}.`]
}

class Help {

  static readonly heading = 'Help'

  static readonly info = [`Coming soon.`]

  static readonly homeTip = 'Sign In'
  static readonly helpTip = 'Help'
  static readonly contactTip = 'Contact'
  static readonly aboutTip = 'About'
  static readonly sortTip = "Sort"
  static readonly loginTip = 'Sign In'
  static readonly logoutTip = 'Sign Out'
  static readonly registerTip = 'Register'
  static readonly userTip = 'User'
  static readonly rewardTip = 'Rewards'
  static readonly referralTip = 'Referrals'
}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = [`To report a technical problem, please email a brief description of the issue to ${App.bugEmail}.`,`For all other enquires, please email ${App.author} at ${App.email}.`]
}

class User {

  static readonly loginHeading = 'Sign In'
  static readonly userHeading = 'User'

  static readonly email = 'Email'
  static readonly password = 'Password'
  static readonly password2 = 'Re-type Password'
  static readonly loginButton = 'Sign In'

  static readonly loginSuccess = 'Success'
  static readonly loginFailure = 'Failure'

  static readonly getUserSuccess = 'Success'
  static readonly getUserFailure = 'Failure'

}

class Register {

  static readonly heading = 'Register'

  static readonly token = 'Token'
  static readonly referral = 'Referral Code'

  static readonly from = "steve.huckle@minima.global"
  static readonly registerSubject = "Welcome to the Minima Incentive Scheme"
  static readonly preBody = "Hello! This is your token - "
  static readonly postBody = " - Please input that exact (case-sensitive) token into the browser window that generated this email. If you close that window, you will need to re-register and generate another token. Many thanks. The Minima Team."

  static readonly registerEmail = 'Please check your email for instructions as to how to complete your registration'

  static readonly registerButton = 'Register'

  static readonly registerSuccess = 'Success'
  static readonly registerFailure = 'Failure'

  static readonly tokenRequired = 'You must supply a token sent to your email address before you can complete registration'
  static readonly tokenNotMatch = "The token does not match the one sent to your email address"
  static readonly passTooShort = "Password too short"
  static readonly passNotMatch = "Passwords don't match"
  static readonly format = "Incorrect format"

  static readonly login = "Success - please login using your new password"
}

class Reward {

  static readonly heading = 'Rewards'
}

class Referral {

  static readonly heading = 'Referrals'
}

class Collection {

  static readonly heading = 'Collection'

  static readonly getCollectionSuccess = 'Success'
  static readonly getCollectionFailure = 'Failure'

}

class Post {

  static readonly postSuccess = 'Success'
  static readonly postFailure = 'Failure'

}

export { App,
         Paths,
         GeneralError,
         Home,
         About,
         Help,
         Contact,
         User,
         Register,
         Reward,
         Referral,
         Collection,
         Post
       }
