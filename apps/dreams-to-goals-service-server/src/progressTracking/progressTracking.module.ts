import { Module } from "@nestjs/common";
import { ProgressTrackingModuleBase } from "./base/progressTracking.module.base";
import { ProgressTrackingService } from "./progressTracking.service";
import { ProgressTrackingController } from "./progressTracking.controller";
import { ProgressTrackingResolver } from "./progressTracking.resolver";

@Module({
  imports: [ProgressTrackingModuleBase],
  controllers: [ProgressTrackingController],
  providers: [ProgressTrackingService, ProgressTrackingResolver],
  exports: [ProgressTrackingService],
})
export class ProgressTrackingModule {}
