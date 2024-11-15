import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DreamService } from "./dream.service";
import { DreamControllerBase } from "./base/dream.controller.base";

@swagger.ApiTags("dreams")
@common.Controller("dreams")
export class DreamController extends DreamControllerBase {
  constructor(protected readonly service: DreamService) {
    super(service);
  }
}
