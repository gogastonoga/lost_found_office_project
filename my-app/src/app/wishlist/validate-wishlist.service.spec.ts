import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateWishlistService } from './validate-wishlist.service'

describe('ValidateWishlistService Test', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ValidateWishlistService
            ]
        });
    });

    it('should return different > 30 days beetwen two dates', () => {
        let testingDate: Date = new Date('August 15, 2017');
        let result: boolean;
        let service: ValidateWishlistService = new ValidateWishlistService();
        result = service.validateDate(testingDate);
        expect(result).toBe(true);
    });

    it('should return false because date is in future', () => {
        let testingDate: Date = new Date('December 25, 2017');
        let result: boolean;
        let service: ValidateWishlistService = new ValidateWishlistService();
        result = service.validateDate(testingDate);
        expect(result).toBe(false);
    });

    it('should return false because different < 30 days beetwen two dates', () => {
        let testingDate: Date = new Date('September 10, 2017');
        let result: boolean;
        let service: ValidateWishlistService = new ValidateWishlistService();
        result = service.validateDate(testingDate);
        expect(result).toBe(false);
    });

});
