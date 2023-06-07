import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user.register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async userRegistration(user: UserRegisterRequestDto): Promise<User> {
    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;

    return await newUser.save();
  }
}
