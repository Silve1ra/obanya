export default {
  name: "VCarousel",
  data: () => ({
    items: [
      {
        src: 'https://img5.goodfon.com/wallpaper/nbig/8/a8/tsvety-romashki-leto-trava-pchela-nasekomoe-pyltsa-belye-zhe.jpg',
      },
      {
        src: 'https://img5.goodfon.com/wallpaper/nbig/f/12/tsvetok-tsvety-pchela-razmytie-nasekomoe-opylenie-leto-sad-m.jpg',
      },
      {
        src: 'https://img5.goodfon.com/wallpaper/nbig/3/f5/makro-pchela-tsvetok-zheltyi-tsvety-zheltye-goluboi-fon-leto.jpg',
      },
      {
        src: 'https://s2.best-wallpaper.net/wallpaper/2560x1600/1611/White-cherry-flowers-insect-bee-spring_2560x1600.jpg',
      }
    ],
  }),
  render(h) {
    return (
      <v-container>
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
      </v-container>
    );
  }
}