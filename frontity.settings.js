import muiTheme from "./packages/mars-theme/src/config/Muitheme";

const settings = {
  name: "frontity-brava",
  state: {
    frontity: {
      url: "https://frontity.bravastudio.net/",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          ...muiTheme,

          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://frontity.bravastudio.net/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
