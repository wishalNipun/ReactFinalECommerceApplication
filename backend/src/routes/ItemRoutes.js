const express = require("express");
const { Router } = require("express");
const ItemController = require("../controller/ItemController");
const router = require(".");

class ItemRoutes {
  constructor() {
    this.router = Router();
    this.itemController = new ItemController();

    this.configRoutes();
  }

  configRoutes() {
    this.router.post("/", this.itemController.saveItem);
    // this.router.get("/", this.postController.retrieveAllPosts);
    // this.router.put("/:id", this.postController.updatePost);
    // this.router.delete("/:id", this.postController.deletePost);
  }

   getRouter() {
    return this.router;
  }
}

module.exports={
    getRouter: ()=> router
};