export default {
  name: "Home",
  components: {
    Carousel: () => import("@/components/Carousel"),
    Toolbar: () => import("@/components/Toolbar")
  },
  render(h) {
    return(
      <div>
        <Toolbar/>
        <Carousel/>
      </div>
    );
  }
};