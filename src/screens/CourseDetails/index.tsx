import React, { useState } from 'react'
import { View, Text, Button, StatusBar, ScrollView, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../constants'
import { ImageBackground } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
// import colors from '../../constants/colors'
// import Video from 'react-native-video';
// import TestVideo from './TestVideo'
// import VideoPlayer from './VideoPlayer'
// import ExpoVideoPlayer from './ExpoVideoPlayer'

const image = { uri: 'https://imgs.search.brave.com/8GeOJon7zrB0CxwkDACaOlt18BlOevTEj2nzLNb_EaY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/ZWk5VnNjOHN0eU9H/WjluTjBJM1JBSGFF/OCZwaWQ9QXBp' };
// const image = { uri: 'https://www.pexels.com/video/waterfall-in-the-forest-6394054/' };

const CourseContentSection = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <View style={{ marginBottom: 10, backgroundColor: COLORS.lightGray, padding: 15, borderRadius: 10 }}>
            <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }}>Beginning</Text>
                <MaterialIcons name="keyboard-arrow-up" color={COLORS.primary} size={25} />
            </View>
            <View>
                <View style={{ backgroundColor: '#E8E8E8', padding: 7, marginBottom: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <MaterialCommunityIcons name="play-circle" color={COLORS.primary} size={25} />
                        <Text>JavaScript fundmentals</Text>
                    </View>
                    <Text style={{ color: COLORS.primary }}>15:43</Text>
                </View>
                <View style={{ backgroundColor: '#E8E8E8', padding: 7, marginBottom: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <MaterialCommunityIcons name="play-circle" color={COLORS.primary} size={25} />
                        <Text>JavaScript fundmentals</Text>
                    </View>
                    <Text style={{ color: COLORS.primary }}>15:43</Text>
                </View>
            </View>

        </View>
    )
}

function CourseDetails({ navigation }: any) {
    return (
        <ScrollView style={{position: 'relative'}}>
            <StatusBar />

            <ImageBackground source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.HeroBannerContent}>
                    <Text onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left-bold-outline" color={COLORS.primary} size={30} />
                    </Text>
                </View>
            </ImageBackground>

            {/* <Video source={{ uri: "https://www.pexels.com/video/a-waterfall-cascading-down-symmetrical-stones-5658118/" }}  
             // Can be a URL or a local file.
            //    ref={(ref) => {
            //      this.player = ref
            //    }}                                      // Store reference
            //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
            //    onError={this.videoError}               // Callback when video cannot be loaded
            //    style={styles.backgroundVideo} 
            /> */}
            {/* <View> */}
            {/* <TestVideo /> */}
            {/* <ExpoVideoPlayer /> */}
            {/* <VideoPlayer videoUrl='https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'/> */}
            {/* </View> */}

            <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20,
                //  marginTop: -20,
                  backgroundColor: 'white', padding: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hematology</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <MaterialCommunityIcons name="account" size={20} color={COLORS.primary} />
                        <Text style={{ fontSize: 16 }}>by Dr.Ramadan Selim</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <AntDesign name='star' color={COLORS.primayYellow} size={20} />
                        <Text style={{ fontSize: 16 }}>4.8</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: COLORS.darkGray }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione minus obcaecati quasi minima iusto totam.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Lessons</Text>
                    {/* course section */}
                    <CourseContentSection />
                    <CourseContentSection />
                    <CourseContentSection />

                </View>
            </View>
        </ScrollView >
    )
}

export default CourseDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',

    },
    HeroBannerContent: {
        color: 'white',
        minHeight: moderateScale(250),
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


//

//




