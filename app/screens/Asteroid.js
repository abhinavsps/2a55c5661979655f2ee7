import React,{useState} from 'react';
import { Container,Content, Card, CardItem, Text, Body } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useRoute} from '@react-navigation/native'

function Asteroid(){
    const route = useRoute()
    const [name,setName]= useState("");
    const [url,setUrl]= useState("");
    const [hazardous,setHazardous]= useState("");


    React.useEffect(()=>{
        setName(route.params.name)
        setUrl(route.params.url)
        setHazardous(route.params.is_hazardous)

    },[])

    return(
        
        <Container>
            <Content style={{width:"80%",marginTop:hp("10%"),alignSelf:"center"}}>
                <Card>
                    <CardItem header bordered>
                        <Text>Name</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                                {name}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text>URL</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                            {url}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text>Hazardous</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                                {hazardous.toString()}
                            </Text>
                        </Body>
                    </CardItem>

                </Card>
            </Content>

        </Container>
    )
}

export default Asteroid;