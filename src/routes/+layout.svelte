<script>
  import PopUp_QR from './PopUp_QR.svelte';
  import PopUp_Relays from './PopUp_Relays.svelte';
  import PopUp_Zap from './PopUp_Zap.svelte';
  import './PopUp_Styles.css'
  import './Footer_Styles.css'
  import './Nav_Styles.css'
  import './Main_Styles.css'
</script>

<!--nav-->
<div class="NavMain">
    <div class="NavMainTop">
        <div class="ContainerMain">
            <div class="NavMainTopInside">
                <div class="NMTI_Sec"><a class="NMTI_Sec_HomeLink" href="/">
                        <div class="NMTI_Sec_HomeLink_Logo" style="background: url('src/uBlog Logo.svg') center / cover no-repeat;"></div>
                        <p class="NMTI_Sec_HomeLink_Name">uBlog</p>
                    </a></div>
                <div class="NMTI_Sec">
                    <div class="NMTI_SecInside"><a class="NMTI_SecInside_Link NMTI_SI_LinkTip">Tip<svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                <path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z"></path>
                            </svg></a><a id="OpenPopUpMainRelay" class="NMTI_SecInside_Link NMTI_SI_LinkRelay">Relay<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                <path d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z"></path>
                            </svg></a><a id="loginChange" class="NMTI_SecInside_Link">Login<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
    <path d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"></path>
</svg></a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="NavMainBottom">
        <div class="ContainerMain"></div>
    </div>
</div>

<!--this loads +page in current folder-->
<slot />

<!--footer-->
<div class="secMainFooterWrapper">
    <div class="secMainFooter">
        <p class="secMainFooterPara">Built for <a class="secMainFooterParaLink" href="https://github.com/nostr-protocol/nostr">Nostr</a> by <a class="secMainFooterParaLink" href="https://github.com/nodetec/ublog">NODE-TEC<br /></a></p>
    </div>
</div>





<!-- pop up for qr -->
<PopUp_QR />

<!-- pop up for relays -->
<PopUp_Relays />

<!-- pop up for zaps -->
<PopUp_Zap />
