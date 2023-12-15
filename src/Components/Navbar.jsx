import search_dark from "../assets/images/search-b.png";
import search_light from "../assets/images/search-w.png";
import toggle_light from "../assets/images/night.png";
import toggle_dark from "../assets/images/day.png";

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div
      className={`w-full flex justify-between items-center ${
        theme == "light" ? "bg-white" : "bg-[#282828]"
      }  py-[15px] px-[7%] transition-[0.5s] `}
    >
      <h1
        style={{ color: theme == "light" ? "black" : "white" }}
        className="w-[160px] cursor-pointer text-[35px] font-bold"
      >
        UK
      </h1>
      <ul
        style={{ color: theme == "light" ? "black" : "white" }}
        className="flex-1 list-none text-center "
      >
        <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
          Home
        </li>
        <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
          Products
        </li>
        <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
          Features
        </li>
        <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
          Pricing
        </li>
        <li className="inline-block my-[10px] mx-[20px] text-[18px] cursor-pointer">
          About
        </li>
      </ul>

      <div
        className={`flex items-center ${
          theme == "light" ? "bg-[#242424]" : "bg-white"
        } px-[20px] py-[10px] rounded-[50px] `}
      >
        <input
          type="search"
          placeholder="Search"
          className="p-[6px] bg-transparent outline-0 border-0 text-white text-[18px] max-w-[200px] "
        />
        <img
          src={theme == "light" ? search_light : search_dark}
          className="w-[20px]"
        />
      </div>

      <img
        src={theme == "light" ? toggle_light : toggle_dark}
        className="toggle-icon w-[50px] ml-[40px]"
        onClick={() => {
          changeTheme();
        }}
      />
    </div>
  );
};

export default Navbar;
