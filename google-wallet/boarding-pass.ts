import jwt from 'jsonwebtoken';

export function generateBoardingPassUrl({ userId, userName }): string {
  const issuerId = process.env.GOOGLE_WALLET_ISSUER_ID;

  const credentials = {
    email: process.env.GOOGLE_WALLET_SERVICE_EMAIL,
    privateKey: process.env.GOOGLE_WALLET_SERVICE_KEY.replace(/\\n/g, '\n')
  };

  const boardingPass = {
    'id': `${issuerId}.${userId}_${Date.now()}`,
    'classId': `${issuerId}.demopasseasyjet`,

    'passengerName': `${userName}`,
    'state': 'ACTIVE',
    'reservationInfo': {
      'confirmationCode': 'demo_code',
      'eticketNumber': 'demo_number'
    },

    'boardingAndSeatingInfo': {
      'seatClass': 'Economy',
      'seatNumber': '18F',
      'boardingGroup': 'B',
      'boardingDoor': 'BACK'
    },
    'barcode': {
      'type': 'QR_CODE',
      'value': 'https://flight-pwa.vercel.app/'
    }
  };

  const claims = {
    aud: 'google',
    typ: 'savetowallet',
    origins: [],
    iss: credentials.email,
    payload: {
      flightObjects: [
        boardingPass
      ]
    }
  };

  const token = jwt.sign(claims, credentials.privateKey, { algorithm: 'RS256' });

  return `https://pay.google.com/gp/v/save/${token}`;
}
