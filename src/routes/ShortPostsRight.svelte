<div class="HBSS_ShortPosts">
  <a
    class="HBSS_ShortPostsPostLink"
    href="https://primal.net/e/note1pnxr6ns4fdfzn0e6nwddrjw0wqwmpm3vcm6hkuus22phwrgs4q6q8wgpua"
    target="_blank"
  >
    <div class="HBSS_ShortPostsPost">
      <div class="HBSS_ShortPostsPost_Top">
        <p class="HBSS_ShortPostsPost_TopName">Freakoverse</p>
        <div class="HBSS_ShortPostsPost_TopLink">
          <svg
            class="HBSS_ShortPostsPost_TopLinkIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-32 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            style="width: 100%;height: 100%;"
          >
            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="HBSS_ShortPostsPost_Bottom">
        <p>This is good.<br /></p>
        <div
          class="HBSS_ShortPostsPost_BottomImg"
          style="background: linear-gradient(0deg, #232323 5%, rgba(255,255,255,0)), url('src/media/images/shortPostImgExample.jpg') top / cover no-repeat;"
        ></div>
      </div>
    </div>
  </a>
</div>

<style>
  .HBSS_ShortPosts {
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }

  @media (max-width: 1200px) {
    .HBSS_ShortPosts {
      border-radius: 15px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 25px;
      padding: 10px;
    }
  }

  .HBSS_ShortPostsPost {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  .HBSS_ShortPostsPost_Top {
    display: grid;
    grid-template-columns: 1.75fr 0.25fr;
    grid-gap: 0;
  }

  .HBSS_ShortPostsPost_Bottom {
    flex-direction: column;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    line-height: 1.5;
    position: relative;
  }

  .HBSS_ShortPostsPost_TopName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
  }

  .HBSS_ShortPostsPost_TopLink {
    transition: ease 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.25);
    padding: 7px;
    /*background: rgba(255,255,255,0.1);*/
    border-radius: 5px;
  }

  .HBSS_ShortPostsPostLink {
    transition: ease 0.4s;
    text-decoration: unset;
    color: unset;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0);
    transform: scale(1);
    background-color: rgba(38, 38, 38, 0);
  }

  .HBSS_ShortPostsPostLink:hover {
    transition: ease 0.4s;
    text-decoration: unset;
    color: unset;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
    transform: scale(1.03);
  }

  .HBSS_ShortPostsPostLink:active {
    transition: ease 0.1s;
    transform: scale(0.98);
  }

  .HBSS_ShortPostsPostLink::before {
    transition: ease 0.4s;
    background: linear-gradient(to top right, #262626, #292929, #262626);
    opacity: 0;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    border-radius: 15px;
  }

  .HBSS_ShortPostsPostLink:hover::before {
    transition: ease 0.4s;
    background: linear-gradient(to top right, #262626, #292929, #262626);
    opacity: 1;
  }

  .HBSS_ShortPostsPost_TopLinkIcon {
    width: 100%;
    height: 100%;
    max-width: 25px;
  }

  .HBSS_ShortPostsPost_BottomImg {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    margin: 15px 0 0 0;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
    position: relative;
  }
</style>
