import editorman from "../assets/images/editorman.png";
import editorwoman from "../assets/images/editorwoman.png";
import editorwoman2 from "../assets/images/editorwoman2.png";
import editorman2 from "../assets/images/editorman2.png";

function EditorsPick() {
  return (
    <section className="pt-20 bg-white">

      <div className="text-center max-w-xl mx-auto px-4">
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#252B42]">
          EDITOR'S PICK
        </h2>
        <p className="text-sm md:text-base text-[#737373] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="bg-[#FAFAFA] mt-10 py-10 px-4">
        <div className="flex flex-wrap gap-4 justify-center max-w-[1200px] mx-auto">

          <div className="relative cursor-pointer">
            <img
              src={editorman}
              className="w-[300px] md:w-[510px] h-[300px] md:h-[500px] object-cover"
              alt="Men"
            />
            <a
              href="#"
              className="absolute bottom-6 left-6 bg-white px-4 py-2 text-black font-bold text-sm"
            >
              MEN
            </a>
          </div>

          <div className="relative cursor-pointer">
            <img
              src={editorwoman}
              className="w-[150px] md:w-[240px] h-[300px] md:h-[500px] object-cover"
              alt="Women"
            />
            <a
              href="#"
              className="absolute bottom-6 left-6 bg-white px-4 py-2 text-black font-bold text-sm"
            >
              WOMEN
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="relative cursor-pointer">
              <img
                src={editorwoman2}
                className="w-[150px] md:w-[240px] h-[140px] md:h-[242px] object-cover"
                alt="Accessories"
              />
              <a
                href="#"
                className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-bold text-sm"
              >
                ACCESSORIES
              </a>
            </div>
            <div className="relative cursor-pointer">
              <img
                src={editorman2}
                className="w-[150px] md:w-[240px] h-[140px] md:h-[242px] object-cover"
                alt="Kids"
              />
              <a
                href="#"
                className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-bold text-sm"
              >
                KIDS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;


