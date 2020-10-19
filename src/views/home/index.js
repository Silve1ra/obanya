import "./_styles.scss"

export default {
  name: "Home",
  data: () => ({
    model: ""
  }),
  methods: {
    async classify() {
      const mobilenet = require('@tensorflow-models/mobilenet');
      console.log('Successfully loaded mobilenet');

      // Load the model
      this.model = await mobilenet.load();
      console.log('Successfully loaded model');

      // Make a prediction through the model on our image
      const imgEl = document.getElementById('img');
      const result = await this.model.classify(imgEl);
      console.log(result);
    }
  },
  render(h) {
    return (
      <div class="home">
        <h1>Online Image Classifier</h1>

        {/* <!-- Add an image that we will use to test --> */}
        <img id="img" class="img" crossorigin src="https://i.imgur.com/JlUvsxa.jpg" />
        
        {/* <!-- Add a classify button to trigger the function --> */}
        <button class="btn" onclick={() => this.classify()}>Classify</button>
      </div>
    );
  }
}