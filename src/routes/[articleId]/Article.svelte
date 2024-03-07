<script lang="ts">
  import ArticleTags from "./ArticleTags.svelte";
  import ArticleActions from "./ArticleActions.svelte";
  import ArticleDetails from "./ArticleDetails.svelte";
  import type { NDKEvent } from "@nostr-dev-kit/ndk";
  import SvelteMarkdown from "svelte-markdown";

  export let article: NDKEvent;

  const content = article.content;
  const title = article.tagValue("title");
  const image = article.tagValue("image");
  const summary = article.tagValue("summary");
</script>

<div class="HomeBodyListArticle">
  <div class="HBLA_Inside">
    <div
      class="HBLA_Inside_Featuredimg"
      style="background: url('{image}') center / cover no-repeat;"
    ></div>
    <div class="HBLA_Inside_Title">
      <h2 class="HBLA_Inside_TitleText">
        {title}
      </h2>
    </div>
    <div class="HBLA_Inside_Body">
      <blockquote>
        {summary}
      </blockquote>
      <SvelteMarkdown source={content} />
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

  .HBLA_Inside_Body :global(p) {
    width: 100%;
    margin: 0;
  }

  .HBLA_Inside_Body :global(h2) {
    width: 100%;
    text-align: start;
    font-size: 34px;
    line-height: 1.2;
  }

  .HBLA_Inside_Body :global(img) {
    width: 100%;
    margin: 15px 0;
    padding-top: 56.25%;
    background: #232323;
    border-radius: 10px;
  }

  .HBLA_Inside_Body :global(iframe) {
    border: 0;
  }

  .HBLA_Inside_Body :global(blockquote) {
    width: 100%;
    border-radius: 0 10px 10px 0;
    border-left: solid 6px rgba(255, 255, 255, 0.1);
    padding: 25px;
    background: #232323;
    font-style: italic;
    color: rgba(255, 255, 255, 0.75);
    padding: 1rem 0 1rem 2rem;
    margin-block: 1rem;
  }
</style>
