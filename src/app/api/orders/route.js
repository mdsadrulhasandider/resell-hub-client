import { getOrders, createOrder } from "@/controllers/orderController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const GET = makeRouteHandler(getOrders, [verifyJWT]);
export const POST = makeRouteHandler(createOrder, [verifyJWT]);
