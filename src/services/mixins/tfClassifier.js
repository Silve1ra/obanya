export default {
  methods: {
    async classify() {
      const mobilenet = require('@tensorflow-models/mobilenet');
      console.log('Successfully loaded mobilenet');

      this.model = await mobilenet.load();
      console.log('Successfully loaded model');

      const imgEl = document.getElementById('output_image');
      const results = await this.model.classify(imgEl);
      console.log(results);

      let ul = document.getElementById('output_res');

      results.forEach(res => {
        let li = document.createElement('li');
        li.innerText = `pred: ${res.className} - acc: ${res.probability}`;
        ul.append(li);
      });
    }
  }
}