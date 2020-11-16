import "./_styles.scss";

export default {
  name: "Toolbar",
  data: () => ({
    openDrawer: false,
    group: null,
  }),
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  },
  render(h) {
    return(
      <v-app-bar class="items" flat color="#52796f">
        <v-toolbar-title style="color: #2f3e46">Palinovic</v-toolbar-title>
        <v-spacer></v-spacer>
        {
          this.isMobile() ? (
            <div>
              <v-btn text disabled outlined href="classifier">Obanya</v-btn>
            </div>
          ) : (
            <v-toolbar-items>
              <v-btn text disabled href="#">Home</v-btn>
              <v-btn text disabled href="#">About us</v-btn>
              <v-btn text disabled href="#">Work</v-btn>
              <v-btn text disabled href="#">Info</v-btn>
              <v-btn text outlined href="classifier">Obanya</v-btn>
            </v-toolbar-items>
          )
        }
      </v-app-bar>
    );
  }
}