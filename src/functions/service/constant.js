import * as functions from 'firebase-functions'
import admin from 'firebase-admin'
import isEmpty from 'lodash/isEmpty'
import LOCAL_ENV from './localEnv'
import stagingServiceAccount from 'staging-service-account.json'
import productionServiceAccount from 'production-service-account.json'

const constants = {
  production: {
    adminConfig: {
      credential: admin.credential.cert(productionServiceAccount),
      databaseURL: '<production-database-url>',
    }
  },
  staging: {
    adminConfig: {
      credential: admin.credential.cert(stagingServiceAccount),
      databaseURL: '<staging-database-url>',
    }
  }
}

const runtimeConfig = functions.config()
const stage = isEmpty(runtimeConfig) ? LOCAL_ENV : runtimeConfig.environment.stage

export default constants[stage]
