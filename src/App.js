import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { id } from "date-fns/locale"

function App() {
  return (
    <div className="App h-screen" style={{ backgroundColor: "#efefef" }}>
      <Header />
      <div className='hidden sm:flex mt-4 px-4'>
        <div className='left w-1/4 mr-4 flex flex-col'>
          <div className=''><Clock /></div>
          <div className='h-4'></div>
          <div className='flex-1'><Post /></div>
          <div className='h-4'></div>
          <div className='flex'>
            <Video src="https://www.youtube.com/embed/3e6_lp9tY74"/>
            <div className='w-4'></div>
            <Video src="https://www.youtube.com/embed/WRVsOCh907o" />
          </div>
        </div>
        <div className='main flex-1 bg-white rounded-lg flex justify-center items-center' style={{ height: "600px" }}>
          Calendar
        </div>
      </div>
      
      <div className='flex flex-col h-screen sm:hidden'>
        <div className='h-48 m-4'><Post/></div> 
        <div className='rounded-lg bg-white h-96 flex justify-center items-center'>Calendar</div>

      </div>

    </div>
  );
}

export default App;

const Header = () => {
  return (
    <div className='flex bg-white h-16 items-center' style={{ color: "#00a39d" }}>
      <div className='ml-4 sm:ml-12 h-3/4 flex items-center flex-1'>
        <img alt="logo" className="h-3/4" src="data:image/png;base64,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" />
      </div>
      <div className='transform -scale-x-100' style={{ height: "24px" }}><Icon name="search" />
      </div>
      <div className='ml-4' style={{ height: "24px" }}><Icon name="notification" /></div>

      <div className='hidden sm:block text-white rounded-md px-2 flex ml-4' style={{ backgroundColor: "#00a39d" }}>
        <select className='bg-transparent outline-none py-1'>
          <option className='text-gray-600'>Bulan</option>
          <option className='text-gray-600'>Minggu</option>
        </select>
      </div>
      <div className='mr-4 sm:mr-12 ml-4 sm:ml-16 flex items-center' style={{ height: "24px" }}>
        <Icon name="user" />
      </div>
    </div>
  )
}

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval)

  }, [])
  return (
    <div className='rounded-lg px-4 py-2 text-white' style={{ backgroundColor: "#34a39d" }}>
      <div className=' font-semibold' style={{ fontSize: "48px", lineHeight: "100%" }}>{format(time, "hh:mm")}</div>
      <div style={{}}>{format(time, "eeee, dd MMMM", { locale: id })}</div>
    </div>
  )
}

const Post = () => {
  return (
    <div className='rounded-lg bg-yellow-100 h-full w-full overflow-hidden relative'>
      <div className='w-full h-full absolute bottom-0 top-0 left-0 right-0' style={{ zIndex: "0" }}>
        <img
          src="https://www.indohomes.id/wp-content/uploads/2020/12/1594899262_background_1697.jpg"
          alt="post"
          className='w-full h-full object-cover object-center'
        />
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 p-4 text-white flex flex-col'
        style={{
          zIndex: "1",
          fontSize: "10px",
          background: "linear-gradient(170deg, rgba(234,170,67,1) 0%, rgba(234,170,67,0) 70%)"
        }}>
        <div className='text-white font-bold w-1/2' style={{ fontSize: "18px", lineHeight: "100%" }}>BSI Griya Simuda & BSI OTO</div>
        <div className='mt-4'>Rumah atau kendaraan? Miliki keduanya!</div>
        <div className='mt-4 flex-1'>Miliki rumah dan kendaraan di usia muda bukan hanya angan!<br />Saatnya wujudkan rumah bersama BSI Griya SiMuda serta kendaraan bersama BSI OTO</div>
        <div className='flex' style={{ fontSize: "8px", height: "24px", lineHeight: "100%" }}>
          <div className='flex mr-6 items-end' style={{ width: "25%" }}>
            <div className='rounded-sm bg-white h-full aspect-square mr-2'></div>
            <div>Info produk Griya SiMuda</div>
          </div>
          <div className='flex items-end' style={{ width: "25%" }}>
            <div className='rounded-sm bg-white h-full aspect-square mr-2'></div>
            <div>Info produk BSI OTO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Video = (props) => {
  return (
    <div className='rounded-lg bg-whiteflex-1 h-20 overflow-hidden'>
      <iframe
        width="100%"
        height="100%"
        src={props.src}
        title="YouTube video player"
        frameBorder="0"
        //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

// Icons
const Icon = (props) => {
  switch (props.name) {
    case "search": return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 20 20"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>

    );
    case "notification": return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
        />
      </svg>
    )
    case "user": return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
        height="100%"
        width="100%"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>

    );

    default: return null;
  }
}
