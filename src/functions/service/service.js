import admin from 'firebase-admin'
import CONSTANT from './constant'

export const adminService = admin.initializeApp(CONSTANT.adminConfig)
