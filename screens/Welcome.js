import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';
// import RNTextDetector from "react-native-text-detector";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount = () => {
        const dirs = RNFetchBlob.fs.dirs;
        const clutter = dirs.PictureDir.split("Containers/Data");
        const picDir = clutter[0]+'Media/DCIM/100APPLE/';
        console.log(picDir);
        // const newFile = picDir+'IMG_0001.JPG';
        // const visionResp = await RNTextDetector.detectFromUri(newFile);
        //       console.log('visionResp', visionResp);
        // detectText = async (newFile) => {
        //     try {
        //       const options = {
        //         quality: 0.8,
        //         base64: true,
        //         skipProcessing: true,
        //       };
        //     //   const { uri } = await this.camera.takePictureAsync(options);
        //       const visionResp = await RNTextDetector.detectFromUri(newFile);
        //       console.log('visionResp', visionResp);
        //     } catch (e) {
        //       console.warn(e);
        //     }
        //   }

        // RNFetchBlob.fs.ls(picDir).then(files => {
        //     console.log(files);
            
            
            
        //   }).catch(error => console.log(error))

        }
    

    render() {
        return (
        <Container>
            <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
            </Header>
        </Container>
        );
  }
}

const styles = StyleSheet.create({
    
})

export default Welcome