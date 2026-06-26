import { getProductById, updateProduct, deleteProduct } from "@/controllers/productController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { verifySeller } from "@/middleware/verifySeller.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const GET = makeRouteHandler(getProductById);
export const PATCH = makeRouteHandler(updateProduct, [verifyJWT, verifySeller]);
export const DELETE = makeRouteHandler(deleteProduct, [verifyJWT, verifySeller]);
