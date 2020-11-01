export default {
  name: "Carousel",
  data: () => ({
    items: [
      {
        src: require('@/assets/img/bee1.jpg'),
      },
      {
        src: require('@/assets/img/bee2.jpg'),
      },
      {
        src: require('@/assets/img/bee3.jpg'),
      },
      {
        src: require('@/assets/img/bee4.jpg'),
      }
    ],
  }),
  render(h) {
    return (
      this.$vuetify.breakpoint.width > 400 ?
      <v-carousel
        show-arrows={false}
      >
        {
          this.items.map((item, i) => {
            return (
              <v-carousel-item
                key={i}
                src={item.src}
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            );
          })
        }
      </v-carousel>
      : ""
    );
  }
}