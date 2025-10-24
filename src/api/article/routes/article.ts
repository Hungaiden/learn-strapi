export default {
  routes: [
    {
      method: "GET",
      path: "/articles/recent", // endpoint bạn muốn test
      handler: "article.findRecent", // controller function
      config: {
        auth: false, // để test thì tắt auth
      },
    },
  ],
};
