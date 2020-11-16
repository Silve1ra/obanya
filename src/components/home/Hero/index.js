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

          <v-col
            class="content-info"
          >
          version 1.0.1
          <br/>
          The following pollen families are supported:
          <ol>
            <li>Anadenanthera</li>
            <li>Arecaceae</li>
            <li>Cecropia</li>
            <li>Myrcia</li>
            <li>Poaceae</li>
            <li>Protium</li>
            <li>Schinus</li>
            <li>Serjania</li>
            <li>Syagrus</li>
          </ol>
          </v-col>
        </div>
      </div>
    );
  }
}