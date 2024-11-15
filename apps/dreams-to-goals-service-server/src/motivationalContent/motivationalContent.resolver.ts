import * as graphql from "@nestjs/graphql";
import { MotivationalContentResolverBase } from "./base/motivationalContent.resolver.base";
import { MotivationalContent } from "./base/MotivationalContent";
import { MotivationalContentService } from "./motivationalContent.service";

@graphql.Resolver(() => MotivationalContent)
export class MotivationalContentResolver extends MotivationalContentResolverBase {
  constructor(protected readonly service: MotivationalContentService) {
    super(service);
  }
}
