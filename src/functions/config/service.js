import admin from 'firebase-admin'
import CONSTANT from './constant'

export const service = admin.initializeApp(CONSTANT.adminConfig)
