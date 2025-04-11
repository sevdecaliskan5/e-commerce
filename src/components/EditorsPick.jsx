import editorman from "../assets/images/editorman.png";
import editorwoman from "../assets/images/editorwoman.png";
import editorwoman2 from "../assets/images/editorwoman2.png";
import editorman2 from "../assets/images/editorman2.png";

function EditorsPick() {
  return (
    <div>
      <div className="pt-10">
        <div className="flex flex-col max-w-[40rem] mx-auto text-center gap-2 flex-wrap">
          <h2 className="text-2xl font-bold">EDITOR PICK</h2>
          <p className="text-sm font-normal text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="bg-[#FAFAFA] mt-10 pb-10">
          <div className="flex gap-5 w-fit mx-auto flex-wrap font-bold text-base">
            <div className="relative">
              <img
                src={editorman}
                className="w-[510px] h-[500px] object-cover"
              />
              <a
                href="#"
                className="absolute left-7 bottom-7 py-2 px-4 bg-white"
              >
                MEN
              </a>
            </div>
            <div className="relative">
              <img
                src={editorwoman}
                className="w-[240px] h-[500px] object-cover"
              />
              <a
                href="#"
                className="absolute left-7 bottom-7 py-2 px-4 bg-white"
              >
                WOMEN
              </a>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="relative">
                <img
                  src={editorwoman2}
                  className="w-[240px] h-[242px] object-cover"
                />
                <a
                  href=""
                  className="absolute left-7 bottom-7 py-2 px-4 bg-white"
                >
                  ACCESSORIES
                </a>
              </div>
              <div className="relative">
                <img
                  src={editorman2}
                  className="w-[240px] h-[242px] object-cover"
                />
                <a
                  href=""
                  className="absolute left-7 bottom-7 py-2 px-4 bg-white"
                >
                  KIDS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
