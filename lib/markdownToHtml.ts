// import { remark } from 'remark';
// import html from 'remark-html';
import { marked } from 'marked';
import Prism from 'prismjs';

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(html).process(markdown);
  // return result.toString();

  const renderer = {
    code(code: string, infoString: string = 'jsx') {
      try {
        return `<pre class = "line-numbers"><code class = "language-${infoString}">${Prism.highlight(
          code,
          Prism.languages[infoString],
          infoString
        )}</code></pre>`;
      } catch (err) {
        return false;
      }
    },
    image(href: string, title: string | null, text: string) {
      let size = '';

      if (title) {
        let [width, height] = title.split('x');
        if (height) {
          size = `width='${width}' height='${height}'`;
        } else {
          size = `width='${width}'`;
        }
      } else {
        size = 'width="100%"';
      }
      return `<img src=${href} alt=${text} ${size}/>`;
    },
  };

  const result = marked.use({ renderer }).parse(markdown);

  return result.toString();
}
