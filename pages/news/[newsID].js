import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  let route = router.query.newsID;
  return (
    <div>
      <p>{route}</p>
    </div>
  );
};

export default DetailPage;
