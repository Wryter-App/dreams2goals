import * as graphql from "@nestjs/graphql";
import { ProgressTrackingResolverBase } from "./base/progressTracking.resolver.base";
import { ProgressTracking } from "./base/ProgressTracking";
import { ProgressTrackingService } from "./progressTracking.service";

@graphql.Resolver(() => ProgressTracking)
export class ProgressTrackingResolver extends ProgressTrackingResolverBase {
  constructor(protected readonly service: ProgressTrackingService) {
    super(service);
  }
}
