"use client"
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function DarkProvider({ children }: any) {
const [mount,setmount]=useState(false)

useEffect(()=>{
setmount(true)
},[])
if (!mount) {
  return<>{children}</>
}
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
} 