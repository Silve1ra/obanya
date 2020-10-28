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
          <img id="output_image" width="400" height="400" maxlength="10"/><br></br>
        </div>
      </div>
    );
  }
}