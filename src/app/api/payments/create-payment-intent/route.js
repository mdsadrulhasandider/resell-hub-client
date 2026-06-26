import { createPaymentIntent } from "@/controllers/paymentController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const POST = makeRouteHandler(createPaymentIntent, [verifyJWT]);
