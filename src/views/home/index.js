export default {
  name: "Home",
  components: {
    Toolbar: () => import("@/components/Toolbar"),
    Carousel: () => import("@/components/Carousel"),
    Hero: () => import("@/components/Hero"),
    Footer: () => import("@/components/Footer")
  },
  render(h) {
    return(
      <div>
        <Toolbar/>
        <Carousel/>
        <Hero/>
        <Footer/>
      </div>
    );
  }
};