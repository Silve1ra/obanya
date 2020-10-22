import "./_styles.scss";

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

      let ul = document.getElementById('output_res');

      // Display the results
      results.forEach(res => {
        let li = document.createElement('li');
        li.innerText = `pred: ${res.className} - acc: ${res.probability}`;
        ul.append(li);
      });
    },
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
              <button onclick={() => this.classify()}>Classify</button>
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