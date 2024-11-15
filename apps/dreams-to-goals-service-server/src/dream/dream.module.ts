import { Module } from "@nestjs/common";
import { DreamModuleBase } from "./base/dream.module.base";
import { DreamService } from "./dream.service";
import { DreamController } from "./dream.controller";
import { DreamResolver } from "./dream.resolver";

@Module({
  imports: [DreamModuleBase],
  controllers: [DreamController],
  providers: [DreamService, DreamResolver],
  exports: [DreamService],
})
export class DreamModule {}
