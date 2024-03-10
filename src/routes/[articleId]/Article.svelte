<script lang="ts">
  import ArticleTags from "./ArticleTags.svelte";
  import ArticleActions from "./ArticleActions.svelte";
  import ArticleDetails from "./ArticleDetails.svelte";
  import { NDKKind, type NDKEvent } from "@nostr-dev-kit/ndk";
  import SvelteMarkdown from "svelte-markdown";
  import { onMount } from "svelte";
  import ndk from "$lib/stores/ndk";
  import { reactions } from "$lib/stores/reactions";

  export let article: NDKEvent;

  const id = article.id;
  const content = article.content;
  const title = article.tagValue("title");
  const image = article.tagValue("image");
  const summary = article.tagValue("summary");
  const createdAt = article.created_at;
  const publishedAt = article.tagValue("published_at");
  const client = article.tagValue("client");
  const tags = Array.from(
    new Set(article.getMatchingTags("t").map((t) => t[1]))
  );

  let zaps: NDKEvent[] = [];

  onMount(async () => {
    const events = Array.from(
      await $ndk.fetchEvents({
        kinds: [NDKKind.Reaction, NDKKind.Zap],
        "#e": [id],
      })
    );

    reactions.set(events.filter((e) => e.kind === NDKKind.Reaction));
    zaps = events.filter((e) => e.kind === NDKKind.Zap);
  });
</script>

<div class="HomeBodyListArticle">
  <div class="HBLA_Inside">
    {#if image}
      <img class="HBLA_Inside_Featuredimg" src={image} alt={title} />
    {/if}
    {#if title}
      <div class="HBLA_Inside_Title">
        <h2 class="HBLA_Inside_TitleText">
          {title}
        </h2>
      </div>
    {/if}
    <div class="HBLA_Inside_Body">
      <base target="_blank" />
      {#if summary}
        <blockquote>
          {summary}
        </blockquote>
      {/if}
      <SvelteMarkdown source={content} />
      <ArticleTags {tags} />
    </div>
  </div>
  <ArticleActions {article} {zaps} />
  <ArticleDetails {createdAt} {publishedAt} {client} />
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
    height: auto;
    object-fit: contain;
  }

  .HBLA_Inside_Title {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5%;
    align-items: center;
    color: rgba(255, 255, 255, 0.85);
  }

  .HBLA_Inside_Body {
    width: 100%;
    padding: 5% 7%;
    color: rgba(255, 255, 255, 0.75);
  }

  .HBLA_Inside_Body :global(p) {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .HBLA_Inside_Body :global(a) {
    background-color: transparent;
    color: rgba(70, 70, 255, 0.85);
    text-decoration: none;
  }

  .HBLA_Inside_Body :global(b),
  .HBLA_Inside_Body :global(strong) {
    font-weight: 600;
  }

  .HBLA_Inside_Body :global(h1),
  .HBLA_Inside_Body :global(h2),
  .HBLA_Inside_Body :global(h3),
  .HBLA_Inside_Body :global(h4),
  .HBLA_Inside_Body :global(h5),
  .HBLA_Inside_Body :global(h6) {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .HBLA_Inside_Body :global(h1) {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid #21262d;
  }

  .HBLA_Inside_Body :global(h2) {
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: 1.5em;
  }

  .HBLA_Inside_Body :global(h3) {
    font-weight: 600;
    font-size: 1.25em;
  }

  .HBLA_Inside_Body :global(h4) {
    font-weight: 600;
    font-size: 1em;
  }

  .HBLA_Inside_Body :global(h5) {
    font-weight: 600;
    font-size: 0.875em;
  }

  .HBLA_Inside_Body :global(h6) {
    font-weight: 600;
    font-size: 0.85em;
  }

  .HBLA_Inside_Body :global(mark) {
    background-color: rgba(187, 128, 9, 0.15);
    color: #e6edf3;
  }

  .HBLA_Inside_Body :global(small) {
    font-size: 90%;
  }

  .HBLA_Inside_Body :global(sub),
  .HBLA_Inside_Body :global(sup) {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .HBLA_Inside_Body :global(sub) {
    bottom: -0.25em;
  }

  .HBLA_Inside_Body :global(sup) {
    top: -0.5em;
  }

  .HBLA_Inside_Body :global(h2) {
    width: 100%;
    text-align: start;
    font-size: 34px;
    line-height: 1.2;
  }

  .HBLA_Inside_Body :global(img) {
    width: 100%;
    max-width: 100%;
    margin: 15px 0;
    background-color: #232323;
    border-radius: 10px;
    box-sizing: content-box;
  }

  .HBLA_Inside_Body :global(code),
  .HBLA_Inside_Body :global(kbd),
  .HBLA_Inside_Body :global(pre),
  .HBLA_Inside_Body :global(samp) {
    font-family: monospace;
    font-size: 1em;
  }

  .HBLA_Inside_Body :global(figure) {
    margin: 1em 40px;
  }

  .HBLA_Inside_Body :global(ul),
  .HBLA_Inside_Body :global(ol) {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  .HBLA_Inside_Body :global(ol ol),
  .HBLA_Inside_Body :global(ul ol) {
    list-style-type: lower-roman;
  }

  .HBLA_Inside_Body :global(ul ul ol),
  .HBLA_Inside_Body :global(ul ol ol),
  .HBLA_Inside_Body :global(ol ul ol),
  .HBLA_Inside_Body :global(ol ol ol) {
    list-style-type: lower-alpha;
  }

  .HBLA_Inside_Body :global(dd) {
    margin-left: 0;
  }

  .HBLA_Inside_Body :global(pre) {
    margin-top: 0;
    margin-bottom: 0;
    word-wrap: normal;
    overflow: auto;
    max-width: 100%;
  }

  .HBLA_Inside_Body :global(hr) {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid #21262d;
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #30363d;
    border: 0;
  }

  .HBLA_Inside_Body :global(table) {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  .HBLA_Inside_Body :global(td),
  .HBLA_Inside_Body :global(th) {
    padding: 0;
  }

  .HBLA_Inside_Body :global(kbd) {
    display: inline-block;
    padding: 3px 5px;
    font:
      11px ui-monospace,
      SFMono-Regular,
      SF Mono,
      Menlo,
      Consolas,
      Liberation Mono,
      monospace;
    line-height: 10px;
    color: #e6edf3;
    vertical-align: middle;
    background-color: #161b22;
    border: solid 1px rgba(110, 118, 129, 0.4);
    border-bottom-color: rgba(110, 118, 129, 0.4);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 rgba(110, 118, 129, 0.4);
  }

  .HBLA_Inside_Body :global(p),
  .HBLA_Inside_Body :global(blockquote),
  .HBLA_Inside_Body :global(ul),
  .HBLA_Inside_Body :global(ol),
  .HBLA_Inside_Body :global(dl),
  .HBLA_Inside_Body :global(table),
  .HBLA_Inside_Body :global(pre),
  .HBLA_Inside_Body :global(details) {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .HBLA_Inside_Body :global(iframe) {
    border: 0;
  }

  .HBLA_Inside_Body :global(blockquote) {
    width: 100%;
    border-radius: 0 10px 10px 0;
    border-left: solid 6px rgba(255, 255, 255, 0.1);
    background-color: #232323;
    font-style: italic;
    color: rgba(255, 255, 255, 0.75);
    padding: 1rem 2rem;
    margin: 1rem 0;
  }
</style>
