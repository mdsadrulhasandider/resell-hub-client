import { register } from "@/controllers/authController.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const POST = makeRouteHandler(register);
