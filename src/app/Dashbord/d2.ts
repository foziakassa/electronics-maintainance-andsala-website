import { CollectionQuery } from "@/Model/collection-query.model";
import fetcher from "@/shared/utils/fetcher";
import useSwr from 'swr';
export function useD2() {
  
  const collection: CollectionQuery = {
    locale: 'en',
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ],
  };

  const { data, isLoading, error } = useSwr(
    { url: "/portal-interactions/get-views", params: collection },
    fetcher
  );
if(data){
  
}
}

