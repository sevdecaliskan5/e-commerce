import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="w-screen">
      <div className="bg-[#FAFAFA] py-8 md:py-[60px]">
        <div className="max-w-[1050px] container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
            <h3 className="font-mont-h3 text-2xl font-bold md:text-3xl">Bandage</h3>
            <div className="flex gap-4">
              <Facebook
                size={20}
                className="text-primary-color hover:text-blue-600 cursor-pointer"
              />
              <Instagram
                size={20}
                className="text-primary-color hover:text-pink-500 cursor-pointer"
              />
              <Twitter
                size={20}
                className="text-primary-color hover:text-sky-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1050px] container mx-auto px-4 md:px-0 py-12 md:pt-[3%]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0">
          <div className="flex flex-col">
            <h5 className="font-mont-h5 text-base font-bold mb-4">
              Company Info
            </h5>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              About Us
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Career
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              We are hiring
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Blog
            </a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 text-base font-bold mb-4">Legal</h5>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              About Us
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Career
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              We are hiring
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Blog
            </a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 text-base font-bold mb-4">Features</h5>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Business Marketing
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              User Analytics
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Live Chat
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Unlimited Support
            </a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 text-base font-bold mb-4">Resources</h5>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              IOS & Android
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Watch a Demo
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              Customers
            </a>
            <a
              className="font-mont-a text-sm text-[#737373] py-2 hover:text-[#252B42]"
              href="#"
            >
              API
            </a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 text-base font-bold mb-4">
              Get In Touch
            </h5>
            <div className="flex flex-col md:flex-row">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-[#F9F9F9] border border-gray-300 rounded-md md:rounded-r-none px-4 w-full md:w-[250px] h-[58px] text-sm"
                placeholder="Your Email"
                required
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white rounded-md md:rounded-l-none px-4 py-4  h-[58px] hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-sm font-bold"
              >
                Subscribe
              </button>
            </div>
            <p className="font-mont-p text-sm text-[#737373] mt-2">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] mt-8 md:mt-[70px]">
        <div className="max-w-[1050px] container mx-auto px-4 md:px-0 py-4 md:py-6">
          <p className="font-mont-h5 text-sm text-[#737373] text-start">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
