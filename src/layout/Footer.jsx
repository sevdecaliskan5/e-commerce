import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <div className="w-screen">
      <div className="bg-[#FAFAFA] py-[60px]">
        <div className="flex justify-between w-[80%] m-auto">
          <h3 className="font-mont-h3">Bandage</h3>
          <div className="flex gap-4">
            <Facebook size={20} className="text-[#77a6f8] hover:text-blue-600" />
            <Instagram size={20} className="text-[#77a6f8] hover:text-pink-500" />
            <Twitter size={20} className="text-[#77a6f8] hover:text-sky-500" />
          </div>
        </div>
      </div>

      <div className="flex pt-[3%] w-full m-auto gap-y-4">
        <div className="flex justify-between m-auto w-[80%] flex-wrap">
          <div className="flex flex-col mr-8">
            <h5 className="font-mont-h5 pb-[8px]">Company Info</h5>
            <a className="font-mont-a py-[10px]" href="#">About Us</a>
            <a className="font-mont-a pb-[10px]" href="#">Career</a>
            <a className="font-mont-a pb-[10px]" href="#">We are hiring</a>
            <a className="font-mont-a" href="#">Blog</a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 pb-[8px]">Legal</h5>
            <a className="font-mont-a py-[10px]" href="#">About Us</a>
            <a className="font-mont-a pb-[10px]" href="#">Career</a>
            <a className="font-mont-a pb-[10px]" href="#">We are hiring</a>
            <a className="font-mont-a" href="#">Blog</a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 pb-[8px]">Features</h5>
            <a className="font-mont-a py-[10px]" href="#">Business Marketing</a>
            <a className="font-mont-a pb-[10px]" href="#">User Analytics</a>
            <a className="font-mont-a pb-[10px]" href="#">Live Chat</a>
            <a className="font-mont-a" href="#">Unlimited Support</a>
          </div>

          <div className="flex flex-col">
            <h5 className="font-mont-h5 pb-[8px]">Resources</h5>
            <a className="font-mont-a py-[10px]" href="#">IOS & Android</a>
            <a className="font-mont-a pb-[10px]" href="#">Watch a Demo</a>
            <a className="font-mont-a pb-[10px]" href="#">Customers</a>
            <a className="font-mont-a" href="#">API</a>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-mont-h5">Get In Touch</label>
            <div className="flex pt-[14px]">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-[#F9F9F9] border border-gray-300 rounded-l-md px-4 w-[250px] h-[58px]"
                placeholder="Your Email"
                required
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Subscribe
              </button>
            </div>
            <p className="font-mont-p">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[74px] mt-[70px] bg-[#FAFAFA]">
        <p className="m-auto w-[80%] pt-[28px] font-mont-h5 text-[#737373]">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
