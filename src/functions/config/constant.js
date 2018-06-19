import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import isEmpty from 'lodash/isEmpty'
import LOCAL_ENV from './localEnv'
import stagingServiceAccount from 'staging-service-account.json'

const constants = {
  production: {
    adminConfig: {},
  },
  staging: {
    adminConfig: {
      credential: admin.credential.cert(stagingServiceAccount),
      databaseURL: 'https://assez-staging.firebaseio.com',
    }
  }
}

const runtimeConfig = functions.config()
const stage = isEmpty(runtimeConfig) ? LOCAL_ENV : runtimeConfig.environment.stage

export default constants[stage]
