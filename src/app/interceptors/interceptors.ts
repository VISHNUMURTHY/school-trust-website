import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './login.interceptor';

export const APP_INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoginInterceptor,
        multi: true
    }
]