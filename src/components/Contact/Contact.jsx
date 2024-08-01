import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col place-items-center space-y-4">
        <p>
          <span className="font-bold">Address:</span> Springdale Public School,
          123 Education Lane, Cityville, State, ZIP Code
        </p>
        <p>
          <span className="font-bold">Phone:</span> +1 (123) 456-7890
        </p>
        <p>
          <span className="font-bold">Email:</span> info@springdale.edu
        </p>

        <Card color="transparent" shadow={false}>
          <p className="font-bold py-4 mt-10 text-xl text-center">
            Contact Form:
          </p>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Message
              </Typography>
              <Input
                type="text"
                size="lg"
                placeholder="Message"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <button className="mt-6 text-white w-full my-6g px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
              Login
            </button>
          </form>
        </Card>
        <p className="font-bold">Google Maps Integration:</p>
        <iframe
          style={{ padding: "50px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.2923930765883!2d79.0821379753997!3d21.100905985296414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf6a5657a20f%3A0x1e4346487f7ceac!2sMadrocket%20Technologies%20%26%20Media!5e0!3m2!1sen!2sbd!4v1722506945806!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
