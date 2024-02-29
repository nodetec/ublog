<script>
import PopUp_Replies from './PopUp_Replies.svelte';
import './Comments_Styles.css'
</script>


<div id="ArticleComments" class="HomeBodyListComments">




    <!-- the part to comment -->
    <div class="HomeBodyListCommentsCreation">
        <div class="HBLCC_Top"><textarea id="commentBox" class="HBLCC_Top_Box"></textarea></div>
        <div class="HBLCC_Bottom"><a id="commentBoxButton" class="HBLCC_BottomButton">Comment</a></div>
    </div>





    <!-- the part where comments appear -->
    <div id="commentsArea" class="HomeBodyListCommentsList">
        <div class="HBLCL_Comment">
            <div class="HBLCL_CommentTop">
                <div class="HBLCL_CommentTopPPWrapper">
                    <div class="HBLCL_CommentTopPP" style="background: url('../PPExamplePic.jpg') center / cover no-repeat;"></div>
                </div>
                <div class="HBLCL_CommentTopDetailsWrapper">
                    <div class="HBLCL_CommentTopDetails">
                        <p class="HBLCL_CTD_Name">Freakoverse</p>
                        <p class="HBLCL_CTD_Address">npub18n4ysp43ux5c98fs6h9c57qpr4p8r3j8f6e32v0vj8egzy878aqqyzzk9r</p>
                    </div>

                </div>
            </div>



            <div class="HBLCL_CommentBottom">
                <p class="HBLCL_CBText">Yo this article was insane to read!</p>
            </div>
            <div class="HBLCL_CommentActions">
                <div class="HBLCL_CommentActionsDetails">
                    <p class="HBLCL_CADDate">02/05/2024</p>
                    <p class="HBLCL_CADTime">8:45 PM</p>
                </div>



                <div class="HBLCL_CommentActionsInside">
                    <div class="HBLCL_CAElement HBLCL_CAEUp HBLCL_CAEUpActive"><svg class="HBLCL_CAElementIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
                        </svg>
                        <p class="HBLCL_CAElementText">52</p>
                    </div>
                    <div class="HBLCL_CAElement HBLCL_CAEDown"><svg class="HBLCL_CAElementIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M512 440.1C512 479.9 479.7 512 439.1 512H71.92C32.17 512 0 479.8 0 440c0-35.88 26.19-65.35 60.56-70.85C43.31 356 32 335.4 32 312C32 272.2 64.25 240 104 240h13.99C104.5 228.2 96 211.2 96 192c0-35.38 28.56-64 63.94-64h16C220.1 128 256 92.12 256 48c0-17.38-5.784-33.35-15.16-46.47C245.8 .7754 250.9 0 256 0c53 0 96 43 96 96c0 11.25-2.288 22-5.913 32h5.879C387.3 128 416 156.6 416 192c0 19.25-8.59 36.25-22.09 48H408C447.8 240 480 272.2 480 312c0 23.38-11.38 44.01-28.63 57.14C485.7 374.6 512 404.3 512 440.1z"></path>
                        </svg>
                        <p class="HBLCL_CAElementText">4</p>
                    </div>
                    <div class="HBLCL_CAElement HBLCL_CAEBolt HBLCL_CAEBoltActive"><svg class="HBLCL_CAElementIcon" xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path>
                        </svg>
                        <p class="HBLCL_CAElementText">500K</p>
                    </div>
                    <div class="HBLCL_CAElement HBLCL_CAEReplies"><svg class="HBLCL_CAElementIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"></path>
                        </svg>
                        <p class="HBLCL_CAElementText">12</p>
                        <p>Replies</p>
                    </div>
                    <div class="HBLCL_CAElement HBLCL_CAEReply">
                        <p class="HBLCL_CAElementText">Reply</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>


<PopUp_Replies />
