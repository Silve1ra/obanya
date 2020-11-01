import "./_styles.scss";

export default {
  name: "ImageCard",
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
      <div>
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
          <v-text-field
            id="url-image"
            counter="100"
            hint="PNG, JPG, JPEG ..."
            label="https://"
          ></v-text-field>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            onclick={() => {
              let imgUrl = document.getElementById("url-image").value;
              let img = document.getElementById("output_image");
              img.src = imgUrl;}}
            >
              Load
            </v-btn>
        </div>
        <div class="row">
          <img id="output_image" width="400" height="400" maxlength="10" crossorigin='anonymous'/><br></br>
        </div>
      </div>
    );
  }
}