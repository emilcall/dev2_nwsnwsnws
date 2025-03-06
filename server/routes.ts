import express, { Request, Response } from "express";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";

const router = express.Router();


router.get("/", (req: Request, res: Response): void => {
  const news = getNews();
  console.log(news)
  res.render("index", { title: "Nieuws", news });
});

router.get("/news/:slug", (req: Request, res: Response): void => {
    const { slug } = req.params;
    const article = getNewsBySlug(slug);
    res.render("news", { article, title: "Nieuwsdetail"})
})

export default router;