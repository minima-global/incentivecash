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
  static readonly user = 'User'
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

  static readonly homeTip = 'Home'
  static readonly helpTip = 'Help'
  static readonly contactTip = 'Contact'
  static readonly aboutTip = 'About'
  static readonly sortTip = "Sort"
  static readonly loginTip = 'Sign In'
  static readonly logoutTip = 'Sign Out'
  static readonly userTip = 'Sign In'

}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = [`To report a technical problem, please email a brief description of the issue to ${App.bugEmail}.`,`For all other enquires, please email ${App.author} at ${App.email}.`]
}

class User {

  static readonly heading = 'Sign In'

  static readonly email = 'Email'
  static readonly password = 'Password'
  static readonly loginButton = 'Sign In'

  static readonly loginSuccess = 'Success'
  static readonly loginFailure = 'Failure'

  static readonly getUserSuccess = 'Success'
  static readonly getUserFailure = 'Failure'
}

export { App,
         Paths,
         GeneralError,
         Home,
         About,
         Help,
         Contact,
         User
       }
