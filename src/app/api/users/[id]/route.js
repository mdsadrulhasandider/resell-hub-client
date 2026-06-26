import { updateUser, deleteUser } from "@/controllers/userController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { verifyAdmin } from "@/middleware/verifyAdmin.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const PATCH = makeRouteHandler(updateUser, [verifyJWT, verifyAdmin]);
export const DELETE = makeRouteHandler(deleteUser, [verifyJWT, verifyAdmin]);
