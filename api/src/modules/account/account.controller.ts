import { AuthGuard } from "src/guards/auth.guard";
import { AccountService } from "./account.service";
import { RegisterDto } from "./dto/register.dto";

import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";

@Controller("account")
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@Post("register")
	async register(@Body() body: RegisterDto): Promise<{ message: string }> {
		return await this.accountService.register(body);
	}

	@Get("my-profile")
	@UseGuards(AuthGuard)
	async getMyProfile(@Req() request: Request) {
		return await this.accountService.getAccoutData(request["accountId"]);
	}
}
