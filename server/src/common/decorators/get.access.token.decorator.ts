import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetAccessToken = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const token = ctx.switchToHttp().getRequest().headers;
        return token;
    }
)