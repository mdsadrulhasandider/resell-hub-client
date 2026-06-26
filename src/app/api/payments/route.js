import { createPayment, getPayments } from "@/controllers/paymentController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const POST = makeRouteHandler(createPayment, [verifyJWT]);
export const GET = makeRouteHandler(getPayments, [verifyJWT]);
