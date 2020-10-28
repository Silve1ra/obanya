import tfClassifierMixin from "@/services/mixins/tfClassifier";
import pollenClassifierMixin from "@/services/mixins/pollenClassifier";

import "./_styles.scss";

const MODEL_PATH = 'http://localhost:3000/model.json';

export default {
  name: "Home",
  mixins: [
    tfClassifierMixin, 
    pollenClassifierMixin
  ],
  components: {
    VImageCard: () => import("@/components/VImageCard")
  },
  data: () => ({
    images: [],
    classifier: "generic"
  }),
  methods: {
    selectClassifier() {
      var selectBox = document.getElementById("selected-classifier");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      this.classifier = selectedValue;
    }
  },

  render(h) {
    const tfClassifier = tfClassifierMixin.methods;
    const pollenClassifier = pollenClassifierMixin.methods;

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-auto">
            <VImageCard/>
            <div class="row">
            <select id="selected-classifier" class="btn btn-light" onchange={() => this.selectClassifier()}>
              <option value="generic">Generic</option>
              <option value="pollen">Pollen</option>
            </select>
              <button class="btn btn-outline-primary" onclick={() => this.classifier == "generic" ? tfClassifier.classify() : pollenClassifier.classify(MODEL_PATH)}>Classify</button>
            </div>
          </div>

          <div class="col-md-auto">
            <h2 class="ml-3">Predictions</h2>
            <ol id="output_res"></ol>
          </div>
        </div>
      </div>
    );
  }
}