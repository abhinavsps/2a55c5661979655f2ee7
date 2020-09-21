import React,{useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { ApiConfig } from '../service/Api';
import { BaseUrl,apikey} from '../service/ApiConfig';
import { Container, InputGroup, Input,Content, Button, Text,StyleProvider } from 'native-base';
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


    // const getAsteroid=()=>{
    //     new ApiConfig().getJSON(BaseUrl+asteroidId+"?api_key="+apikey)
    //     .then((response) => {
    //         console.log(response.data)
    //     }).catch((ERROR) => {
    //         if(ERROR.response.status===404){
    //             alert("Data not found")
    //         }
    //     })
    // }

    return(
        
        <Container>
            <Content style={{width:"80%",marginTop:hp("10%"),alignSelf:"center"}}>
               <Text>Name: {name}</Text>
               <Text>URL: {url}</Text>
               <Text>Hazardous {hazardous.toString()}</Text>


                
                {/* <Content >
                        <Button primary> Primary </Button>
                </Content> */}

            </Content>

        </Container>
    )
}
const customTheme = {
    'NativeBase.Button': {
      customStyleProp: {
        height: 70,
        borderRadius: 35,
        marginTop:50
      },
    }
}
export default Asteroid;