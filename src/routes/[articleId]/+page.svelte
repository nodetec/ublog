<script lang="ts">
  import ArticleCard from "../ArticleCard.svelte";
  import AuthorRight from "../AuthorRight.svelte";
  import Search from "../Search.svelte";
  import ShortPostsRight from "../ShortPostsRight.svelte";
  import Article from "./Article.svelte";
  import ArticleComments from "./ArticleComments.svelte";
  import ndk from "$lib/stores/ndk";
  import articles from "$lib/stores/articles";
  import { npub } from "~/config";
  import { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
  import { nip19 } from "nostr-tools";
  import { onMount } from "svelte";

  export let articleId: string;
  export let data: { articleId: string };
  const authorPK = nip19.decode(npub).data;
  let article: NDKEvent | null = null;

  onMount(async () => {
    const storedArticle = $articles.find((article) => article.id === articleId);
    if (storedArticle) {
      article = storedArticle;
    } else {
      article = await $ndk.fetchEvent({
        kinds: [NDKKind.Article],
        authors: [authorPK],
        ids: [data.articleId],
      });
    }
  });
</script>

<div class="secMain">
  <div class="ContainerMain">
    <div class="HomeBody">
      <div class="HomeBodyList">
        {#if article}
          <Article {article} />
        {/if}

        {#if article}
          <div class="HomeBodyListCards">
            <ArticleCard {article} />
          </div>
        {/if}

        <ArticleComments />
      </div>

      <div class="HomeBodySide">
        <div class="HomeBodySideWrapper">
          <div class="HomeBodySideSec">
            <AuthorRight />
          </div>

          <div class="HomeBodySideSec">
            <Search />
          </div>

          <div class="HomeBodySideSec">
            <ShortPostsRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
