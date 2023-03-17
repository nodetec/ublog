import Skeleton from "@/app/components/Skeleton";

const Article = () => {
  return (
    <div className="card sm:card-side hover:shadow-lg border border-base-content border-opacity-20 hover:border-primary cursor-pointer">
      <figure className="sm:flex-[.35]">
        <Skeleton className="h-52 w-full sm:h-full" />
      </figure>
      <div className="card-body sm:flex-[.65] gap-3">
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-1/3 h-2 mb-4" />
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-full h-2" />
        <Skeleton className="w-2/3 h-2" />
      </div>
    </div>
  );
};
export default Article;
