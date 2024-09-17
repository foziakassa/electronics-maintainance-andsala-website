import axiosInstance from "@/shared/utils/axios_instance";

const fetch = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetch;

