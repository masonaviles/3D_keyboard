import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full">
      <section className="w-full h-full">
        <p className="absolute top-4 left-4
        bg-white text-black px-3 py-2 rounded-md">
          Try pressing your number keys.<br/>
          Look around by clicking and dragging with your mouse.
        </p>
        <a href="https://gitaddmason.dev/"
           className="absolute bottom-4 right-4 w-1/5
           transition-colors
           text-white text-center
           px-3 py-2 border-2 rounded-full 
           bg-green-500 border-green-400 
           hover:bg-green-200 hover:border-green-400 hover:text-green-800">Back</a>
        <iframe src='https://my.spline.design/keyboard-9df2ae81a4477008e78bb9389260d5bb/' frameborder='0' style={{ width: '100vw', height: '100vh', border: 'none' }}></iframe>
      </section>
    </main>
  );
}