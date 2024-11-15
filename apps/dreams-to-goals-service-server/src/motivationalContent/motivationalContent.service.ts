import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MotivationalContentServiceBase } from "./base/motivationalContent.service.base";

@Injectable()
export class MotivationalContentService extends MotivationalContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
