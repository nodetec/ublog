<script lang="ts">
  import ArticleCard from "./ArticleCard.svelte";
  import { fetchArticles } from "$lib/utils/articles";
  import { nip19 } from "nostr-tools";
  import { npub } from "~/config";

  const authorPK = nip19.decode(npub).data;
</script>

<div class="HomeBodyListCards">
  {#await fetchArticles([authorPK])}
    <p>Loading...</p>
  {:then articles}
    {#if articles && Array.from(articles).length > 0}
      {#each articles as article}
        <ArticleCard {article} />
      {/each}
    {:else}
      <p>no articles</p>
    {/if}
  {/await}
</div>
