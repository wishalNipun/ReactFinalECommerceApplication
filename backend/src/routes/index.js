const { Router } = require("express");
const ItemRoutes = require("../routes/ItemRoutes");
const router = Router();

const url_prefix = "/genix/v1";

router.use(`${url_prefix}/post`, new ItemRoutes.getRouter());
// router.use(`${url_prefix}/user`, new UserRoutes().getRouter());
// router.use(`${url_prefix}/like`, new LikeRoutes().getRouter());
// router.use(`${url_prefix}/friend`, new FriendRoutes().getRouter());

module.exports=router;