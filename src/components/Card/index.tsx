import { CardBody } from './styles'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

interface CardProps {
    title: string;
    description: string;
}

export const Card = ({ title, description }: CardProps) => {
    return (
        <CardBody>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton 
                            backgroundColor='#F9F9F9'
                            border='none'
                        >
                            <Box 
                                as='span' 
                                flex='1' 
                                textAlign='left' 
                                p={30} 
                                fontSize='16px' 
                                textColor='#1C2C44'
                                fontWeight='bold'
                                borderBottom='1px solid #D9D9D9'
                            >
                                {title}
                            </Box>
                            <AccordionIcon 
                                fontSize='16px'
                                marginRight='20px' 
                                textColor='#1C2C44' 
                                fontWeight='bold'
                            />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={133} p={30} fontSize='16px' textColor='#373737'>
                        {description}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </CardBody>
    )
}
