import { getProducts, createProduct } from "@/controllers/productController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { verifySeller } from "@/middleware/verifySeller.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const GET = makeRouteHandler(getProducts);
export const POST = makeRouteHandler(createProduct, [verifyJWT, verifySeller]);
