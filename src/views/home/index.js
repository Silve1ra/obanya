import InfoSection from "../../components/InfoSection";

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
      <div>
        <Toolbar/>
        <Carousel/>
        <Hero/>
        <InfoSection/>
        <Footer/>
      </div>
    );
  }
};