interface IAdminRequiredFields {
  name: string
  email: string
  phone: string
}

interface IUserRequiredFields {
  name: string
  email: string
}

interface IUserAdditionalFields {
  phone?: string
  city?: string
  zipCode?: string
}

export interface IConstructProfileOptions {
  requiredFields: IAdminRequiredFields | IUserRequiredFields,
  additionalFields: IUserAdditionalFields,
}

class AdminProfile {
  name: string
  email: string
  phone: string
}

class UserProfile {
  name: string
  email: string
  phone: string
  city: string
  zipCode: string
}

export interface ProfileBuilder {
  reset(): void

  setRequiredFields(fields: object): void

  setAdditionalFields(fields: object): void
}

export class AdminProfileBuilder implements ProfileBuilder {
  private profile: AdminProfile

  constructor() {
    this.profile = new AdminProfile()
  }

  reset() {
    this.profile = new AdminProfile()
  }

  getResult(): AdminProfile {
    return this.profile
  }

  setRequiredFields(fields: IAdminRequiredFields) {
    this.profile.name = fields.name
    this.profile.email = fields.email
    this.profile.phone = fields.phone
  }

  setAdditionalFields(fields: IAdminRequiredFields) {

  }
}

export class UserProfileBuilder implements ProfileBuilder {
  private profile: UserProfile

  constructor() {
    this.profile = new UserProfile()
  }

  reset() {
    this.profile = new UserProfile()
  }

  getResult() {
    return this.profile
  }

  setRequiredFields(fields: IUserRequiredFields) {
    this.profile.name = fields.name
    this.profile.email = fields.email
  }

  setAdditionalFields(fields: IUserAdditionalFields) {
    this.profile.city = fields.city
    this.profile.zipCode = fields.zipCode
    this.profile.phone = fields.phone
  }
}
