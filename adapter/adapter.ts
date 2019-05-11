export interface IAuth {
  signup(credentials: ICredentials): string

  login(credentials: ICredentials): string
}

export class JSONRPCAuthAdapter implements IAuth {
  private authService: JSONRPCAuthService

  constructor(authService: JSONRPCAuthService) {
    this.authService = authService
  }

  public signup(credentials: ICredentials) {
    const jsonRpcService = this.prepareJSONRPCCall()

    return jsonRpcService.signup(credentials)
  }

  public login(credentials: ICredentials) {
    const jsonRpcService = this.prepareJSONRPCCall()

    return jsonRpcService.login(credentials)
  }

  private prepareJSONRPCCall() {
    return this.authService
  }
}

export class JSONRPCAuthService {
  public signup(credentials: ICredentials): string {
    console.log(`User ${credentials.username} is registered with password ${credentials.password}`)
    return 'jwt_token'
  }

  public login(credentials: ICredentials): string {
    console.log(`User ${credentials.username} is logged in with password ${credentials.password}`)
    return 'jwt_token'
  }
}

interface ICredentials {
  username: string,
  password: string
}
