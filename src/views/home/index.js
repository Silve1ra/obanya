import * as tf from '@tensorflow/tfjs';

import "./_styles.scss";

const MODEL_PATH = 'http://localhost:3000/model.json';

export default {
  name: "Home",
  data: () => ({
    images: [],
    CLASSES: {
      0: "Anadenanthera",
      1: "Myrcia",
      2: "Arecaceae",
      3: "Cecropia",
      4: "Poaceae",
      5: "Protium",
      6: "Schinus",
      7: "Serjania",
      8: "Syagrus"
    },
    classifier: "generic"
  }),
  methods: {
    uploadImage(event) {
      var reader = new FileReader();

      reader.onload = () => {
        var output = document.getElementById('output_image');
        output.src = reader.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    },
    async generenicClassify() {
      const mobilenet = require('@tensorflow-models/mobilenet');
      console.log('Successfully loaded mobilenet');

      // Load the model
      this.model = await mobilenet.load();
      console.log('Successfully loaded model');

      // Make a prediction through the model on our image
      const imgEl = document.getElementById('output_image');
      const results = await this.model.classify(imgEl);
      console.log(results);

      let ul = document.getElementById('output_res');

      // Display the results
      results.forEach(res => {
        let li = document.createElement('li');
        li.innerText = `pred: ${res.className} - acc: ${res.probability}`;
        ul.append(li);
      });
    },
    async pollenClassify() {
      console.log("starting ...");

      const model = await tf.loadLayersModel(MODEL_PATH);
      console.log("model loaded...");

      // Make a prediction through the model on our image
      const imgEl = document.getElementById('output_image');
      console.log("image loaded ...");

      // pre-process the image
      let tensor = tf.browser.fromPixels(imgEl)
        .resizeNearestNeighbor([256,256])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();
      console.log("image pre-processed ...");

      // make predictions
      let preds = await model.predict(tensor).data();

      let results = Array.from(preds)
        .map((prob, index) => {
          return {
            probability: prob,
            className: this.CLASSES[index]
          }
        }).sort((a,b) => {
          return b.probability - a.probability;
        });
      console.log(results);

      // Display the results
      let ul = document.getElementById('output_res');
      results.forEach(res => {
        let li = document.createElement('li');
        li.innerText = `pred: ${res.className} - acc: ${res.probability}`;
        ul.append(li);
      });

      console.log("classification finished")
    },
    selectClassifier() {
      var selectBox = document.getElementById("selected-classifier");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      this.classifier = selectedValue;
    }
  },

  render(h) {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-auto">
            <h2 class="ml-3">Image</h2>
            <div class="row">
              <p>Please, upload an image</p>
            </div>
            <div class="row">
              <input type="file" accept="image/*" onchange={(event) => this.uploadImage(event)}/>
            </div>
            <div class="row">
              <img id="output_image" width="400" height="400" maxlength="10"/><br></br>
            </div>
            <div class="row">
            <select id="selected-classifier" class="btn btn-light" onchange={() => this.selectClassifier()}>
              <option value="generic">Generic</option>
              <option value="pollen">Pollen</option>
            </select>
              <button class="btn btn-outline-primary" onclick={() => this.classifier == "generic" ? this.generenicClassify() : this.pollenClassify()}>Classify</button>
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