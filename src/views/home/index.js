export default {
  name: "Home",
  components: {
    Carousel: () => import("@/components/Carousel"),
    Toolbar: () => import("@/components/Toolbar"),
    Footer: () => import("@/components/Footer")
  },
  render(h) {
    return(
      <div>
        <Toolbar/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
};