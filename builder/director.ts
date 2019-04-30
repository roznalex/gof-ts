import {ProfileBuilder, IConstructProfileOptions} from './builder'

export class ProfileDirector {
  static constructProfile(builder: ProfileBuilder, options: IConstructProfileOptions) {
    builder.reset()
    builder.setRequiredFields(options.requiredFields)
    builder.setAdditionalFields(options.additionalFields)
  }
}
