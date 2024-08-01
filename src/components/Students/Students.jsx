import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Students = () => {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-xl mb-2">Life at Springdale : </h3>
      <div className="flex gap-4 mb-8">
        <Menu>
          <MenuHandler>
            <button className="text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Extracurricular Activities
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Music</MenuItem>
            <MenuItem>Dance</MenuItem>
            <MenuItem>Drama</MenuItem>
            <MenuItem>Art</MenuItem>
            <MenuItem>Sports</MenuItem>
            <MenuItem>Robotics</MenuItem>
            <MenuItem> Debate Club</MenuItem>
            <MenuItem> Science Club</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuHandler>
            <button className="text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Clubs and Societies
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Literary Society</MenuItem>
            <MenuItem>Environmental Club</MenuItem>
            <MenuItem>Astronomy Club</MenuItem>
            <MenuItem>Coding Club</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <h3 className="font-bold mb-4 text-xl">Achievements:</h3>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/QNcLHBw/Bengaluru-boy-bags-gold-at-International-Mathematical-Olympiad.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              National Level Math Olympiad Winner
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              John Smith
            </Typography>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://i.ibb.co/rct5S1z/1-8-one-one.webp"
            />
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/bspSYQt/emily-states-2017-bolles.webp')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Gold Medalist in State Swimming Championship
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Sarah Lee
            </Typography>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://i.ibb.co/bspSYQt/emily-states-2017-bolles.webp"
            />
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/99rpg5z/Wheeler-High-School-earn-chance-to-compete-at-international-robotics-competition.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Winners of Inter-School Robotics Competition
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Tech Innovators Club
            </Typography>
            <Avatar
              size="xl"
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white"
              src="https://i.ibb.co/99rpg5z/Wheeler-High-School-earn-chance-to-compete-at-international-robotics-competition.jpg"
            />
          </CardBody>
        </Card>
      </div>
      <h3 className="font-bold text-xl mb-2">Life at Springdale : </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img className="h-full w-full" src="https://i.ibb.co/S6WyX91/A234616-C-B839-4-C16-95-FC-E472-EA81-E315-475x317.jpg" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className=" mb-2">
              Amy Parker
            </Typography>
            <Typography
              color=""
              className="font-medium text-black"
              textGradient
            >
              President
            </Typography>
            <Typography className="font-medium text-black text-sm" textGradient>
              Grade 12
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img className="w-full h-full" src="https://i.ibb.co/pW5r6YB/istockphoto-826276898-612x612.jpg" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className=" mb-2">
              Rajiv Mehta
            </Typography>
            <Typography
              color=""
              className="font-medium text-black"
              textGradient
            >
              Vice President
            </Typography>
            <Typography className="font-medium text-black text-sm" textGradient>
              Grade 11
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img className="w-full" src="https://i.ibb.co/fVWMx0c/122374301-unemotional-pretty-diverse-school-girl-walking.jpg" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className=" mb-2">
              Lisa Wong
            </Typography>
            <Typography
              color=""
              className="font-medium text-black"
              textGradient
            >
              Secretary
            </Typography>
            <Typography className="font-medium text-black text-sm" textGradient>
              Grade 10
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Students;
