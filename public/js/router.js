const possibleHash = [
  "landing",
  "about",
  "team",
  "history",
  "blog",
  "blogpost1",
  "blogpost2",
  "blogpost3",
  "blogpost4",
  "blogpost5",
  "blogpost6",
  "login",
  "dogs",
  "dogpost1",
  "dogpost2",
  "dogpost3",
  "dogpost4",
  "cats",
  "catpost1",
  "puppies",
  "location_landing",
  "response",
  "profile",
  "cart",
  "manage-goods"
];

async function getHtml(viewName) {
  switch (document.documentElement.lang) {
    case "ru": {
      const resp = await fetch(`views/ru/${viewName}.ru.html`);
      const html = await resp.text();
      return html;
    }
    case "en": {
      const resp = await fetch(`views/${viewName}.html`);
      const html = await resp.text();
      return html;
    }
  }
}

export { getHtml, possibleHash }