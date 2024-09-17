'use client'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import poster from "@/shared/utils/poster";
import {useState} from 'react'
library.add(fab, fas, far);
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface FeedbackData {
  email: string;
  message: string;
  phone:string;
  subject:string;
  rating:number;
  name:string
}
export default function Feedback() {
  const [name , setName] = useState('')
  const [email, setEmail] = useState('');
  const [rating , setRating] =useState(2)
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data: FeedbackData = {
        email,
        message,
        rating,
        name,
        phone:'09..',
        
        subject:'',
       

      };
      console.log('data bing sent' , data)
      const response = await poster('/portal-interactions/create-feedback', data);
      setSuccess(true);
      console.log('response ghghg' , response)
    } catch (error) {
      console.log( `error: ${error}` )
      setError('error');
    }
  };
  return (
    <div className="">
      <div className="max-w-xl mx-auto mt-2 flex w-full flex-col border rounded-lg bg-white p-8">
        
        <p className="mb-5 leading-relaxed text-gray-600">
          {/* If you had any issues or you liked our product, please share with us! */}
          let us know your feedback
          {/* <FontAwesomeIcon icon="coffee" /> */}
          
        </p>
        <form onSubmit={handleSubmit }>
        <div className="mb-4">
          <label htmlFor="Name" 
          className="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline0"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e)=>setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
            Rate
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="rate us out of 5"
            max={5}
            // min={2}
            required
            value={rating}
            onChange={(e)=>setRating(parseInt(e.target.value , 10))}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline0"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            required
            onChange={(e)=>setMessage(e.target.value)}
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
        </div>
        <button 
        type="submit"
        className="rounded border-0 bg-teal-600 py-2 px-6 text-lg text-white hover:bg-teal-700 focus:outline-none">
          Send
        </button>
        </form>
        {error&& 
        <div
        style={{
          color:'red'
        }}
        >
          {error}

          </div>}
          {success&& <div
          style={{
            color:'green'
          }}
          >
            we are thankful for your feedback
            </div>}
        {/* <p className="mt-3 text-xs text-gray-500">
          Feel free to connect with us on social media platforms.
        </p> */}
      </div>
    </div>
  );
}
