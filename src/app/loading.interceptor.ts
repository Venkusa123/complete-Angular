import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class LoadingInterceptorService implements HttpInterceptor{
    constructor(){}
    intercept(request:HttpRequest<unknown>,next:HttpHandler){
        console.log(request);
        const orderId = "18536400";
        // return next.handle(request.clone({setHeaders:{orderId}}));
        return next.handle(request);
    }
}