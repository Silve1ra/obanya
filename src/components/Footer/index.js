import "./_styles.scss";

export default {
  name: "Footer",
  data: () => ({
    links: [
      {name: 'Home'},
      {name: 'About us'},
      {name: 'Work'},
      {name: 'Info'},
      {name: 'Obanya'}
    ],
  }),
  render(h) {
    return (
      <v-app>
        <v-footer
          padless
          class="footer"
        >
          <v-row
            justify="center"
            no-gutters
          >
            {this.links.map(link => {
              return(
                <v-btn
                  key={link.name}
                  color="dark"
                  text
                  rounded
                  class="my-2"
                >
                  { link.name }
                </v-btn>
              );
            })}
            
            <v-col
              class="lighten-2 py-4 text-center"
              cols="12"
            >
              Palinovic 
            </v-col>
          </v-row>
        </v-footer>
      </v-app>
    );
  }
}