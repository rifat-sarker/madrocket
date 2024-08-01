import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Card className="w-96 mt-16 mx-auto">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <button className="w-full text-white px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
          Sign Up
        </button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account?
          <Link to={"/login"}>
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Login
            </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </Card>
  );
}
