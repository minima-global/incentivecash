class App {

  static readonly title = 'Minima'
  static readonly appName = 'Incentive Program'
  static readonly catchLine = `Powered by ${App.title}`
  static readonly tagline = ''
  static readonly website = "http://www.minima.global"
  static readonly copyright = '© Copyright 2021 Minima GmbH'
  static readonly author = 'Dr Steve Huckle'
  static readonly enquiries = 'Chris Brown'
  static readonly email = 'chris.brown@minima.global'
  static readonly bugEmail = 'minima-global@fire.fundersclub.com'
  static readonly version = '0.2.0'
  static readonly release = 'Testnet'
}

class Paths {

  static readonly home = 'Home'
  static readonly about = 'About'
  static readonly help = 'Help'
  static readonly contact = 'Contact'
  static readonly welcome = 'Welcome'

  static readonly signIn = 'Sign In'
  static readonly signOut = 'Sign Out'
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

  static readonly heading = "Welcome"
  static readonly subHeading = `to the ${App.title}`

  //+ `<span style={{color: 'red'}}>${App.appName}</span>`

  static readonly info = `${App.title} is a truly decentralised, ultra-lean blockchain, running entirely on mobile and IoT devices.`

  static readonly infoSecond = `The ${App.title} ${App.appName} exists to reward users for contributing to the ${App.title} community; for example, you might help test the protocol or build an application to run in the ecosystem. You can even earn coins simply by registering for the program and then downloading the ${App.title} APK so you can run a node on your Android device.`

  static readonly infoThird = `Join the ${App.title} community and participate in building the next era of decentralised web infrastructure.`

  static readonly infoFourth = "and start earning coins today."

  static readonly moreInfo = `To find out more about ${App.title}, please visit`
}

class Welcome {

  static readonly heading = `Welcome to ${App.title}`

  static readonly subHeading = `Instructions`

  static readonly info = 'is a truly decentralised, ultra-lean blockchain running entirely on mobile and IoT devices'

  static readonly infoSecond = `Once the ${App.title} ${App.appName} MiniDapp is installed, open it up and sign in using the email and password you used to register here.`

  static readonly infoThird = `Please note that at this stage in our development, in order to participate in the ${App.title} ${App.appName}, you will need to run an Android device.`

  static readonly moreInfo = `To find out more about ${App.title} and the ${App.title} ${App.appName}, please visit`

  static readonly downloadAPK = `If you haven’t installed the ${App.title} APK already, please download it by clicking the button below. For detailed installation instructions, please watch our instructional video at`

  static readonly downloadMiniDapp= `Once the ${App.title} APK is installed on your Android device, download and install the ${App.title} ${App.appName} MiniDapp. For detailed instructions as to how this can be done, please watch our instructional video at`

  static readonly aPKInstructionURL = "http://www.minima.global"
  static readonly miniDappInstructionURL = "http://www.minima.global"

  static readonly aPKButton = `${App.title} APK`
  static readonly miniDappButton = "MiniDapp"

  //static readonly info = [`The ${App.title} Incentives Server!`,`For all ${App.title} incentive program enquires, please email ${App.enquiries} at ${App.email}.`]
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
  static readonly registerTip = 'Register'
  static readonly userTip = 'Profile'
  static readonly rewardTip = 'Rewards'
  static readonly referralTip = 'Referrals'
  static readonly downloadTip = 'Download'
  static readonly referralCopyTip = 'Copy'
}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = [`To report a technical problem, please email a brief description of the issue to ${App.bugEmail}.`,`For all other enquires, please email ${App.enquiries} at ${App.email}.`]
}

class User {

  static readonly loginHeading = 'Sign In'
  static readonly userHeading = 'Profile'

  static readonly email = 'Email'
  static readonly password = 'Password'
  static readonly password2 = 'Re-type Password'
  static readonly loginButton = 'Sign In'
  static readonly logoutButton = 'Sign Out'

  static readonly first = "First name"
  static readonly last = "Last name"

  static readonly lastAccess = 'Last Access'

  static readonly loginSuccess = 'Login Success'
  static readonly loginFailure = 'Login Failure'

  static readonly getUserSuccess = 'Get Success'
  static readonly getUserFailure = 'Get Failure'

}

class Register {

  static readonly heading = 'Register'

  static readonly token = 'Token'
  static readonly referral = 'Referral Code'

  static readonly from = "steve.huckle@minima.global"
  static readonly registerSubject = "Welcome to the Minima Incentive Scheme"
  static readonly preBody = "Hello! This is your token - "
  static readonly postBody = " - Please input that exact (case-sensitive) token into the browser window that generated this email. If you close that window, you will need to re-register and generate another token. Many thanks. The Minima Team."

  static readonly registerEmail = 'Register success. Please check your email for instructions as to how to complete your registration.'

  static readonly registerButton = 'Register'

  static readonly registerSuccess = 'Register success'
  static readonly registerFailure = 'Register failure'

  static readonly passwordSuccess = 'Register password success'
  static readonly passwordFailure = 'Register password failure'

  static readonly tokenRequired = 'You must supply a token sent to your email address before you can complete registration'
  static readonly tokenNotMatch = "The token does not match the one sent to your email address"
  static readonly passTooShort = "Password too short"
  static readonly passNotMatch = "Passwords don't match"
  static readonly format = "Incorrect format"

  static readonly login = "Success - please login using your new password"
}

class Post {

  static readonly postSuccess = 'Success'
  static readonly postFailure = 'Failure'

}

export { App,
         Paths,
         GeneralError,
         Home,
         Welcome,
         About,
         Help,
         Contact,
         User,
         Register,
         Post
       }
