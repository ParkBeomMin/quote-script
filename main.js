import "./style.css";
import { QUOTE_LIST } from "./quote";

const setQuote = async () => {
  const target = document.querySelector(".qs-script");
  if (target) {
    await getFont();
    const quote = getQuote();
    const div = document.createElement("div");
    div.id = "qs-div";
    const p = document.createElement("p");
    p.id = "qs-p";
    p.innerHTML = quote.quote;
    // "컴퓨터는 점점 더 똑똑해지고 있다. 과학자들은 곧 그들이 우리에게 말을 걸게 될거라고 한다. 참고로, 여기에서 그들이란 “컴퓨터”를 말한다. 과학자가 우리에게 말할 리는 없으니까. ";
    const span = document.createElement("span");
    span.id = "qs-span";
    span.innerHTML = quote.name; // "Dave Barry, 컴퓨터광 유머작가";
    div.appendChild(p);
    div.appendChild(span);
    const _target = target;
    target.innerHTML = "";
    target.appendChild(div);
    target.appendChild(_target);
  } else {
    console.log("Not Exsits qs-script");
  }
};

/**
 * <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dongle&display=swap" rel="stylesheet">
 */
const getFont = () => {
  const head = document.querySelector("head");
  const setFont = ({ rel, href, crossorigin }) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (crossorigin) link.crossOrigin = "crossorigin";
    head.appendChild(link);
  };

  setFont({ rel: "preconnect", href: "https://fonts.googleapis.com" });
  setFont({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: true,
  });
  setFont({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Dongle&family=Single+Day&display=swap",
  });
};

const getQuote = () => {
  const rIndex = Math.round(Math.random(QUOTE_LIST.length - 1));
  console.log("rIndex", rIndex);
  return QUOTE_LIST[rIndex];
};

try {
  setQuote();
} catch (e) {
  console.error("qs-script error => ", e);
}
