import { ErrorHandler } from "@angular/core";


export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occurred.'); // real world use a toast notification
        console.log(error);  // real world log this error on the server
    }
}