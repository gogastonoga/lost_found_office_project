import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ValidateWishlistService {

    today: Date = new Date();
    validateDate(date: Date): boolean {
        let todayTime = this.today.getTime();
        let dateTime = date.getTime();
        if (todayTime > dateTime) {
            let time = todayTime - dateTime;
            let days = (time / 86400000);
            if (days > 30) {
                return true;
            }
        }
        return false;
    }

}
