import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen text-lg flex items-center justify-center bg-[#b6b3b9]">
      <nav className="flex flex-row items-center justify-between w-9/12 h-24">
        <div>
          <img
            className="rounded-full max-h-16"
            src="https://static.vecteezy.com/system/resources/thumbnails/006/298/276/small/gear-smart-eps-icon-digital-tech-business-logo-free-vector.jpg"
            alt="logo"
          />
        </div>
        <div className="w-3/5 text-[#363537] font-black flex flex-row items-center justify-between content-between gap-[6vw]">
          <Link
            className="hover:text-[#e9e8ea] hover:scale-[1.2] transition duration-500 ease-in-out "
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#e9e8ea] hover:scale-[1.2] transition duration-500 ease-in-out"
            href="/dashboard"
          >
            Perfil
          </Link>
          <Link
            className="hover:text-[#e9e8ea] hover:scale-[1.2] transition duration-500 ease-in-out"
            href="/dashboard/purchases"
          >
            Compras
          </Link>
          <Link
            className="hover:text-[#e9e8ea] hover:scale-[1.2] transition duration-500 ease-in-out flex gap-2 flex-row"
            href="/cart"
          >
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                viewBox="0 0 48 41"
                fill="none"
              >
                <path
                  d="M1 1H4.28775C5.49752 1 6.55311 1.74317 6.86623 2.80917L7.77475 5.92267M7.77475 5.92267C20.9889 5.58443 34.1904 6.92616 47 9.90933C45.0454 15.2263 42.7231 20.3917 40.0639 25.375H13.4536M7.77475 5.92267L13.4536 25.375M13.4536 25.375C11.5662 25.375 9.75615 26.0598 8.42158 27.2788C7.08701 28.4978 6.33725 30.1511 6.33725 31.875H43.698M9.89542 38.375C9.89542 38.806 9.70798 39.2193 9.37434 39.5241C9.0407 39.8288 8.58818 40 8.11634 40C7.64449 40 7.19198 39.8288 6.85833 39.5241C6.52469 39.2193 6.33725 38.806 6.33725 38.375C6.33725 37.944 6.52469 37.5307 6.85833 37.226C7.19198 36.9212 7.64449 36.75 8.11634 36.75C8.58818 36.75 9.0407 36.9212 9.37434 37.226C9.70798 37.5307 9.89542 37.944 9.89542 38.375ZM40.1399 38.375C40.1399 38.806 39.9524 39.2193 39.6188 39.5241C39.2851 39.8288 38.8326 40 38.3608 40C37.8889 40 37.4364 39.8288 37.1028 39.5241C36.7691 39.2193 36.5817 38.806 36.5817 38.375C36.5817 37.944 36.7691 37.5307 37.1028 37.226C37.4364 36.9212 37.8889 36.75 38.3608 36.75C38.8326 36.75 39.2851 36.9212 39.6188 37.226C39.9524 37.5307 40.1399 37.944 40.1399 38.375Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
