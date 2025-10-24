export default {
  async findRecent(ctx) {
    const limit = ctx.query.limit || 5;
    const entities = await strapi
      .service("api::article.article")
      .findRecent(limit);
    return entities;
  },
};
