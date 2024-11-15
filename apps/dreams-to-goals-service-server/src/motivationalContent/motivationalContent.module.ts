import { Module } from "@nestjs/common";
import { MotivationalContentModuleBase } from "./base/motivationalContent.module.base";
import { MotivationalContentService } from "./motivationalContent.service";
import { MotivationalContentController } from "./motivationalContent.controller";
import { MotivationalContentResolver } from "./motivationalContent.resolver";

@Module({
  imports: [MotivationalContentModuleBase],
  controllers: [MotivationalContentController],
  providers: [MotivationalContentService, MotivationalContentResolver],
  exports: [MotivationalContentService],
})
export class MotivationalContentModule {}
