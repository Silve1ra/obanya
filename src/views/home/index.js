export default {
  name: "Home",
  components: {
    VCarouselImg: () => import("@/components/VCarouselImg")
  },
  render(h) {
    return(
      <div>
        <VCarouselImg/>
      </div>
    );
  }
};