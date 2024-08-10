import jwt from 'jsonwebtoken';

const JWTSignature = process.env.JWT_SIGN;

export function CreateJWT(data) {
    const expTime = '3d';
    const user = {
        email: data.email,
    }
    const token = jwt.sign({ user }, JWTSignature, { expiresIn: expTime });
    return token;
};

export function VerifyJWT(req, res, next) {
    const authHeader = req.headers.token;
    const cookies = authHeader?.split("; ");
    const accessTokenCookie = cookies?.find(cookie => cookie.startsWith('access_token='));

    if (typeof authHeader !== 'undefined' && accessTokenCookie) {
        const token = accessTokenCookie.split(" ")[1];
        try {
            const userData = jwt.verify(token, JWTSignature);
            req.data = userData;
            next();
            return;
        } catch (error) {
            res.json({ message: "invalid token" });
            return;
        }
    } else {
        res.json({ message: "token not found" });
    }
}