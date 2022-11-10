import { useEffect } from "react";


const useTitle = title => {
   useEffect(()=>{
        document.title = `${title}-london_editorial_wedding_photography`;
   },[title])
};

export default useTitle;