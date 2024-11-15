import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MotivationalContentService } from "./motivationalContent.service";
import { MotivationalContentControllerBase } from "./base/motivationalContent.controller.base";

@swagger.ApiTags("motivationalContents")
@common.Controller("motivationalContents")
export class MotivationalContentController extends MotivationalContentControllerBase {
  constructor(protected readonly service: MotivationalContentService) {
    super(service);
  }
}
