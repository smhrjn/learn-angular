
import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

    public log = (message: string) => {
        console.log(message);
    }

}

export const simpleLogger = {

    log: (message: string) => {
        console.log(message + ' from simple logger');
    }

}
