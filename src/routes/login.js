import { Router } from 'express';
import { login } from '../../services/login.js';

const app = Router();


app.post('/login', login);


export {login};