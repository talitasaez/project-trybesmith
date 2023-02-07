import jwt from 'jsonwebtoken';
import IJwt from '../interfaces/jwt';

const secret = 'password';

const validateToken = (payload: IJwt) => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default validateToken;