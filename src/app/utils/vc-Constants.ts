import { Injectable } from "@angular/core";

@Injectable()

export class VcConstants {

    web_router_link = {
        sigin: '/login',
        home: '/home',
        video: '/video',
    }

    dialogMessage = {
        invalidPassword: 'Invalid username/password'
    }

    snackbarType = {
        error: 'error-snackbar'
    }
}