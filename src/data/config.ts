const config = {
  title: "Santosh Kumar Jena | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Santosh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Santosh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Santosh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Santosh Kumar Jena",
  email: "skjena7350@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/santosh-kumar-jena/",
    instagram: "https://www.instagram.com/kumarsantoshjena/",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/dev-skjena",
  },
};
export { config };
