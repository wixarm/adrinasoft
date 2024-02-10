import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

import g1 from "../../assets/Img/g1.jpg";
import g2 from "../../assets/Img/g2.jpg";
import g3 from "../../assets/Img/g3.jpg";
import g4 from "../../assets/Img/g4.jpg";

const LastNewsSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="w-full md:w-80"
      >
        <Card className="bluehover w-full md:w-80 h-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={g1}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="h-44">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Cybernetic Revolution
            </Typography>
            <Typography>
              In a dystopian future where technology and humanity clash, players
              navigate the neon-lit streets of a cyberpunk city.
            </Typography>
          </CardBody>
        </Card>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="w-full md:w-80"
      >
        <Card className="bluehover w-full md:w-80 h-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={g2}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="h-44">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Eternal Odyssey
            </Typography>
            <Typography>
              Embark on an epic journey across fantastical realms in this
              sprawling open-world RPG.
            </Typography>
          </CardBody>
        </Card>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="w-full md:w-80"
      >
        <Card className="bluehover w-full md:w-80 h-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={g3}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="h-44">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Galactic Conquest
            </Typography>
            <Typography>
              Command your own fleet of starships in this expansive space
              strategy game set in a distant galaxy teeming with rival factions
              and alien civilizations.
            </Typography>
          </CardBody>
        </Card>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="w-full md:w-80"
      >
        <Card className="bluehover w-full md:w-80 h-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={g4}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="h-44">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Survival Frontier
            </Typography>
            <Typography>
              Step into the boots of a rugged frontiersman in the untamed
              American West of the 19th century.
            </Typography>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default LastNewsSection;
