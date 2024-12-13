"use client"

import { DatePicker, Space } from 'antd';
import Link from 'next/link';
const { RangePicker } = DatePicker;

const Hero = () => {

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.duration[0].value)
    console.log(e.target.duration[1].value)
    console.log(e.target.guest.value)
    console.log(e.target.room.value)
  }

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center bg-[#00000066] bg-blend-multiply rounded-b-3xl px-32 pt-48" style={{ backgroundImage: "url(https://i.postimg.cc/yNg2zyCz/5c0f8a1f98d6aad9fd9a91ad72e2adf5photo15660737712596a8506099945.jpg)" }}>
        <h6 className="text-center text-4xl text-white font-bold max-w-2xl mx-auto uppercase">Indulge Your Wanderlust: Book Your Stay</h6>
        <div className="bg-[#00000099] m-10 p-4">
          <form onSubmit={handleSubmit} className="flex justify-center border-2 border-[#bd9966] rounded-tl-3xl rounded-br-3xl p-8 m-10" action="">
            <Space direction="horizontal" size={12}>
              <RangePicker name="duration" className="rounded-l-3xl bg-[#f9fafb80] border-x-2 border-y-0 rounded-r-none text-black py-4 pl-8" />
            </Space>
            <select name="guest" id="" className="text-black bg-[#f9fafb80] py-3 px-6">
              <option value="">Guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
            <select name="room" id="" className="bg-[#f9fafb80] border-x-2 text-black py-3 px-6">
              <option value="">Rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
            <Link href="/rooms" className="bg-[#bd9966] hover:bg-[#bd996680] text-white rounded-r-3xl flex items-center gap-2 px-3 py-2 uppercase">check now</Link>
          </form>
        </div>
        <div className="flex gap-8 text-white mt-12 py-8 px-4 bg-[#00000099] w-1/2">
          <div>
            <h6 className="text-3xl">300+</h6>
            <p>Destination</p>
          </div>
          <div>
            <h6 className="text-3xl">20,000+</h6>
            <p>Happy Customer</p>
          </div>
          <div>
            <h6 className="text-3xl">100+</h6>
            <p>Experienced Guide</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Hero;
