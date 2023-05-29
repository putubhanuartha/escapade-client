import React, { useState } from "react";
import "../hotel_search_page/styles/color.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import ListCardHotel from "../../components/ListCardHotel";
function HotelSearchPage() {
  const [hotels, setHotels] = useState([]);
  const getData = async (destinasi, from, to, keyword) => {
    const res = await fetchSearchHotels({
      destination: destinasi,
      from_date: from,
      to_date: to,
      adult: 1,
      child: 0,
      baby: 0,
      keyword: keyword,
    });
    console.log(res);
    setHotels(res);
  };

  return (
    <div className="cucumbar-water">
      <div className="h-80 lg:h-56"></div>
      <div className="relative rounded-t-[4rem] bg-gray-100">
        <SearchBarHotel onSubmitSearch={getData} />
        <div className="container mx-auto pt-16">
          <div className="flex flex-col gap-y-6 items-center">
            {hotels.map((hotel,index) => (
              <ListCardHotel hotel={hotel} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const fetchSearchHotels = async ({
  destination,
  from_date,
  to_date,
  adult,
  child,
  baby,
  keyword,
}) => {
  try {
    const res = await axios.get(`http://localhost:3000/hotels`, {
      params: {
        destination,
        from_date,
        to_date,
        adult,
        child,
        baby,
        keyword,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
function SearchBarHotel({ onSubmitSearch }) {
  const [indexDropdown, setIndexDropdown] = useState(-1);
  const [dayRangeTo, setDayRangeTo] = useState(new Date());
  const [dayRangeFrom, setDayRangeFrom] = useState(new Date());
  const [keyword, setKeyword] = useState("");
  const [destinasi, setDestinasi] = useState("");

  return (
    <div className="absolute left-[50%] -translate-x-[50%] bg-white shadow-xl rounded-lg -top-56 lg:-top-28 px-3 py-2">
      <form className="flex lg:gap-x-3 lg:flex-row flex-col lg:gap-y-0 gap-y-3">
        <div className="flex flex-col border-[0.2px] border-gray-300 px-3 pt-1">
          <label htmlFor="destinasi" className="text-gray-500">
            Destinasi atau nama properti
          </label>
          <input
            type="text"
            name="destinasi"
            id="destinasi"
            onChange={(e) => {
              setDestinasi(e.target.value);
            }}
            placeholder="kota, bandara, stasiun, area"
            className="outline-none border-b-[2px] box-border border-transparent focus:border-cyan-500 w-52"
          />
        </div>
        <div className="flex items-center justify-evenly gap-x-3 border-[0.4px] border-gray-300">
          <input
            type="hidden"
            name="datefrom"
            id="datefrom"
            value={dayRangeFrom}
          />
          <input type="hidden" name="dateto" id="dateto" value={dayRangeTo} />
          <div>
            <p className="font-poppins ml-2">From</p>
            <DatePicker
              selected={dayRangeFrom}
              onChange={(date) => setDayRangeFrom(date)}
            />
          </div>
          <p className="font-semibold w-11">2 hari</p>
          <div>
            <p className="font-poppins ml-2">To</p>
            <DatePicker
              selected={dayRangeTo}
              onChange={(date) => setDayRangeTo(date)}
            />
          </div>
        </div>
        <div className="border-[0.4px] border-gray-300 px-3 pt-1 relative">
          <div
            className="w-36"
            onClick={() => {
              indexDropdown === 1 ? setIndexDropdown(-1) : setIndexDropdown(1);
            }}
          >
            <p className="text-gray-500">Jumlah tamu kamar</p>
            <p>Dewasa 1</p>
          </div>

          <PlanHotel
            indexDropdown={indexDropdown}
            setIndexDropdown={setIndexDropdown}
          />
        </div>
        <div className="flex gap-x-2">
          <div className="flex flex-col border-[0.2px] border-gray-300 px-3 pt-1 w-full">
            <label htmlFor="keyword" className="text-gray-500">
              Kata kunci (opsional)
            </label>
            <input
              type="text"
              name="keyword"
              id="keywordS"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              placeholder="bandara, statsiun, nama properti"
              className="outline-none border-b-[2px] w-52 box-border border-transparent focus:border-cyan-500"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmitSearch({
                destination: destinasi,
                from_date: dayRangeFrom,
                to_date: dayRangeTo,
                adult: 1,
                child: 0,
                baby: 0,
                keyword: keyword,
              });
            }}
            className="bg-cyan-700 text-white px-6 hover:-translate-y-0.5 hover:shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Cari
          </button>
        </div>
      </form>
    </div>
  );
}
function PlanHotel({ indexDropdown, setIndexDropdown }) {
  return (
    <ul
      className={`absolute px-2 z-40 bg-white rounded-sm py-2 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.2)] -right-24 -left-28 mt-2 ${
        indexDropdown === 1 || "hidden"
      }`}
    >
      <p className="text-sm mb-2 font-semibold">Pilih penumpang</p>
      <div className="flex flex-col gap-y-2">
        <li className="flex items-center justify-between">
          <p>Dewasa</p>
          <input
            type="number"
            className="w-12 py-1 outline-none border-none caret-transparent"
            min={1}
            defaultValue={1}
            max={10}
            placeholder="number"
            onKeyDown={(event) => event.preventDefault()}
          />
        </li>
        <li className="flex items-center justify-between">
          <div>
            <p>Anak</p>
            <p className="text-xs">(2-11 tahun)</p>
          </div>
          <input
            type="number"
            className="w-12 py-1 outline-none border-none caret-transparent"
            min={0}
            defaultValue={0}
            max={10}
            placeholder="number"
            onKeyDown={(event) => event.preventDefault()}
          />
        </li>
        <li className="flex items-center justify-between">
          <div>
            <p>Bayi Dipangku </p>
            <p className="text-xs">(14hari - 1 tahun)</p>
          </div>
          <input
            type="number"
            className="w-12 py-1 outline-none border-none caret-transparent"
            min={0}
            defaultValue={0}
            max={10}
            placeholder="number"
            onKeyDown={(event) => event.preventDefault()}
          />
        </li>
      </div>
      <button
        type="button"
        onClick={() => setIndexDropdown(-1)}
        className="hover:text-black text-cold hover:bg-slate-300 rounded-sm mt-2 ml-auto block px-2 py-0.5 bg-cyan-600 hover:shadow-lg transition-all duration-300"
      >
        Selesai
      </button>
    </ul>
  );
}
export default HotelSearchPage;
