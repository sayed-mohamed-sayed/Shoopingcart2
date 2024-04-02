"use client"
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
function ChangeLangage() {
    
const [isPending ,startTranstion]=useTransition()
const router=useRouter()
const localactive=useLocale()

const right=()=>{
  startTranstion(()=>{
    router.replace(`/en`)
  })

}
 
const left=()=>{
    startTranstion(()=>{
      router.replace(`/ar`)
    })
  }

return (
        <div className='cursor-pointer'>
          {
            localactive==="ar"?<h1 onClick={()=>right()}>en</h1>:<h1 onClick={()=>left()}>ar</h1>


          }

        </div>
    );
};

export default ChangeLangage;