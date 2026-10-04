import { MostReadApi } from "@/api/api";
import { MostReadType } from "@/type/type";
import Link from "next/link";

const MostRead = async () => {
  const data:MostReadType[] = await MostReadApi();
  return (
    <div>
      <h2>{data.category}</h2>
      {data.map((i) => (
        <Link href={i.link} key={i.id}>
          {i.rank}.{i.title}
        </Link>
      ))}
    </div>
  );
};

export default MostRead;
