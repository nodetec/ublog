<script lang="ts">
  import ArticleCard from "./ArticleCard.svelte";
  import Pagination from "./Pagination.svelte";

  import { npub } from "~/config";
  import { page } from "$app/stores";
  import { NDKKind, type NDKEvent } from "@nostr-dev-kit/ndk";
  import { nip19 } from "nostr-tools";
  import ndk from "~/lib/stores/ndk";
  import articles from "~/lib/stores/articles";

  const authorPK = nip19.decode(npub).data;
  const articlesPerPage = 9;

  let articlesCount = 0;
  let currentPage = 1;
  let p: string | null = null;

  $: articlesCount = $articles.length;

  $: p = $page.url.searchParams.get("page");
  $: currentPage = p ? parseInt(p) : 1;

  let currentPageArticles: NDKEvent[] = [];
  let start = 0;
  let end = articlesPerPage + 1;
  $: start = (currentPage - 1) * articlesPerPage;
  $: end = start + articlesPerPage;
  $: currentPageArticles = $articles.slice(start, end);

  async function fetchArticles() {
    const events = await $ndk.fetchEvents({
      kinds: [NDKKind.Article],
      authors: [authorPK],
    });
    articles.set(Array.from(events));
  }

  fetchArticles();
</script>

{#if articlesCount > 0}
  <div class="HomeBodyListCards">
    {#each currentPageArticles as article (article.id)}
      <ArticleCard {article} />
    {/each}
  </div>
  <Pagination
    {currentPage}
    totalPages={Math.ceil(articlesCount / articlesPerPage)}
  />
{:else}
  <p>no articles</p>
{/if}
