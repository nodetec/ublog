<div class="NMBI_Search">
  <div class="NMBI_SearchGroup">
    <div class="NMBI_SearchWrapper">
      <input class="NMBI_SearchWrapper_Input" type="text" /><a
        class="btn NMBI_SearchWrapper_Button"
        type="button"
        href="/search"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
          fill="currentColor"
        >
          <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
          ></path>
        </svg></a
      >
    </div>
  </div>
</div>

<style>
  .NMBI_Search {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .NMBI_Search {
  }

  .NMBI_SearchWrapper {
    display: grid;
    grid-template-columns: 1.65fr 0.35fr;
    justify-content: end;
    align-items: center;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    grid-gap: 0;
  }

  .NMBI_SearchWrapper_Input {
    outline: unset;
    border: unset;
    /*border-top: solid 1px rgba(255,255,255,0);*/
    /*border-bottom: solid 1px rgba(255,255,255,0);*/
    /*border-left: solid 1px rgba(255,255,255,0);*/
    /*border-right: none;*/
    height: 100%;
    padding: 10px;
    background: rgba(0, 0, 0, 0);
    overflow: hidden;
    border-radius: 10px 0 0 10px;
    color: rgba(255, 255, 255, 0.75);
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }

  .NMBI_SearchWrapper_Input:focus + .NMBI_SearchWrapper_Button {
    background: rgba(0, 0, 0, 0.05);
    background: linear-gradient(to top right, #2f2f2f, #303030, #2f2f2f);
  }

  .NMBI_SearchWrapper_Input:focus {
    /*border-top: solid 1px rgba(255,255,255,0.05);*/
    /*border-bottom: solid 1px rgba(255,255,255,0.05);*/
    /*border-left: solid 1px rgba(255,255,255,0.05);*/
    background: rgba(0, 0, 0, 0.05);
  }

  .NMBI_SearchWrapper_Button {
    transition: ease 0.4s;
    color: rgba(255, 255, 255, 0.15);
    border: unset;
    outline: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0);
    border-radius: 0;
    border-left: solid 1px rgba(255, 255, 255, 0.05);
    height: 100%;
    padding: 10px;
    cursor: pointer;
  }

  .NMBI_SearchWrapper_Button:hover {
    transition: ease 0.4s;
    color: rgba(255, 255, 255, 0.75);
    border: unset;
    outline: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top right, #2f2f2f, #303030, #2f2f2f);
    border-radius: 0;
    border-left: solid 1px rgba(255, 255, 255, 0);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  }

  .NMBI_SearchWrapper_Button:focus {
    transition: ease 0.4s;
    color: rgba(255, 255, 255, 0.5);
    border: unset;
    outline: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top right, #2f2f2f, #303030, #2f2f2f);
    border-radius: 0;
    border-left: solid 1px rgba(255, 255, 255, 0);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  }

  .NMBI_SearchGroup {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    background: linear-gradient(to top right, #262626, #292929, #262626);
    border-radius: 15px;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
  }
</style>
