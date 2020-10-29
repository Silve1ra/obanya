export default {
  name: "Toolbar",
  render(h) {
    return(
      <v-card
        color="grey lighten-4"
        flat
        tile
      >
        <v-toolbar dense flat>    
          <v-toolbar-title>Palinovic</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text href="#">Home</v-btn>
          <v-btn text href="#">About us</v-btn>
          <v-btn text href="#">Work</v-btn>
          <v-btn text href="#">Info</v-btn>
          <v-btn text outlined href="classifier">Obanya</v-btn>
        </v-toolbar>
      </v-card>
    );
  }
}