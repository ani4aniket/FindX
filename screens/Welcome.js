import React, { Component } from 'react';
import {
    StyleSheet,
    // Text,
    View,
    TouchableOpacity,
    // FlatList,
    Modal,
    Image,
    FlatList
  } from 'react-native';

import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';
// import RNTextDetector from "react-native-text-detector";
// import Gallery from './Gallery';
import FastImage from 'react-native-fast-image';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[],
            imageuri: '',
            ModalVisibleStatus: false,
        };
    }

    ShowModalFunction(visible, imageURL) {
        //handler to handle the click on image of Grid
        //and close button on modal
        this.setState({
          ModalVisibleStatus: visible,
          imageuri: imageURL,
        });
      }


    renderGallery = () => {
        const dirs = RNFetchBlob.fs.dirs;
        const clutter = dirs.PictureDir.split("Containers/Data");
        const picDir = clutter[0]+'Media/DCIM/100APPLE/';

        
        const imageDataBase = []

        RNFetchBlob.fs.ls(picDir).then(files => {
            
            files.map((f) => {
                // console.log(picDir+f);
                // RNFetchBlob.fs.readFile(picDir+f, 'base64')
                // .then((data) => {
                // // handle the data ..
                // var base64Icon = `data:image/jpg;base64,${data}`
                imageDataBase.push(picDir+f);

                // })

            })
            // console.log("files",imageDataBase );
            this.setState({images: imageDataBase});
            
            
        }).catch(error => console.log(error))

            return(
                <FlatList
                  data={this.state.images}
                  renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                      <TouchableOpacity
                        key={item.id}
                        style={{ flex: 1 }}
                        onPress={() => {
                          this.ShowModalFunction(true, item);
                        }}>
                        <FastImage
                          style={styles.image}
                          source={{
                            uri: item,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                  //Setting the number of column
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                />
            )

    }
    

    render() {

        
        if (this.state.ModalVisibleStatus) {
            return (
              <Modal
                transparent={false}
                animationType={'fade'}
                visible={this.state.ModalVisibleStatus}
                onRequestClose={() => {
                  this.ShowModalFunction(!this.state.ModalVisibleStatus, '');
                }}>
                <View style={styles.modelStyle}>
                  <FastImage
                    style={styles.fullImageStyle}
                    source={{ uri: this.state.imageuri }}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.closeButtonStyle}
                    onPress={() => {
                      this.ShowModalFunction(!this.state.ModalVisibleStatus, '');
                    }}>
                    <FastImage
                      source={{
                        uri:
                          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                      }}
                      style={{ width: 35, height: 35, marginTop: 16 }}
                    />
                  </TouchableOpacity>
                </View>
              </Modal>
            );
          } else {
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
                {this.renderGallery()}
            </Container>

               
            
            );
          }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    image: {
      height: 120,
      width: '100%',
    },
    fullImageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '98%',
      resizeMode: 'contain',
    },
    modelStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    closeButtonStyle: {
      width: 25,
      height: 25,
      top: 9,
      right: 9,
      position: 'absolute',
    },
  });

export default Welcome