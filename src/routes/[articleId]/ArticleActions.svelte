<script lang="ts">
  import { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
  import ndk from "~/lib/stores/ndk";
  import session from "~/lib/stores/session";
  import { login } from "~/lib/utils/login";

  export let articleId: string;
  export let articlePubkey: string;
  export let reactions: NDKEvent[];
  let upVotes = 0;
  let downVotes = 0;

  $: upVotes = reactions.filter((reaction) =>
    ["", "+", "❤️"].some((react) => react === reaction.content)
  ).length;
  $: downVotes = reactions.filter(
    (reaction) => reaction.content === "-"
  ).length;

  let upVoted = false;
  let downVoted = false;

  $: reactions.forEach((reaction) => {
    if (reaction.content === "-") {
      if (reaction.pubkey === $session?.pubkey) {
        downVoted = true;
      }
      if (["", "+", "❤️"].some((react) => react === reaction.content)) {
        if (reaction.pubkey === $session?.pubkey) {
          upVoted = true;
        }
      }
    }
  });

  async function vote(content: string) {
    if (!$session) {
      login();
    } else {
      const event = new NDKEvent($ndk, {
        pubkey: $session.pubkey,
        kind: NDKKind.Reaction,
        created_at: Math.floor(new Date().getTime() / 1000),
        content,
        tags: [
          ["e", articleId],
          ["p", articlePubkey],
          ["k", NDKKind.Article.toString()],
        ],
      });
      await event.publish();
    }
  }

  function upVote() {
    if (!upVoted) {
      vote("+");
    }
  }

  function downVote() {
    if (!downVoted) {
      vote("-");
    }
  }
</script>

<div class="HBLA_Details">
  <a href="#ArticleComments" style="text-decoration: unset;color: unset;">
    <div class="HBLA_Details_Card HBLA_D_CComments">
      <div class="HBLA_Details_CardVisual">
        <svg
          class="HBLA_Details_CardVisualIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
          fill="currentColor"
        >
          <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"
          ></path>
        </svg>
      </div>
      <p class="HBLA_Details_CardText">420</p>
    </div>
  </a>
  <div id="reactBolt" class="HBLA_Details_Card HBLA_D_CBolt">
    <div class="HBLA_Details_CardVisual">
      <svg
        class="HBLA_Details_CardVisualIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-64 0 512 512"
        width="1em"
        height="1em"
        fill="currentColor"
      >
        <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"
        ></path>
      </svg>
    </div>
    <p class="HBLA_Details_CardText">69k</p>
  </div>
  <button
    disabled={upVoted}
    on:click={upVote}
    id="reactUp"
    class="HBLA_Details_Card HBLA_D_CReactUp HBLA_D_CRUActive"
  >
    <div class="HBLA_Details_CardVisual">
      <svg
        class="HBLA_Details_CardVisualIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        fill="currentColor"
      >
        <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
        ></path>
      </svg>
    </div>
    <p class="HBLA_Details_CardText">{upVotes}</p>
  </button>
  <button
    disabled={downVoted}
    on:click={downVote}
    id="reactDown"
    class="HBLA_Details_Card HBLA_D_CReactDown"
  >
    <div class="HBLA_Details_CardVisual">
      <svg
        class="HBLA_Details_CardVisualIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        fill="currentColor"
      >
        <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M512 440.1C512 479.9 479.7 512 439.1 512H71.92C32.17 512 0 479.8 0 440c0-35.88 26.19-65.35 60.56-70.85C43.31 356 32 335.4 32 312C32 272.2 64.25 240 104 240h13.99C104.5 228.2 96 211.2 96 192c0-35.38 28.56-64 63.94-64h16C220.1 128 256 92.12 256 48c0-17.38-5.784-33.35-15.16-46.47C245.8 .7754 250.9 0 256 0c53 0 96 43 96 96c0 11.25-2.288 22-5.913 32h5.879C387.3 128 416 156.6 416 192c0 19.25-8.59 36.25-22.09 48H408C447.8 240 480 272.2 480 312c0 23.38-11.38 44.01-28.63 57.14C485.7 374.6 512 404.3 512 440.1z"
        ></path>
      </svg>
    </div>
    <p class="HBLA_Details_CardText">{downVotes}</p>
  </button>
</div>

<style>
  .HBLA_Details_Card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to top right, #262626, #292929, #262626);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 0.25);
    cursor: pointer;
    border: none;
    padding: 0;
  }

  .HBLA_Details_Card:hover
    > .HBLA_Details_CardVisual
    > .HBLA_Details_CardVisualIcon {
    transition: ease 0.4s;
    transform: scale(1.1);
  }

  .HBLA_Details_Card:active
    > .HBLA_Details_CardVisual
    > .HBLA_Details_CardVisualIcon {
    transition: ease 0.2s;
    transform: scale(0.95);
  }

  .HBLA_Details_CardVisual {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    box-shadow: 0 0 8px 0 rgb(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.05);
    font-size: 20px;
  }

  .HBLA_Details_CardText {
    transition: ease 0.4s;
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin: 0 15px;
    min-width: 50px;
  }

  .HBLA_Details_Reaction.HBLA_D_RAlt {
  }

  .HBLA_Details_Reaction.HBLA_D_RAlt:hover > .HBLA_Details_ReactionIcon {
    transition: ease 0.4s;
    color: rgba(148, 255, 65, 0.85);
  }

  .HBLA_Details_Card.HBLA_D_CBolt:hover {
    color: rgba(255, 255, 0, 0.85);
  }

  .HBLA_Details_Card.HBLA_D_CComments:hover {
    color: rgba(173, 90, 255, 0.75);
  }

  .HBLA_Details_Card.HBLA_D_CReactUp:hover {
    color: rgba(255, 70, 70, 0.85);
  }

  .HBLA_Details_Card.HBLA_D_CReactDown:hover {
    color: rgba(255, 114, 54, 0.85);
  }

  .HBLA_Details {
    width: 100%;
    display: flex;
    flex-direction: row;
    grid-gap: 15px;
    /*background: linear-gradient(to top right, #262626, #292929, #262626);*/
    /*box-shadow: 0 0 8px 0 rgb(0,0,0,0.1);*/
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .HBLA_Details {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .HBLA_Details_CardText:hover {
  }

  .HBLA_Details_CardVisualIcon {
    transition: ease 0.4s;
  }

  .HBLA_Details_Card.HBLA_D_CReactUp.HBLA_D_CRUActive {
    color: rgba(255, 70, 70, 0.85);
  }

  .HBLA_Details_Card.HBLA_D_CReactDown.HBLA_D_CRDActive {
    color: rgba(255, 114, 54, 0.85);
  }

  .HBLA_Details_Card.HBLA_D_CBolt.HBLA_D_CBActive {
    color: rgba(255, 255, 0, 0.85);
  }

  .HBLA_Details_Card:hover {
  }
</style>
