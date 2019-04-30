import {AdminProfileBuilder, UserProfileBuilder} from './builder'
import {ProfileDirector} from './director'

function main(): void {
  const adminProfileBuilder = new AdminProfileBuilder()
  const userProfileBuilder = new UserProfileBuilder()

  ProfileDirector.constructProfile(adminProfileBuilder, {
    requiredFields: {
      name: 'Alex',
      email: 'admin@test.com',
      phone: '+380632635077'
    },
    additionalFields: {}
  })

  const adminProfile = adminProfileBuilder.getResult()

  console.log(`Admin profile has been created: ${JSON.stringify(adminProfile)}`)

  ProfileDirector.constructProfile(userProfileBuilder, {
    requiredFields: {
      name: 'Alex',
      email: 'admin@test.com'
    },
    additionalFields: {
      phone: '+380632635077',
      city: 'Kyiv',
      zipCode: '03056'
    }
  })

  const userProfile = userProfileBuilder.getResult()

  console.log(`User profile has been created: ${JSON.stringify(userProfile)}`)
}

main()
