import "./_styles.scss";

export default {
  name: "Footer",
  render(h) {
    return (
      <v-footer
        padless
        class="footer"
        color="#354f52"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col align="center">
            <v-btn
              color="#52796f"
              text
              rounded
              class="my-2"
            >
              Palinovic - Obanya Edition - 2020
            </v-btn>
          </v-col>
        </v-row>
      </v-footer>
    );
  }
}