<script>
import ArticleCard from '../ArticleCard.svelte';
import AuthorRight from '../AuthorRight.svelte';
import Search from '../Search.svelte';
import ShortPostsRight from '../ShortPostsRight.svelte';
import Article from './Article.svelte';
import ArticleComments from './ArticleComments.svelte';
</script>

    <div class="secMain">
        <div class="ContainerMain">
            <div class="HomeBody">
                <div class="HomeBodyList">

                <Article />

                <div class="HomeBodyListCards">

                <ArticleCard />

                </div>

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
