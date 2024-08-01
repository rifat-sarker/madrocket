import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Faculty() {
  return (
    <div className="mt-8 flex flex-wrap gap-6 justify-center">
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://i.ibb.co/jgvGKSJ/Sample-Male-Principal.jpg" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className=" mb-2">
            John Doe
          </Typography>
          <Typography color="" className="font-medium text-black" textGradient>
            Principal
          </Typography>
          <Typography className="font-medium text-black text-sm" textGradient>
            M.Ed
          </Typography>
          <Typography
            color="blue-gray"
            className="text-sm font-medium"
            textGradient
          >
            20 years of experience in educational administration.
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://i.ibb.co/JtqJH7H/Jane-Smith-450x579.jpg" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className=" mb-2">
            Jane Smith
          </Typography>
          <Typography color="" className="font-medium text-black" textGradient>
            Vice Principal
          </Typography>
          <Typography className="font-medium text-black text-sm" textGradient>
            M.Sc. in Physics
          </Typography>
          <Typography
            color="blue-gray"
            className="text-sm font-medium"
            textGradient
          >
            15 years of teaching experience
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://i.ibb.co/yYN8Pvk/Emily-Johnson-Profile.jpg" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className=" mb-2">
            Emily Johnson
          </Typography>
          <Typography color="" className="font-medium text-black" textGradient>
            English Teacher
          </Typography>
          <Typography className="font-medium text-black text-sm" textGradient>
            M.A. in English
          </Typography>
          <Typography
            color="blue-gray"
            className="text-sm font-medium"
            textGradient
          >
            10 years of teaching experience
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/bB1mLF9/brown-michael.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className=" mb-2">
            Michael Brown
          </Typography>
          <Typography color="" className="font-medium text-black" textGradient>
            Mathematics Teacher
          </Typography>
          <Typography className="font-medium text-black text-sm" textGradient>
            M.Sc. in Mathematics
          </Typography>
          <Typography
            color="blue-gray"
            className="text-sm font-medium"
            textGradient
          >
            8 years of teaching experience
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/G9WyKbW/download.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className=" mb-2">
            Sophia Davis
          </Typography>
          <Typography color="" className="font-medium text-black" textGradient>
            Science Teacher
          </Typography>
          <Typography className="font-medium text-black text-sm" textGradient>
            M.Sc. in Chemistry
          </Typography>
          <Typography
            color="blue-gray"
            className="text-sm font-medium"
            textGradient
          >
            12 years of teaching experience
          </Typography>
        </CardBody>
      </Card>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/sFks9GW/Michael-Brown.png"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className=" mb-2">
            David Wilson
          </Typography>
          <Typography color="" className="font-medium text-black" textGradient>
            Computer Science Teacher
          </Typography>
          <Typography className="font-medium text-black text-sm" textGradient>
            B.Tech in Computer Science
          </Typography>
          <Typography
            color="blue-gray"
            className="text-sm font-medium"
            textGradient
          >
            5 years of teaching experience
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
