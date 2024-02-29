<script>
  import ArticleTags from "./ArticleTags.svelte";
  import ArticleActions from "./ArticleActions.svelte";
  import ArticleDetails from "./ArticleDetails.svelte";
</script>

<div class="HomeBodyListArticle">
  <div class="HBLA_Inside">
    <div
      class="HBLA_Inside_Featuredimg"
      style="background: url('https://64.media.tumblr.com/79ce7b823ac1f0c0497f86284690406f/tumblr_or54bjE1wY1viq5yso3_540.gif') center / cover no-repeat;"
    ></div>
    <div class="HBLA_Inside_Title">
      <h2 class="HBLA_Inside_TitleText">
        This Is A Blog Title That Will Be The Most Ambitious Title In The World!
      </h2>
    </div>
    <div class="HBLA_Inside_Body">
      <p class="HBLA_Inside_BodyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.<br /><br />Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
        cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
        imperdiet.<br /><br />Duis sagittis ipsum. Praesent mauris. Fusce nec
        tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
        eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.<br
        /><br />Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.<br
        /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        nec odio. Praesent libero.<br />
      </p>

      <div class="HBLA_Inside_BodyVideoWrapper">
        <iframe
          class="HBLA_Inside_BodyVideo"
          allowfullscreen
          frameborder="0"
          src="https://www.youtube.com/embed/HGwWNFV5CE8"
          width="100%"
          height="100%"
        ></iframe>
      </div>

      <p class="HBLA_Inside_BodyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.<br /><br />Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
        cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
        imperdiet.<br />
      </p>

      <div
        class="HBLA_Inside_BodyImg16by9"
        style="background: url('https://64.media.tumblr.com/89387abb870918aaee62fadce6f068f7/tumblr_pjbrtpClzq1xggw0so1_500.gif') center / cover no-repeat;"
      ></div>

      <p class="HBLA_Inside_BodyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.<br />
      </p>

      <div class="blockquoteMainWrapper">
        <blockquote class="blockquoteMain">
          <p class="blockquoteMainText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
        </blockquote>
      </div>

      <p class="HBLA_Inside_BodyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet.<br />
      </p>

      <ArticleTags />
    </div>
  </div>

  <ArticleActions />

  <ArticleDetails />
</div>

<style>
  .HomeBodyListArticle {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    grid-gap: 25px;
  }

  .HBLA_Inside {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    background: linear-gradient(to top right, #262626, #292929, #262626);
    border-radius: 15px;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .HBLA_Inside_Featuredimg {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 56.25%;
  }

  .HBLA_Inside_Title {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3% 7%;
    color: rgba(255, 255, 255, 0.85);
  }

  .HBLA_Inside_Body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 7%;
    color: rgba(255, 255, 255, 0.75);
    padding-top: 0;
  }

  .HBLA_Inside_BodyText {
    width: 100%;
    margin: 0;
  }

  .HBLA_Inside_TitleText {
    width: 100%;
    text-align: start;
    font-size: 34px;
    line-height: 1.2;
  }

  .HBLA_Inside_BodyImg16by9 {
    width: 100%;
    margin: 15px 0;
    padding-top: 56.25%;
    background: #232323;
    /*box-shadow: inset 0 0 8px 0 rgb(0,0,0,0.1);*/
    border-radius: 10px;
  }

  .HBLA_Inside_BodyVideo {
    background: #232323;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .HBLA_Inside_BodyVideoWrapper {
    margin: 15px 0;
    padding-top: 56.25%;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
  }

  .blockquoteMain {
    width: 100%;
    border-radius: 0 10px 10px 0;
    border-left: solid 6px rgba(255, 255, 255, 0.1);
    padding: 25px;
    background: #232323;
    font-style: italic;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  .blockquoteMainText {
  }

  .blockquoteMainWrapper {
    padding: 0 0 0 25px;
    margin: 15px 0;
    width: 100%;
  }
</style>
