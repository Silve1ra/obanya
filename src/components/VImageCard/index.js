export default {
  name: "VImageCard",
  methods: {
    uploadImage(event) {
      var reader = new FileReader();

      reader.onload = () => {
        var output = document.getElementById('output_image');
        output.src = reader.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  },
  render(h) {
    return (
      <div class="col-md-auto">
        <h2 class="ml-3">Image</h2>
        <div class="row">
          <p>Please, upload an image</p>
        </div>
        <div class="row">
          <input type="file" accept="image/*" onchange={(event) => this.uploadImage(event)}/>
        </div>
        <div class="row">
          Or paste an image url
        </div>
        <div class="row">
          <input id="url-image" type="text" placeholder="https://" />
          <button onclick={() => {
            let imgUrl = document.getElementById("url-image").value;
            let img = document.getElementById("output_image");
            img.src = imgUrl;
          }}>Load</button>
        </div>
        <div class="row">
          <img id="output_image" width="400" height="400" maxlength="10" crossorigin='anonymous'/><br></br>
        </div>
      </div>
    );
  }
}