<a class="HomeBodyListCardLink" href="/This Is A Blog Title That Will Be The Most Ambitious Title In The World">
    <div class="HomeBodyListCard">
        <div class="HBLC_FeaturedImg">
            <div class="HBLC_FeaturedImg_Inside" style="background: url('https://c.tenor.com/wpDsicEoJu0AAAAd/tenor.gif') center / cover no-repeat;"></div>
        </div>
        <div class="HBLC_PostTitle">
            <h3 class="HBLC_PostTitleHeading">This Is A Blog Title That Will Be The Most Ambitious Title In The World!<br /></h3>
        </div>
        <div class="HBLC_PostShort">
            <p class="HBLC_PostShortPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.<br /><br /></p>
        </div>
    </div>
</a>

    <style>
    .HomeBodyListCard {
      transition: ease 0.4s;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      grid-gap: 0;
      background: linear-gradient(to top right, #262626, #292929, #262626);
      box-shadow: 0 0 8px 0 rgba(0,0,0,0.15);
      height: 100%;
    }

    .HomeBodyListCard:hover {
      transition: ease 0.4s;
      box-shadow: 0 0 17px 0 rgba(128,0,255,0.1);
    }

    .HBLC_FeaturedImg {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
    }

    .HBLC_PostTitle {
      padding: 15px 15px 10px 15px;
      border-bottom: solid 1px rgba(255,255,255,0.05);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .HBLC_PostShort {
      padding: 10px 15px 15px 15px;
    }

    .HBLC_PostCategories {
      padding: 15px;
    }

    .HBLC_PostTags {
      padding: 15px;
    }

    .HBLC_PostBy {
      padding: 15px;
    }

    .HBLC_FeaturedImg_Inside {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .HomeBodyListCardLink {
		  transition: ease 0.4s;
		  text-decoration: unset;
		  color: unset;
		  transform: scale(1);
		  border-radius: 12px;
		  padding: 2px;
		  /*background: linear-gradient(to top, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 100%);*/
		}

		.HomeBodyListCardLink::before {
		  transition: ease 0.4s;
		  background: linear-gradient(to top, #8000ff 0%, #232323 50%, rgba(255,255,255,0) 100%);
		  content: '';
		  position: absolute;
		  top: 0;
		  left: 0;
		  right: 0;
		  bottom: 0;
		  opacity: 0;
		  z-index: -1;
		  border-radius: 12px;
		}

		.HomeBodyListCardLink:hover::before {
		  transition: 0.4s ease;
		  opacity: 1;
		}

		.HomeBodyListCardLink:hover {
		  transition: ease 0.4s;
		  text-decoration: unset;
		  color: unset;
		  transform: scale(1.02);
		}

    .HBLC_PostTitleHeading {
		  display: -webkit-box;
		  -webkit-box-orient: vertical;
		  overflow: hidden;
		  -webkit-line-clamp: 2;
		  font-size: 20px;
		  line-height: 1.5;
		  color: rgba(255,255,255,0.75);
      margin: 0;
		}

		.HBLC_PostShortPara {
		  display: -webkit-box;
		  -webkit-box-orient: vertical;
		  overflow: hidden;
		  -webkit-line-clamp: 3;
		  color: rgba(255,255,255,0.5);
      font-size: 15px;
      line-height: 1.5;
		}
    </style>
