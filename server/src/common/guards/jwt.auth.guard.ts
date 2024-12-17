import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { verifyToken } from "../utils/verify.token.util";


@Injectable()
export class JWTAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) throw new UnauthorizedException('Authorization header is missing');
        const token = authHeader.split(' ')[1];
        try {
            const payload = await verifyToken(token);5
            request.user = payload
            return true;
        } catch (err: any) {
            if (err.name === 'TokenExpiredError') {
                throw new UnauthorizedException('Token has expired.');
            }
            throw new UnauthorizedException('Invalid token.');
        }
    }
}