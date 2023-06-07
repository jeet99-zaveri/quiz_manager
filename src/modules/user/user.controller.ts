import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequestDto } from './dto/user.register.req.dto';
import { SETTINGS } from 'src/app.utils';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async userRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    user: UserRegisterRequestDto,
  ): Promise<User> {
    return await this.userService.userRegistration(user);
  }
}
