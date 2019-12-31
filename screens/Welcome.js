import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';

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
        RNFetchBlob.fs.scanFile([ { path : picDir } ])
        .then((res) => {
            // scan file success
            console.log("hey",res);

        })
        .catch((err) => {
            // scan file error
        })        
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