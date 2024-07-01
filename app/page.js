'use client'

import { ToastContainer } from "react-toastify";

import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark"/>    
      <Header/>
      <BlogList/>
      <Footer/>

    </>
  );
}
