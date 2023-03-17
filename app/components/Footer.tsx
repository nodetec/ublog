const Footer = () => {
  return (
    <footer className="py-4 flex items-center gap-2 justify-center">
      <p>
        Built with{" "}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/nodetec/ublog"
          rel="noreferrer noopener"
        >
          ublog
        </a>
      </p>
      <GitHubStars />
    </footer>
  );
};

const GitHubStars = () => (
  <a
    href="https://GitHub.com/nodetec/ublog/stargazers/"
    target="_blank"
    rel="noreferrer noopener"
  >
    <img
      src="https://img.shields.io/github/stars/nodetec/ublog.svg?style=social&label=Star&maxAge=2592000"
      alt="GitHub stars"
    />
  </a>
);

export default Footer;
