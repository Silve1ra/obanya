import "./_styles.scss";

export default {
  name: "Home",
  components: {
    Toolbar: () => import("@/components/Toolbar"),
    Carousel: () => import("@/components/Carousel"),
    Hero: () => import("@/components/Hero"),
    InfoSection: () => import("@/components/InfoSection"),
    Footer: () => import("@/components/Footer")
  },
  render(h) {
    return(
      <div class="home">
        <div class="home-content">
          <Toolbar/>
          <Carousel/>
          <Hero/>
          <InfoSection/>
        </div>
        <Footer/>
      </div>
    );
  }
};