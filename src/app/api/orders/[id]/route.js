import { updateOrder } from "@/controllers/orderController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const PATCH = makeRouteHandler(updateOrder, [verifyJWT]);
