import type { NextApiRequest, NextApiResponse } from 'next';
import { generateBoardingPassUrl } from '../../../google-wallet/boarding-pass';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		return res.status(200).json({ url: generateBoardingPassUrl({...req.body}) });
	}
	if (req.method === 'GET') {
		return res.redirect(302, generateBoardingPassUrl({...req.query as any}));
	}
	res.status(405).json({ error: `Method "${ req.method.toUpperCase() }" is not supported.` });
}
