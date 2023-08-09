import { Injectable } from "@angular/core";

@Injectable()

export class VcConstants {

    web_router_link = {
        sigin: '/login'
    }

    dialogMessage = {
        invalidPassword: 'Invalid username/password'
    }

    snackbarType = {
        error: 'error-snackbar'
    }
}