import * as tf from '@tensorflow/tfjs';

const CLASSES = {
  0: "Anadenanthera",
  1: "Arecaceae",
  2: "Cecropia",
  3: "Myrcia",
  4: "Poaceae",
  5: "Protium",
  6: "Schinus",
  7: "Serjania",
  8: "Syagrus"
};

export default {
  methods: {
    async classify(modelPath) {
      console.log("starting ...");

      const model = await tf.loadLayersModel(modelPath);
      console.log("model loaded...");

      const imgEl = document.getElementById('output_image');
      console.log("image loaded ...");

      let tensor = tf.browser.fromPixels(imgEl)
        .resizeNearestNeighbor([256,256])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();
      console.log("image pre-processed ...");

      let preds = await model.predict(tensor).data();

      let results = Array.from(preds)
        .map((prob, index) => {
          return {
            probability: prob,
            className: CLASSES[index]
          }
        }).sort((a,b) => {
          return b.probability - a.probability;
        }).slice(0,1);
      console.log("image classified ...");

      let ul = document.getElementById('output_res');
      results.forEach(res => {
        let li = document.createElement('li');
        // li.innerText = `${res.className} - accuracy: ${res.probability}`;
        li.innerText = `prediction: ${res.className}`;
        ul.append(li);
      });
    }
  }
}