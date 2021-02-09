class Misc {
    static readonly successLoginDelay = 1500
}

class Smtp {
  static readonly host = "smtp.mailgun.org"
  static readonly username = "postmaster@sandboxa64f4ca03fb949359bbb9438ae5470ec.mailgun.org"
  static readonly password = "0bbf369effbb3b9e8925b914f412980a-4de08e90-67233676"
  static readonly from = "steve.huckle@minima.global"
  static readonly registerSubject = "Welcome to the Minima Incentive Scheme"
  static readonly body = "Please go the following URL to complete your registration"
  static readonly signature = "Many thanks - The Minima Global Team."
}

export { Misc, Smtp }
