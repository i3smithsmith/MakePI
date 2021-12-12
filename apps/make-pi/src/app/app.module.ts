import { Module } from '@nestjs/common';

import { AuthController } from './auth/auth.controller';
import { AuthModule } from '@make-pi/shared/auth';
import { UserController } from './admin/user/user.controller';
import { AccessControlModule } from 'nest-access-control';

import { roles } from '@make-pi/roles';
import { UsersModule } from '@make-pi/models/users';
import { PaymentController } from './payment/payment.controller';
import { PaymentsModule } from '@make-pi/models/payments';
import { PaymentSourcesModule } from '@make-pi/models/payment-sources';
import { PaymentSourceController } from './payment-source/payment-source.controller';
import { PaymentMethodsModule } from '@make-pi/payment-methods';

@Module({
  imports: [
    PaymentMethodsModule,
    AuthModule,
    UsersModule,
    PaymentsModule,
    PaymentSourcesModule,
    AccessControlModule.forRoles(roles),
  ],
  controllers: [
    AuthController,
    UserController,
    PaymentController,
    PaymentSourceController,
  ],
})
export class AppModule {}
