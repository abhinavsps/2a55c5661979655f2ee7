import React,{useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { ApiConfig } from '../service/Api';
import { BaseUrl,apikey} from '../service/ApiConfig';
import { Container, InputGroup, Input,Content, Button, Text,StyleProvider } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native'
import ProgressBar from '../service/ProgressBar'
function Home(){

    const navigation = useNavigation()
    const [asteroidId,setAsteroidId]= useState("");
    const [hideProgress,setHideProgress]= useState(true);


    const getAsteroid=()=>{
        setHideProgress(false)
        new ApiConfig().getJSON(BaseUrl+asteroidId+"?api_key="+apikey)
        .then((response) => {
            setHideProgress(true)
            const data= response.data
            setAsteroidId("")
            navigation.navigate("Asteroid",{"name":data.name,"url":data.nasa_jpl_url,"is_hazardous":data.is_potentially_hazardous_asteroid})
        }).catch((ERROR) => {
            setHideProgress(false)
            if(ERROR.response.status===404){
                alert("Data not found")
            }
        })
    }

    const getrandomAsteroid=()=>{
        setHideProgress(false)
        new ApiConfig().getJSON(BaseUrl+"browse"+"?api_key="+apikey)
        .then((response) => {
            getAsteroidDetails(response.data.near_earth_objects[Math.floor(Math.random()*response.data.near_earth_objects.length)].id)
        }).catch((ERROR) => {
            setHideProgress(true)
            console.log(ERROR.response)
        })
    }
    const getAsteroidDetails=(ID)=>{
        new ApiConfig().getJSON(BaseUrl+ID+"?api_key="+apikey)
        .then((response) => {
            setHideProgress(true)
            const data= response.data
            navigation.navigate("Asteroid",{"name":data.name,"url":data.nasa_jpl_url,"is_hazardous":data.is_potentially_hazardous_asteroid})
        }).catch((ERROR) => {
            setHideProgress(true)
            console.log(ERROR.response)
        })
    }

    return(
        
        <Container>
            <Content style={{width:"80%",marginTop:hp("10%"),alignSelf:"center"}}>
                <InputGroup  borderType="rounded" >
                        <Input value={asteroidId} placeholder="Enter Asteroid ID" onChangeText={(txt)=>{setAsteroidId(txt)}} />
                </InputGroup>
                <Button disabled={!asteroidId} onPress={()=>getAsteroid(asteroidId)} block>
                    <Text>Primary</Text>
                </Button>

                <Button  onPress={()=>getrandomAsteroid()} block>
                    <Text>Random Asteroid</Text>
                </Button>
                
                {/* <Content >
                        <Button primary> Primary </Button>
                </Content> */}

            </Content>
                <ProgressBar hide={hideProgress} />
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
export default Home;