import express, { Request, Response } from "express";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";
import { News, getAllNews } from "./services/newsService";
const router = express.Router();


router.get("/", async (req: Request, res: Response) => {
  const news: News[] = await getAllNews();

  res.render("news", { news, title: "Recent nieuws" });
});

export default router;