import React, {FC} from "react";
import {Image} from '@chakra-ui/react';


interface AnimalCardProps {
    animalType:string;
}

const AnimalCard: FC<AnimalCardProps> = ({animalType}) => {
    return (
    <Image w={150} h={150} src={`images/${animalType}.jpeg`} alt="AnimalCard"/>
    );
};

export default AnimalCard;