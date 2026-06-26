import { getReviews, createReview } from "@/controllers/reviewController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const GET = makeRouteHandler(getReviews);
export const POST = makeRouteHandler(createReview, [verifyJWT]);
