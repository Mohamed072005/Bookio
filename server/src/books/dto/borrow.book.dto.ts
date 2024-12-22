import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, Validate, ValidationArguments, Validator, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: "ReservationIsFutureDate", async: false })
export class ReservationIsFutureDate implements ValidatorConstraintInterface {
    validate(date: Date, args: ValidationArguments): boolean {
        return date > new Date(); // Ensure the date is in the future
    }

    defaultMessage(args: ValidationArguments): string {
        return "The reservation date must be in the future.";
    }
}

@ValidatorConstraint({ name: "ReturnIsFutureDate", async: false })
export class ReturnIsFutureDate implements ValidatorConstraintInterface {
    validate(date: Date, args: ValidationArguments): boolean {        
        this.reservationDate = args.object['reservation_date'];
        this.isFutureDate = date > new Date();
        this.isAfterReservation = date > this.reservationDate;
        
        return this.isFutureDate && this.isAfterReservation;
    }

    private reservationDate: Date;
    private isFutureDate: boolean;
    private isAfterReservation: boolean;

    defaultMessage(args: ValidationArguments): string {
        if (!this.isFutureDate) {
            return "The return date must be in the future.";
        }
        if (!this.isAfterReservation) {
            return "The return date should be greater than reservation date";
        }
        return "Invalid return date";
    }
}


export class BorrowBookDTO {

    @IsNotEmpty()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    @Validate(ReservationIsFutureDate)
    reservation_date: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    @Validate(ReturnIsFutureDate)
    return_date: Date;
}