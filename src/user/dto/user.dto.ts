import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UserDTO extends BaseDTO {

    @IsNotEmpty()
    userName!: string;
    
    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    lastName!: string;

    @IsNotEmpty()
    password!: string;
    
    @IsNotEmpty()
    city!: string;

    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    province!: string;

}