import { useEffect, useRef, useState } from "react";
import { ChevronDown } from 'lucide-react';

const Description = ({description}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showreadMoreButton, setShowReadMoreButton] = useState(false);

  const ref = useRef(null)
  // useEffect(()=>{
  //   if(ref.current){
  //     const isOverflowing = ref.current.scrollHeight != ref.current.clientHeight;
  //     setShowReadMoreButton(isOverflowing);
  //   }
  // },[description, isOpen])
  useEffect(() => {
  if (ref.current && !isOpen) {
    const isOverflowing =
      ref.current.scrollHeight > ref.current.clientHeight;
    setShowReadMoreButton(isOverflowing);
  }
}, [description, isOpen]);


  return (
    <>
      <div 
      className={`${isOpen ? 'line-clamp-none' : 'line-clamp-6'}
      [&_ul]:list-disc 
      [&_ul]:pl-5 
      [&_li]:mb-2`} 
      ref={ref} 
      dangerouslySetInnerHTML={{ __html: description }}
       />

      {showreadMoreButton &&  
        <button className="text-xl font-bold hover:scale-105 transition-all duration-300" onClick={() => setIsOpen(!isOpen)} >
        {isOpen ? (
          <span className="flex items-center">
            Read less
            <ChevronDown className="w-6 h-6 ml-1 font-bold rotate-180" />
          </span>
        ) : (
          <span className="flex items-center">
            Read more
            <ChevronDown className="w-6 h-6 ml-1 font-bold" />
          </span>
        )}

      </button>}
    </>
  )
}

export default Description
