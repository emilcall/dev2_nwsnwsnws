import express, { Request, Response } from "express";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";
import path from "path";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

  router.get("/", (req: Request, res: Response): void => {
    const news = getNews();
    res.render("index", { title: "Nieuws", news });
  });

router.get("/news/:slug", (req: Request, res: Response): void => {
    const { slug } = req.params;
    const artical = getNewsBySlug(slug);
})
export default router;