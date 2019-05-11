import {IAuth, JSONRPCAuthAdapter, JSONRPCAuthService} from './adapter'

class AuthFabric {
  public static getAuthService(): IAuth {
    return new JSONRPCAuthAdapter(new JSONRPCAuthService())
  }
}

function main(): void {
  const authService: IAuth = AuthFabric.getAuthService()

  console.log(authService.signup({username: 'admin', password: 'notqwerty'}))
  console.log(authService.login({username: 'admin', password: 'notqwerty'}))
}

main()
