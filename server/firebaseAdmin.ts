import * as admin from 'firebase-admin';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

try {
  let credential;

  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Production: Use environment variable
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    credential = admin.credential.cert(serviceAccount);
  } else {
    // Development: Use local file
    // In Docker/Production, if FIREBASE_SERVICE_ACCOUNT is not set, it might try to look for this file.
    // We should ensure we don't crash if the file is missing in production.
    const serviceAccountPath = path.join(__dirname, 'service-account.json');
    try {
        credential = admin.credential.cert(serviceAccountPath);
    } catch (e) {
        console.warn(`Could not load service-account.json from ${serviceAccountPath}. Ensure FIREBASE_SERVICE_ACCOUNT env var is set in production.`);
        throw e;
    }
  }

  admin.initializeApp({
    credential
  });
  console.log('Firebase Admin Initialized');
} catch (error) {
  console.error('Firebase Admin Initialization Error:', error);
}

export const db = admin.firestore();
