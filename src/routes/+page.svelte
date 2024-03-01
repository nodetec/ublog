<script lang="ts">
  import ArticleCard from "./ArticleCard.svelte";
  import Pagination from "./Pagination.svelte";
  import AuthorRight from "./AuthorRight.svelte";
  import Search from "./Search.svelte";
  import ShortPostsRight from "./ShortPostsRight.svelte";
</script>

<div class="secMain">
  <div class="ContainerMain">
    <div class="HomeBody">
      <div class="HomeBodyList">
        <div class="HomeBodyListCards">
          <ArticleCard />
        </div>
        <Pagination />
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
