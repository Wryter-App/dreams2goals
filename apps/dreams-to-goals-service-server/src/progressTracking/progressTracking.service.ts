import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgressTrackingServiceBase } from "./base/progressTracking.service.base";

@Injectable()
export class ProgressTrackingService extends ProgressTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
