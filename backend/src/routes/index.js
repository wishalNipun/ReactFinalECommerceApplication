const express = require('express');
const router = express.Router();
const CustomerRoutes = require('./CustomerRoutes');
// const ItemRoutes = require('./ItemRoutes');

const url_prefix = "/api/v1";

 router.use(`${url_prefix}/customer`, new CustomerRoutes().getRouter());
// router.use(`${url_prefix}/item`, new ItemRoutes().getRouter());
module.exports = router;