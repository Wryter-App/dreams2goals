/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProgressTrackingService } from "../progressTracking.service";
import { ProgressTrackingCreateInput } from "./ProgressTrackingCreateInput";
import { ProgressTracking } from "./ProgressTracking";
import { ProgressTrackingFindManyArgs } from "./ProgressTrackingFindManyArgs";
import { ProgressTrackingWhereUniqueInput } from "./ProgressTrackingWhereUniqueInput";
import { ProgressTrackingUpdateInput } from "./ProgressTrackingUpdateInput";

export class ProgressTrackingControllerBase {
  constructor(protected readonly service: ProgressTrackingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProgressTracking })
  async createProgressTracking(
    @common.Body() data: ProgressTrackingCreateInput
  ): Promise<ProgressTracking> {
    return await this.service.createProgressTracking({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProgressTracking] })
  @ApiNestedQuery(ProgressTrackingFindManyArgs)
  async progressTrackings(
    @common.Req() request: Request
  ): Promise<ProgressTracking[]> {
    const args = plainToClass(ProgressTrackingFindManyArgs, request.query);
    return this.service.progressTrackings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProgressTracking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async progressTracking(
    @common.Param() params: ProgressTrackingWhereUniqueInput
  ): Promise<ProgressTracking | null> {
    const result = await this.service.progressTracking({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProgressTracking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgressTracking(
    @common.Param() params: ProgressTrackingWhereUniqueInput,
    @common.Body() data: ProgressTrackingUpdateInput
  ): Promise<ProgressTracking | null> {
    try {
      return await this.service.updateProgressTracking({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProgressTracking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgressTracking(
    @common.Param() params: ProgressTrackingWhereUniqueInput
  ): Promise<ProgressTracking | null> {
    try {
      return await this.service.deleteProgressTracking({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
