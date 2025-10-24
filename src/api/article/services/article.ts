export default {
  async findRecent(limit) {
    return await strapi.db.query("api::article.article").findMany({
      orderBy: { createdAt: "desc" },
      limit: parseInt(limit),
    });
  },
};
