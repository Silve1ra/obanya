import "./_styles.scss";

export default {
  name: "Home",
  components: {
    Toolbar: () => import("@/components/home/Toolbar"),
    Carousel: () => import("@/components/home/Carousel"),
    Hero: () => import("@/components/home/Hero"),
    InfoSection: () => import("@/components/home/InfoSection"),
    Footer: () => import("@/components/home/Footer")
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