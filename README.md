<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL-3.0 License][license-shield]][license-url]

<br />

  <a href="https://github.com/nodetec/ublog">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Greek_lc_mu.svg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">µBlog</h3>

  <p align="center">
  uBlog is a minimalist blog on nostr that allows anyone to easily create their own personal micro-blog.
    <br />
    <br />
  </span>
    <a href="https://u-blog.vercel.app/">👁️ View Demo</a>
    ·
    <a href="https://github.com/nodetec/ublog/issues">🐞 Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#configuration">Configuration</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

WIP

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

1. Fork this repo
2. Edit `ublog.config.js`
3. Deploy on vercel

<!-- Configuration -->

## Configuration

The [`ublog.config.js`](https://github.com/nodetec/ublog/blob/master/ublog.config.js) file contains the configuration settings for this project

| Option         | Description                                                                                                   | Required/Optional |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ----------------- |
| `title`        | The title of your blog.                                                                                       | Required          |
| `description`  | A brief description of your blog.                                                                             | Required          |
| `favicon`      | The URL of the favicon image for your blog.                                                                   | Optional          |
| `logo`         | The URL of the logo image for your blog.                                                                      | Optional          |
| `npub`         | Your own public key for your blog.                                                                            | Required          |
| `themes`       | An array of built-in themes. Choose your favorite themes.                                                     | Required          |
| `customThemes` | An array of custom themes. You can generate your own theme from [here](https://daisyui.com/theme-generator/). | Required          |
| `relays`       | An array of relays.                                                                                           | Required          |

Note:

- At least one value is required between `themes` and `customThemes`.

<!-- ROADMAP -->

## Roadmap

- [x] Implement settings page
- [x] Implement write page
  - [x] Implement publish button
- [x] Implement loading ui
- [x] Implement lightning tips
- [x] Implement tags

See the [open issues](https://github.com/nodetec/ublog/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Discord - [https://discord.gg/Xb9B4Ny](https://discord.gg/Xb9B4Ny)

Project Link: [https://github.com/nodetec/ublog](https://github.com/nodetec/ublog)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [nostr](https://github.com/nostr-protocol/nostr)
- [blogstack.io](https://github.com/nodetec/blogstack)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nodetec/ublog.svg?style=for-the-badge
[contributors-url]: https://github.com/nodetec/ublog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nodetec/ublog.svg?style=for-the-badge
[forks-url]: https://github.com/nodetec/ublog/network/members
[stars-shield]: https://img.shields.io/github/stars/nodetec/ublog.svg?style=for-the-badge
[stars-url]: https://github.com/nodetec/ublog/stargazers
[issues-shield]: https://img.shields.io/github/issues/nodetec/ublog.svg?style=for-the-badge
[issues-url]: https://github.com/nodetec/ublog/issues
[license-shield]: https://img.shields.io/github/license/nodetec/ublog.svg?style=for-the-badge
[license-url]: https://github.com/nodetec/ublog/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
