import Link from "next/link";

const App = () => {
  return (
    <div>
      <h1>sandbox next.js app I'm using to test some things out!</h1>
      <ul>
        <li>
          <Link href="/simpson" className="mt-1">
            <a>Relearning some super basic React stuff here</a>
          </Link>
        </li>
        <li>
          <Link href="/form" className="mt-1">
            <a>Forms and bootstrap</a>
          </Link>
        </li>
        <li>
          <Link href="/upload" className="mt-1">
            <a>David - upload files to s3</a>
          </Link>
        </li>
        <li>
          <Link href="/upload2" className="mt-1">
            <a>David - upload files to s3 another method (Amplify)</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
