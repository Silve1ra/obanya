import "./_styles.scss";

export default {
  name: "Hero",
  render(h) {
    return(
      <div>
        <div class="content">
          <span class="title">
            Palinovic
          </span>
          <span class="subtitle">
            Obanya Edition
          </span>
          <v-col 
            class="content-info"
            md="4"
            sm="2">
            Obanya App is destinated to help biologists, botanics, palynologysts and so on, to automatically classify, detect and count pollen grains through images 
          </v-col>
        </div>
      </div>
    );
  }
}