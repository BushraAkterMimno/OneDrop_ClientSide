import React from "react";
import FooterImg from "../assets/logo.png";
import MyLink from "./MyLink";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto mt-10 -mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={FooterImg} alt="Footer Logo" className="w-14 mb-4 -mt-18" />
          <p className="text-gray-400 leading-relaxed">
            OneDrop is dedicated to connecting blood donors with those in need, fostering a community of lifesavers through our user-friendly platform. Join us in making a difference, one donation at a time.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4 -mt-10 relative after:absolute after:w-10 after:h-0.5 after:bg-purple-500 after:-bottom-1 after:left-0">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><MyLink to="/" className="hover:text-white duration-150">Home</MyLink></li>
            {/* <li><MyLink to="/pet-adopt" className="hover:text-white duration-150">Pet Adopt</MyLink></li>
            <li><MyLink to="/pet-accessories" className="hover:text-white duration-150">Pet Accessories</MyLink></li>
            <li><MyLink to="/veterinary-team" className="hover:text-white duration-150">Veterinary Team</MyLink></li> */}
            <li><MyLink to="/search" className="hover:text-white duration-150">Search</MyLink></li>
            <li><MyLink to="/emergency" className="hover:text-white duration-150">Emergency</MyLink></li>
            {/* <li><MyLink to="/my-orders" className="hover:text-white duration-150">My Orders</MyLink></li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4 -mt-10 relative after:absolute after:w-10 after:h-0.5 after:bg-purple-500 after:-bottom-1 after:left-0">
            Company
          </h3>
          <ul className="space-y-2">
            <li><MyLink to="/about" className="hover:text-white duration-150">About Us</MyLink></li>
            <li><MyLink to="/contact" className="hover:text-white duration-150">Contact</MyLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4 -mt-10 relative after:absolute after:w-10 after:h-0.5 after:bg-purple-500 after:-bottom-1 after:left-0">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <MyLink to="https://facebook.com" className="text-white hover:text-blue-500 duration-200">
              <FaFacebookF />
            </MyLink>

            <MyLink to="https://x.com" className="text-white hover:text-black duration-200">
              <FaXTwitter />
            </MyLink>

            <MyLink to="https://instagram.com" className="text-white hover:text-pink-500 duration-200">
              <FaInstagram />
            </MyLink>

            <MyLink to="https://linkedin.com" className="text-white hover:text-blue-600 duration-200">
              <FaLinkedinIn />
            </MyLink>

            <MyLink to="mailto:pawmart@gmail.com" className="hover:text-blue-400 duration-200">
              <MdOutlineMail />
            </MyLink>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} OneDrop — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;