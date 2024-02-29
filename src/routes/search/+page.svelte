<script>
import ArticleCard from '../ArticleCard.svelte';
import AuthorRight from '../AuthorRight.svelte';
import Search from '../Search.svelte';
import ShortPostsRight from '../ShortPostsRight.svelte';
import Pagination from '../Pagination.svelte';
</script>

<div class="secMain">
    <div class="ContainerMain">
        <div class="HomeBody">
            <div class="HomeBodyList">


            <div class="HomeBodyListTitle">
            <h3 class="HomeBodyListTitleText">Search:<span class="HomeBodyListTitleTextSpan">Search term</span></h3>
            </div>

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

<style>
.HomeBodyListTitle {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.HomeBodyListTitle {
  color: rgba(255,255,255,0.5);
}

.HomeBodyListTitleText {
  display: flex;
  grid-gap: 5px;
}

.HomeBodyListTitleTextSpan {
  font-weight:normal;
}


</style>
