
import { CollectionQuery } from "@/Model/collection-query.model";
import fetcher from "@/shared/utils/fetcher";
import { useLocale, useTranslations } from "next-intl";
import useSwr from "swr";

export default function WhyUs() {
  const locale = useLocale();

  const t = useTranslations("ServiceMain");

  const collection: CollectionQuery = {
    locale: locale,
    orderBy: [
      {
        field: "updatedAt",
        direction: "desc",
      },
    ],
  };
  const images=[
    "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
    "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
    "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
    "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
  ]
  const { data, isLoading, error } = useSwr(
    { url: "/portal-interactions/get-why-us?top=4", params: collection },
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (data) {
    const whyUsData = data.data;

    return (
      <div className="">
        <section className="text-gray-700 body-font mt-10">
          <div className="flex justify-center text-3xl font-bold text-teal-600 text-center">
            Why Us?
          </div>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              {whyUsData.map((item:any, index:any) => (
                <div className="p-4 md:w-1/4 sm:w-1/2" key={index}>
                  <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                      <img
                      src={images[index]}
                        className="w-32 mb-3"
                      />
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
