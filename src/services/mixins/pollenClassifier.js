import * as tf from '@tensorflow/tfjs';

const CLASSES = {
  0: "Anadenanthera",
  1: "Myrcia",
  2: "Arecaceae",
  3: "Cecropia",
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
        });
      console.log(results);

      let ul = document.getElementById('output_res');
      results.forEach(res => {
        let li = document.createElement('li');
        li.innerText = `pred: ${res.className} - acc: ${res.probability}`;
        ul.append(li);
      });

      console.log("classification finished");
    }
  }
}