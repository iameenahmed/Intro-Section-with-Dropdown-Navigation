import arrowDownIcon from "../assets/icon-arrow-down.svg";
import todoIcon from "../assets/icon-todo.svg";
import calenderIcon from "../assets/icon-calendar.svg";
import remindersIcon from "../assets/icon-reminders.svg";
import planningIcon from "../assets/icon-planning.svg";
import { useState } from "react";

function Menu() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className="w-full bg-AlmostWhite px-6 md:flex md:items-center md:justify-between md:gap-10 md:px-0">
      <ul className="mt-20 flex flex-col gap-4 text-MediumGray md:mt-0 md:flex-row md:gap-10">
        <li className="hover:text-AlmostBlack">
          <a
            href="#"
            className="flex items-center gap-1"
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
          >
            Features{" "}
            <img
              className={`${
                isFeaturesOpen &&
                "rotate-180 transform transition-transform duration-300"
              }`}
              src={arrowDownIcon}
              alt="arrow icon"
            />
          </a>

          {/* DROP DOWN START */}

          <div
            className={`${
              !isFeaturesOpen && "hidden"
            } rounded-lg px-6 py-4 md:absolute md:top-16 md:-ml-16 md:bg-white md:shadow-xl`}
          >
            <ul className="space-y-1 text-MediumGray">
              <li className="flex items-center gap-4 hover:text-AlmostBlack">
                <img src={todoIcon} alt="todo icon" /> Todo list
              </li>
              <li className="flex items-center gap-4 hover:text-AlmostBlack">
                <img src={calenderIcon} alt="calender icon" /> Calender
              </li>
              <li className="flex items-center gap-4 hover:text-AlmostBlack">
                <img src={remindersIcon} alt="reminder icon" />
                Reminders
              </li>
              <li className="flex items-center gap-4 hover:text-AlmostBlack">
                <img src={planningIcon} alt="planning icon" />
                Planning
              </li>
            </ul>
          </div>

          {/* DROP DOWN END */}
        </li>
        <li className="hover:text-AlmostBlack">
          <a
            href="#"
            className="flex items-center gap-1"
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
          >
            Company
            <img
              className={`${
                isCompanyOpen &&
                "rotate-180 transform transition-transform duration-300"
              }`}
              src={arrowDownIcon}
              alt="arrow icon"
            />
          </a>

          {/* DROP DOWN START */}

          <div
            className={`${
              !isCompanyOpen && "hidden"
            } block rounded-lg px-6 py-4 md:absolute md:top-16 md:bg-white md:shadow-xl`}
          >
            <ul className="space-y-1 text-MediumGray">
              <li className="hover:text-AlmostBlack">History</li>
              <li className="hover:text-AlmostBlack">Our Team</li>
              <li className="hover:text-AlmostBlack">Blog</li>
            </ul>
          </div>

          {/* DROP DOWN END */}
        </li>
        <li className="hover:text-AlmostBlack">
          <a href="#">Careers</a>
        </li>
        <li className="hover:text-AlmostBlack">
          <a href="#">About</a>
        </li>
      </ul>

      <div className="mt-8 flex flex-col gap-4 md:mt-0 md:flex-row md:gap-6 lg:gap-10">
        <button className="text-MediumGray hover:text-AlmostBlack">
          Login
        </button>
        <button className="inline-block rounded-xl border border-MediumGray bg-AlmostWhite px-4 py-2 text-MediumGray hover:border-AlmostBlack hover:text-AlmostBlack ">
          Register
        </button>
      </div>
    </nav>
  );
}
export default Menu;
