// Runs before paint via a blocking inline script to avoid a flash of the
// wrong theme on load. Reads localStorage first, falls back to system
// preference, defaults to dark (the site's designed default).
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('jamzy-theme');
    var theme = stored || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
