import tfClassifierMixin from "@/services/mixins/tfClassifier";
import pollenClassifierMixin from "@/services/mixins/pollenClassifier";

const json = "https://obanya-api.herokuapp.com/"

import "./_styles.scss";

export default {
  name: "Home",
  mixins: [
    tfClassifierMixin, 
    pollenClassifierMixin
  ],
  components: {
    ImageCard: () => import("@/components/classifier/ImageCard"),
    Predictions: () => import("@/components/classifier/Predictions")
  },
  data: () => ({
    images: [],
    classifier: "",
  }),
  render(h) {
    const tfClassifier = tfClassifierMixin.methods;
    const pollenClassifier = pollenClassifierMixin.methods;

    return (
      <div class="classifier">
        <div class="classifier__image">
          <ImageCard/>
          <div class="row">
          <v-radio-group
              id="selected-classifier" 
              row
            >
              <v-radio
                label="pollen"
                value="pollen"
                onchange={() => this.classifier="pollen"}
              ></v-radio>
              <v-radio
                label="generic"
                value="generic"
                onchange={() => this.classifier="generic"}
              ></v-radio>
            </v-radio-group>

            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              onclick={() => this.classifier == "generic" 
                ? tfClassifier.classify() 
                : pollenClassifier.classify(json)}
            >
              Classify
            </v-btn>
          </div>
          <Predictions/>
        </div>
      </div>
    );
  }
}