interface FaqProps {
  FaqData: {
    question: string
    answer:String
  };
}
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
export default function Faqcard(props: FaqProps) {
  const router = useRouter()
  const { FaqData } = props;
  const t = useTranslations("product")

  return (
    <div className="">
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> {FaqData?.question}</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
          {FaqData.answer}
          <button 
          onClick={()=>
            router.push('/All')

          }
          className="pl-2 text-blue-600/75">{t('seeMore')}</button>

            
          </p>
          
        </details>
      </div>
    </div>
  );
}
