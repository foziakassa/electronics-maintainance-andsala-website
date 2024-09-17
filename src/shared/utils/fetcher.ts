
import { CollectionQuery } from '@/Model/collection-query.model';
import axiosInstance from "./axios_instance";
import { collectionQueryBuilder } from '@/shared/utils/collection-query-builder';

const fetcher = ({url, params}: {url: string, params: CollectionQuery}) => {
  const queryArgs = {
    url,
    method: "get",
    params: params ? collectionQueryBuilder(params) : {},
  };
  return axiosInstance(queryArgs).then((response) => response.data);
};

export default fetcher;