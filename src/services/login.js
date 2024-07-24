import { loginUser } from '../controllers/login/loginQuery.js';
import logger from '../../logger.js';
import string from '../constantValues/strings.json' assert { type: 'json' };

export async function login(req, res) {
    const { email, firstname, lastname } = req.body;
    
    if(!email || !firstname || !lastname){
        return res.status(500).json({ message: string.loginError });
    }

    try {
        const result = await loginUser(email, firstname, lastname);
        return res.status(200).json(result);
    } catch (error) {
        logger.error({ message: string.loginError, error });
        return res.status(500).json({ message: string.loginError });
    }
}