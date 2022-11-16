import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    getall(): string;
    postLogin(req: any, res: any): Promise<any>;
}
