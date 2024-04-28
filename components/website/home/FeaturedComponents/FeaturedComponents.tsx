"use client";
import React from "react";
import Image from "next/image";
import { Component, Search } from "lucide-react";
import "./Feature.css";
type Props = {};

function FeaturedComponents({ featureContainerRef }: any) {
  return (
    <div
      ref={featureContainerRef}
      className="text-[#FFFCE1] text-center mx-auto py-10"
    >
      {/* heading  */}
      <span className="text-3xl  md:text-4xl font-semibold">
        Paradoxui Components
      </span>

      {/* components  */}
      <div className="w-full md:flex  mt-10 justify-center items-center gap-3">
        {/* left part  */}
        <div className="md:w-[40%] w-full flex flex-col gap-2 justify-center items-center">
          {/* first row  */}
          <div className="flex  w-full text-center justify-center items-center gap-2">
            <div className="w-full   gap-5  bg-primary-900 hover:border-[1px] custom-shadow   border-primary-700 cursor-pointer rounded-xl h-[15rem] flex flex-col justify-center items-center p-2">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
            <div className="w-full  bg-primary-900 hover:border-[1px] custom-shadow border-primary-700 cursor-pointer rounded-xl h-[15rem] flex justify-center items-center p-2">
              <button className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8  rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4  rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                <p className="z-10 absolute bottom-2 left-2">See more</p>
              </button>
            </div>
          </div>
          {/* second row  */}
          <div className=" overflow-hidden bg-primary-900 hover:border-[1px] custom-shadow flex h-[7.5rem] w-full text-center justify-center items-center   border-primary-700 cursor-pointer rounded-xl">
            <div className="messageBox ">
              <div className="fileUploadWrapper">
                <label htmlFor="file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 337 337"
                  >
                    <circle
                      stroke-width="20"
                      stroke="#6c6c6c"
                      fill="none"
                      r="158.5"
                      cy="168.5"
                      cx="168.5"
                    ></circle>
                    <path
                      stroke-linecap="round"
                      stroke-width="25"
                      stroke="#6c6c6c"
                      d="M167.759 79V259"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-width="25"
                      stroke="#6c6c6c"
                      d="M79 167.138H259"
                    ></path>
                  </svg>
                  <span className="tooltip">Add an image</span>
                </label>
                <input type="file" id="file" name="file" />
              </div>
              <input
                // required=""
                placeholder="Message..."
                type="text"
                id="messageInput"
              />
              <button id="sendButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 664 663"
                >
                  <path
                    fill="none"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="33.67"
                    stroke="#6c6c6c"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* third row  */}
          <div className="flex bg-primary-900 hover:border-[1px] custom-shadow justify-center items-center  h-[15rem] w-full text-center j   border-primary-700 cursor-pointer rounded-xl">
            <ul className="example-2">
              <li className="icon-content">
                <a
                  target="_blank"
                  href="https://linkedin.com/"
                  aria-label="LinkedIn"
                  data-social="linkedin"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">LinkedIn</div>
              </li>
              <li className="icon-content">
                <a
                  target="_blank"
                  href="https://www.github.com/"
                  aria-label="GitHub"
                  data-social="github"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">GitHub</div>
              </li>
              <li className="icon-content">
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  data-social="instagram"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Instagram</div>
              </li>
              <li className="icon-content">
                <a
                  target="_blank"
                  href="https://youtube.com/"
                  aria-label="Youtube"
                  data-social="youtube"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Youtube</div>
              </li>
            </ul>
          </div>
        </div>
        {/* right part  */}
        <div className="md:w-[60%] w-full flex flex-col gap-2 justify-center items-center">
          {/* first row  */}
          <div className="flex md:flex-row   flex-col w-full text-center justify-center items-center gap-2">
            <div className="w-full bg-primary-900 hover:border-[1px] custom-shadow overflow-hidden   border-primary-700 cursor-pointer rounded-xl h-[19rem] flex flex-col gap-2 justify-center items-center p-2">
              {/* <span className="">Card</span> */}
              <div className=" h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"></div>

                <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                  <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                    More Info
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                <h1 className="z-20 font-bold font-Poppin text-primary-600 group-hover:text-white duration-500 text-[1.4em]">
                  HEADING
                </h1>
              </div>
            </div>
            <div className="w-full bg-primary-900 hover:border-[1px] custom-shadow  flex-col gap-2 overflow-hidden border-primary-700 cursor-pointer rounded-xl h-[19rem] flex justify-center items-center p-2">
              <div className="card">
                <div className="background"></div>
                <div className="logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29.667 31.69"
                    className="logo-svg"
                  >
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
                      transform="translate(0 0)"
                    ></path>
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                      transform="translate(-45.91 0)"
                    ></path>
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                      transform="translate(0 -51.963)"
                    ></path>
                  </svg>
                </div>
                <div className="box box1">
                  <span className="icon">
                    <svg
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
                  </span>
                </div>
                <div className="box box2">
                  {" "}
                  <span className="icon">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </span>
                </div>
                <div className="box box3">
                  <span className="icon">
                    <svg
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="box box4"></div>
              </div>
            </div>
          </div>

          {/* bottom part */}
          {/* card  */}
          <div className="card-anim bg-primary-900 hover:border-[1px] custom-shadow  border-primary-700 cursor-pointer   flex mx-auto justify-center items-center  flex-col gap-6  p-20 w-full rounded-2xl  ">
            <p className="text-[17px] md:text-[16px]">
              The road to freedom starts from here
            </p>
            <h2 className="text-sm md:text-2xl font-medium text-nowrap">
              Build awesome apps with <span>Paradoxui</span>.
            </h2>
            {/* buttons  */}
            <div className="flex md:flex-row flex-col justify-center  items-center gap-2 text-[15px] font-semibold">
              {/* button explore  */}
              <button className="w-[11rem] md:w-[11rem] h-[2rem] md:h-[2.5rem] text-[12px] text-center bg-secondary-400 rounded-full p-2 text-primary-800">
                Explore components
              </button>
              {/* button search components  */}
              <button className="w-[11rem] md:w-[11rem] h-[2rem] md:h-[2.5rem] text-[12px] flex justify-center items-center gap-2  text-center border-primary-700 cursor-pointer bg-primary-900 hover:border-[1px] custom-shadowhover:border-green-500   rounded-full p-2 text-primary-100">
                {/* icon search  */}
                <div className="w-[15px] cursor-pointer flex justify-center items-center">
                  <Search className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-nowrap">Explore components</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponents;
