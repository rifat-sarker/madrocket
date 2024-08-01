import photo from "../../assets/sports_day.jpg";
import photo2 from "../../assets/science_exhibition.jpg";
import photo3 from "../../assets/cultural_fest.jpg";
import photo4 from "../../assets/classroom.png";
import photo5 from "../../assets/library.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
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
    </div>
  );
};

export default Gallery;
