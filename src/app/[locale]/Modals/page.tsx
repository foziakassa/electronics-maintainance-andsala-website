import { Modal, Button } from "antd";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa";
import FAQ from "../FAQ/page";

export default function Modals({ visibless, showModals , handleOks , handleCancels}: any) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <button onClick={showModals}>
        <Link href="" rel="noopener noreferrer">
          <FaQuestion className="animate-pulse text-5xl text-teal-600 font-bold bg-white border-red-50 h-150 w-150 p-1 drop-shadow-md rounded-full" />
        </Link>
      </button>
      <Modal 
       open={visibless}
       onCancel={handleCancels}
      //  title='Feedback'
       // onOk={handleOk}
       closable={true}
       footer={null}
      >
        <FAQ />
      </Modal>
    </div>
  );
}
