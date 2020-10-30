export default {
  name: "InfoSection",
  data: () => ({
    items: [
      {title: "RESEARCHER YEARS", subtitle: "+7 years", description: "Developing the palynology science, by the automatic pollen grains classification."},
      {title: "POLLEN SPECIES", subtitle: "+ 90 polynical types", description: "The biggest brazilian savanah online pollen species image dataset"},
      {title: "PARTNERS", subtitle: "+ 20 partners", description: "We could count on a lot of partners around the world."},
      {title: "SPECIALIZED APPS", subtitle: "+ 3 Apps", description: "Forensic, Beekeper or Academic. Choose your software version."},
      {title: "CRIME RESOLUTION", subtitle: "+ 7 supported crimes", description: "The real application was demonsted in Campo Grande city, by the forensic expertises."},
      {title: "NATURE PROTECTION", subtitle: "+ 10k hectares", description: "The use of hyperespectral images to care the brazilian savanah vegatation."}
    ]
  }),
  render(h) {
    return (
      <v-container class="grey lighten-5 mb-6">
        <v-row
          class="mb-6"
          justify="center"
          no-gutters
          >
            {
              this.items.map(item => {
                return (
                  <v-col md="auto">
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                    >
                    <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">{ item.title }</div>
                      <v-list-item-title class="headline mb-1">{ item.subtitle }</v-list-item-title>
                      <v-list-item-subtitle>{ item.description }</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    </v-card>
                  </v-col>
                );
              })
            }
        </v-row>
        <v-row
          class="mb-6"
          justify="center"
          no-gutters
          >
            {
              this.items.map(item => {
                return (
                  <v-col md="auto">
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      outlined
                    >
                    <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">{ item.title }</div>
                      <v-list-item-title class="headline mb-1">{ item.subtitle }</v-list-item-title>
                      <v-list-item-subtitle>{ item.description }</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                    </v-card>
                  </v-col>
                );
              })
            }
        </v-row>
      </v-container>
    );
  }
}