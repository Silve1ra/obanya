import "./_styles.scss";

export default {
  name: "Hero",
  render(h) {
    return(
      <div>
        <div class="content">
          <span class="title">
            Palinovic
          </span>
          <span class="subtitle">
            Obanya Edition
          </span>
          <div class="content-info">
            Obanya App is destinated to help biologists, botanics, palynologysts and so on, to automatically classify, detect and count pollen grains through images 
          </div>
        </div>
      </div>
    );
  }
}