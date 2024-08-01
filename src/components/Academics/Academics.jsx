import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Academics = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold text-center py-2">Curriculum</h3>
      <div className="flex gap-6 justify-center mb-6">
        <Menu>
          <MenuHandler>
            <button className="text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Primary (Grades 1-5)
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Mathematics</MenuItem>
            <MenuItem>Science</MenuItem>
            <MenuItem>Social Studies</MenuItem>
            <MenuItem>Art</MenuItem>
            <MenuItem>Physical Education</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuHandler>
            <button className="text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Secondary (Grades 6-10)
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem>English</MenuItem>
            <MenuItem>Mathematics</MenuItem>
            <Menu
              placement="right-start"
              open={openMenu}
              handler={setOpenMenu}
              allowHover
              offset={15}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Science
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <MenuItem>Physics</MenuItem>
                <MenuItem>Chemistry</MenuItem>
                <MenuItem>Biology</MenuItem>
              </MenuList>
            </Menu>
            <MenuItem>Social Studies</MenuItem>
            <MenuItem>Computer Science</MenuItem>
            <MenuItem>Physical Education</MenuItem>
            <MenuItem>Art</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuHandler>
            <button className="text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Senior Secondary (Grades 11-12)
            </button>
          </MenuHandler>
          <MenuList>
            <Menu
              placement="right-start"
              open={openMenu}
              handler={setOpenMenu}
              allowHover
              offset={15}
            >
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Science Stream
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <MenuItem>Physics</MenuItem>
                <MenuItem>Chemistry</MenuItem>
                <MenuItem>Biology</MenuItem>
                <MenuItem>Mathematics</MenuItem>
                <MenuItem>Computer Science</MenuItem>
                <MenuItem>English</MenuItem>
              </MenuList>
            </Menu>

            <Menu placement="right-start" allowHover offset={15}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Commerce Stream
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
              <MenuList>
                <MenuItem>Accountancy</MenuItem>
                <MenuItem>Business Studies</MenuItem>
                <MenuItem>Economics</MenuItem>
                <MenuItem>Mathematics</MenuItem>
                <MenuItem>English</MenuItem>
              </MenuList>
            </Menu>
          </MenuList>
        </Menu>
      </div>
      <div className="py-4 text-center">
        <h3 className="text-xl font-bold text-center py-2">
          Teaching Methodologies
        </h3>
        <p>
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </div>
      <div className="py-4 text-center">
        <h3 className="text-xl font-bold text-center py-2">
          Educational Resources
        </h3>
        <p>
          Digital classrooms, interactive learning modules, and access to online
          educational platforms
        </p>
      </div>
    </div>
  );
};

export default Academics;
