import { Modal, Button } from 'antd';
import Feedback from '../Feedback/page';
import './Modale.css'
import { MdFeedback  } from 'react-icons/md';
import Link from 'next/link';

export default function Modale({ visibles, showModal , handleCancel }: any) {

return (
  <div
    style={{
      position: 'fixed',
      bottom: 20,
      left: 20,
      zIndex: 1000,
    }}
  >
    <button onClick={showModal}>
    <span
          className="hidden group-hover:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-500"
        >
          Let us know your feedback
        </span>
      <Link href="/" rel="noopener noreferrer">
        <MdFeedback
          className="text-5xl text-teal-600 font-bold
           bg-white border-red-50 h-150 w-150 p-1 drop-shadow-md 
           rounded-full"
        />
        
      </Link>
    </button>
    <Modal
      title='Feedback'
      open={visibles}
      // onOk={handleOk}
      closable={true}
      footer={null}
      onCancel={handleCancel}
    >
      <Feedback />
    </Modal>
  </div>
);
}