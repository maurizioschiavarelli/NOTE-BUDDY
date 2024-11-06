/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function HorizontalCard(props) {

  const { title, subTitle, description, imgUrl, link } = props;

  return (
    <Card className="flex w-full sm:max-w-[48rem] flex-col sm:flex-row m-2 bg-gray-800 text-white shadow-xl">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full sm:w-2/5 shrink-0 rounded-lg"
      >
        <img
          src={imgUrl}
          alt={`Immagine di ${title}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="white" className="mb-4 uppercase">
          {title}
        </Typography>
        <Typography variant="h4" color="white" className="mb-2">
          {subTitle}
        </Typography>
        <Typography color="white" className="mb-8 font-normal">
          {description}
        </Typography>
        <Link to={link} className="inline-block">
          <Button variant="text" color="white" className="flex items-center gap-2">
            Scopri di più
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
