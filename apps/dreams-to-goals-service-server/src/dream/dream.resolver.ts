import * as graphql from "@nestjs/graphql";
import { DreamResolverBase } from "./base/dream.resolver.base";
import { Dream } from "./base/Dream";
import { DreamService } from "./dream.service";

@graphql.Resolver(() => Dream)
export class DreamResolver extends DreamResolverBase {
  constructor(protected readonly service: DreamService) {
    super(service);
  }
}
