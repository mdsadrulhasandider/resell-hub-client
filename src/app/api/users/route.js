import { getAllUsers } from "@/controllers/userController.js";
import { verifyJWT } from "@/middleware/verifyJWT.js";
import { verifyAdmin } from "@/middleware/verifyAdmin.js";
import { makeRouteHandler } from "@/lib/api-adapter.js";

export const GET = makeRouteHandler(getAllUsers, [verifyJWT, verifyAdmin]);
