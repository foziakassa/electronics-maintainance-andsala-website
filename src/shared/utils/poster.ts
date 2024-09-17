import axiosInstance from "@/shared/utils/axios_instance";

const poster = (url: string, data: object) => axiosInstance.post(url, data).then((res) => res.data);

export default poster;