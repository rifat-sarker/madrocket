import photo from "../../assets/sports_day.jpg";
import photo2 from "../../assets/science_exhibition.jpg";
import photo3 from "../../assets/cultural_fest.jpg";
import photo4 from "../../assets/classroom.png";
import photo5 from "../../assets/library.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Gallery = () => {
  return (
    <div className=" mt-12">
      <h3 className="font-bold text-xl mb-2">Gallery</h3>
      <hr className="w-full size-5" />
      <div className="flex flex-wrap justify-center gap-4">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={photo} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Students participating in various sports events.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={photo2} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Students presenting their science projects.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={photo3} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Students performing in the cultural fest.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={photo4} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              A glimpse of our interactive classrooms
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={photo5} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Students reading and studying in the school library
            </Typography>
          </CardBody>
        </Card>
      </div>

      <div className="mt-12 flex flex-col place-items-center">
        <h3 className="font-bold py-3 text-xl">Videos</h3>
        <hr className="w-full size-6" />
        <div className="lg:flex items-center justify-center gap-8 p-4">
          <div>
            <h3 className="font-bold py-3">
              Virtual tour of Springdale Public School
            </h3>
            <iframe
              className="lg:w-[560px] lg:h-[315px] md:w-[400px] md:h-[200px] "
              src="https://www.youtube.com/embed/ktlfwnEvJQE?si=RGCO4zlTxhCjS10E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h3 className="font-bold py-3">
              Highlights from the Annual Function 2023
            </h3>
            <iframe
              className="lg:w-[560px] lg:h-[315px] md:w-[400px] md:h-[200px]"
              src="https://www.youtube.com/embed/2rzm_yoxA3s?si=5V2W2wk-ObXTxkCz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
