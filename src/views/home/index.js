import "./_styles.scss"

export default {
  name: "Home",
  data: () => ({
    model: "",
    images: []
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
    async classify() {
      const mobilenet = require('@tensorflow-models/mobilenet');
      console.log('Successfully loaded mobilenet');

      // Load the model
      this.model = await mobilenet.load();
      console.log('Successfully loaded model');

      // Make a prediction through the model on our image
      const imgEl = document.getElementById('output_image');
      const results = await this.model.classify(imgEl);
      console.log(results);

      const res = results.map(res => {
        return(`pred: ${res.className} - acc: ${res.probability}`)
      });

      document.getElementById('output_res').innerHTML = res;
    },
  },

  render(h) {
    return (
      <div class="classifier">
        <h1>Online Image Classifier</h1>

        <div class="classifier__input">
          <p>Please, upload an image</p>
          <input type="file" accept="image/*" onchange={(event) => this.uploadImage(event)}></input>
        </div>

        <div class="classifier__image">
          <img id="output_image" />
          <button onclick={() => this.classify()}>Classify</button>
          
        </div>

        <div class="classifier__results" id="output_res"></div>
        <button type="button" class="btn btn-primary">Primary</button>
    </div>
    );
  }
}