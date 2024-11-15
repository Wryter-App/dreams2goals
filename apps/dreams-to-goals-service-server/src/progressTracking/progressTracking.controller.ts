import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgressTrackingService } from "./progressTracking.service";
import { ProgressTrackingControllerBase } from "./base/progressTracking.controller.base";

@swagger.ApiTags("progressTrackings")
@common.Controller("progressTrackings")
export class ProgressTrackingController extends ProgressTrackingControllerBase {
  constructor(protected readonly service: ProgressTrackingService) {
    super(service);
  }
}
