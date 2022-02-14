import Link from "next/link";

const News = () => {
  return (
    <div>
      <ul>
        <Link href="/news/Next-Js">
          <a>
            <li>Next JS the hottest framework</li>
          </a>
        </Link>
        <Link href="/news/Other-News">
          <a>
            <li>More News</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default News;
