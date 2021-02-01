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

  static readonly login = 'Login'
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

  static readonly loginTip = 'Login'
  static readonly logoutTip = 'Logout'
}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = [`To report a technical problem, please email a brief description of the issue to ${App.bugEmail}.`,`For all other enquires, please email ${App.author} at ${App.email}.`]
}

class Login {

  static readonly heading = 'Login'

  static readonly email = 'email'
  static readonly password = 'password'
  static readonly loginButton = 'Submit'
}

export { App,
         Paths,
         GeneralError,
         Home,
         About,
         Help,
         Contact,
         Login
       }
