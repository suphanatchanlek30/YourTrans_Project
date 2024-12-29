import React, { useState } from 'react';
import Logo from "../assets/logo/Logo.svg";
// import icon จาก react-icons
import { BiMenu, BiX } from 'react-icons/bi';
import { Link } from "react-scroll";

const Navbar = () => {
  // สร้าง State สำหรับเก็บสถานะเปิด/ปิดเมนู
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full flex items-center justify-between px-[20px] py-[10px] md:px-[62px] md:py-[20px] bg-white shadow font-body3">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-[121px] h-[32px] md:w-[140px] md:h-[35px]" />
      </div>

      {/* Icon เปลี่ยนตาม isOpen (ถ้าเปิด -> BiX, ถ้าปิด -> BiMenu) */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-[#1C1C1C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <BiX className="w-[30px] h-[28px]" />
          ) : (
            <BiMenu className="w-[30px] h-[28px]" />
          )}
        </button>
      </div>

      {/* Navigation Links (แสดงเมื่อหน้าจอ md ขึ้นไป) */}
      <div className="hidden text-[#1C1C1C] lg:flex space-x-[40px] text-[16px] font-medium">
        <Link to="home" smooth={true} duration={500} className="hover:text-[#1342eceb] cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="hover:text-[#1342eceb] cursor-pointer">About Us</Link>
        <Link to="services" smooth={true} duration={500} className="hover:text-[#1342eceb] cursor-pointer">Services</Link>
        <Link to="testimonials" smooth={true} duration={500} className="hover:text-[#1342eceb] cursor-pointer">Testimonials</Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-[#1342eceb] cursor-pointer">Contact Us</Link>
      </div>

      {/* Contact Us Button (แสดงเมื่อหน้าจอ md ขึ้นไป) */}
      <button
        type="button"
        className="hidden lg:inline-block bg-[#1341EC] font-body4 text-white text-[16px] font-semibold px-[28px] py-[12px] rounded-[6px] hover:bg-[#1342eceb]"
      >
        Contact Us
      </button>

      {/* Mobile Menu - แสดงเฉพาะเมื่อ isOpen === true และหน้าจอเล็ก (lg:hidden) */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md lg:hidden z-10">
          <div className="flex flex-col items-start p-4 space-y-2 text-[#1C1C1C] font-medium text-[16px]">
            <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-2 py-1 hover:text-[#1342eceb] cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-2 py-1 hover:text-[#1342eceb] cursor-pointer">About Us</Link>
            <Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-2 py-1 hover:text-[#1342eceb] cursor-pointer">Services</Link>
            <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-2 py-1 hover:text-[#1342eceb] cursor-pointer">Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block px-2 py-1 hover:text-[#1342eceb] cursor-pointer">Contact Us</Link>

            {/* ปุ่ม Contact Us สำหรับ mobile */}
            <button
              type="button"
              className="mt-2 bg-[#1341EC] font-body4 text-white text-[16px] font-semibold px-[28px] py-[12px] rounded-[6px] hover:bg-[#1342eceb]"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
