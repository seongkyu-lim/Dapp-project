import { Grid } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import { mintAnimalTokenContract } from "../contracts";

interface MyAnimalProps {
    account: string;
}

const MyAnimal: FC<MyAnimalProps> = ({account}) => {
    const [animalCardArray, setAnimalCardArray] = useState<string[]>();
    const getAnimalToken = async () => {
        try{
            const balanceLength = await mintAnimalTokenContract.methods.balanceOf(account).call();

            const tempAnimalCardArray = [];

            for(let i = 0; i < parseInt(balanceLength, 10); i++){
                const animalTokenId = await mintAnimalTokenContract.methods.tokenOfOwnerByIndex(account, i).call();
                const animalType = await mintAnimalTokenContract.methods.animalTypes(animalTokenId).call();
                tempAnimalCardArray.push(animalType);
            }
            setAnimalCardArray(tempAnimalCardArray);
        }catch(err){
            console.error(err);
        }
    }
    useEffect(() => {
        if(!account) return;
        getAnimalToken();
    }, [account]);

    useEffect(() =>{
        console.log(animalCardArray);
    }, [animalCardArray]);

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={8} >
            {animalCardArray && animalCardArray.map((v, i) => {
                    return <AnimalCard key={i} animalType={v} />
                })};
        </Grid>
    );
};

export default MyAnimal;