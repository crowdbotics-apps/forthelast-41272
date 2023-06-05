import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_162_337}>
        <Text style={styles.Text_162_337}>Profile</Text>
      </View>
      <View style={styles.View_162_338}>
        <View style={styles.View_I162_338_5_40}>
          <View style={styles.View_I162_338_5_41} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9579880a-0497-4149-9ab8-b33c2a3f5ab2"
            }}
            style={styles.ImageBackground_I162_338_5_42}
          />
          <View style={styles.View_I162_338_5_43} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8134a5d-a35a-4e2c-aacf-8c227656f309"
          }}
          style={styles.ImageBackground_I162_338_5_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/234401d9-5ae0-4ea5-a418-583eb01d54da"
          }}
          style={styles.ImageBackground_I162_338_5_48}
        />
        <View style={styles.View_I162_338_5_53}>
          <View style={styles.View_I162_338_5_53_138_112}>
            <Text style={styles.Text_I162_338_5_53_138_112}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_162_339}>
        <View style={styles.View_162_340}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/495e822c-ebd6-4005-a806-0bc8eac304c6"
            }}
            style={styles.ImageBackground_162_341}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf1224e7-8c6a-4407-9e99-95ff9468f009"
            }}
            style={styles.ImageBackground_162_343}
          />
        </View>
        <View style={styles.View_162_345}>
          <View style={styles.View_162_346}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ae2e3c2-2d34-44f1-8015-c56e6af73346"
              }}
              style={styles.ImageBackground_162_347}
            />
          </View>
        </View>
        <View style={styles.View_162_349}>
          <View style={styles.View_162_350}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f759056-3126-4fc0-956a-fb999628383c"
              }}
              style={styles.ImageBackground_162_351}
            />
          </View>
        </View>
        <View style={styles.View_162_353}>
          <View style={styles.View_162_354}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/916bca7d-0b02-48d7-aae2-ca5172314ed2"
              }}
              style={styles.ImageBackground_162_355}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_159_367}>
        <Text style={styles.Text_159_367}>IDXXXXXXXXX</Text>
      </View>
      <View style={styles.View_164_372}>
        <Text style={styles.Text_164_372}>Read </Text>
      </View>
      <View style={styles.View_164_374}>
        <Text style={styles.Text_164_374}>2</Text>
      </View>
      <View style={styles.View_164_379}>
        <Text style={styles.Text_164_379}>Read </Text>
      </View>
      <View style={styles.View_164_380}>
        <Text style={styles.Text_164_380}>2</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9119a633-ba9b-4de6-b4f6-9c21a0aec7de"
        }}
        style={styles.ImageBackground_164_381}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d68f566-33cc-4ff8-be2f-1d72cc91e337"
        }}
        style={styles.ImageBackground_183_378}
      />
      <View style={styles.View_164_382} />
      <TouchableOpacity
        style={styles.TouchableOpacity_164_386}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("180_355"))
        }
      >
        <Text style={styles.Text_164_386}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_164_387}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("183_379"))
        }
      >
        <Text style={styles.Text_164_387}>Account Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_164_388}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_95"))
        }
      >
        <Text style={styles.Text_164_388}>Log Out</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe0a5b5d-72dc-4d06-9317-72ee710b0904"
        }}
        style={styles.ImageBackground_164_383}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b64e4ce9-b6e3-4a24-a744-d222cee8dd14"
        }}
        style={styles.ImageBackground_164_384}
      />
      <View style={styles.View_386_3972}>
        <View style={styles.View_I386_3972_380_3630} />
        <View style={styles.View_I386_3972_380_3646}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7445094-5596-4776-a8a9-04075e0cc64e"
            }}
            style={styles.ImageBackground_I386_3972_380_3647}
          />
          <View style={styles.View_I386_3972_380_3649}>
            <Text style={styles.Text_I386_3972_380_3649}>Account</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3972_380_3642}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_189"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8d8bce4-d466-4d2c-a1f8-f9dfe137ebce"
            }}
            style={styles.ImageBackground_I386_3972_380_3643}
          />
          <View style={styles.View_I386_3972_380_3645}>
            <Text style={styles.Text_I386_3972_380_3645}>Shelf</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3972_380_3638}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("138_320"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d39338d7-014f-4ae8-9808-eebd068261b0"
            }}
            style={styles.ImageBackground_I386_3972_380_3639}
          />
          <View style={styles.View_I386_3972_380_3641}>
            <Text style={styles.Text_I386_3972_380_3641}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3972_380_3631}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_571"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03db6f19-ec78-4c3b-92b2-6423d4c52de0"
            }}
            style={styles.ImageBackground_I386_3972_380_3632}
          />
          <View style={styles.View_I386_3972_380_3637}>
            <Text style={styles.Text_I386_3972_380_3637}>Listen</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_393_3693}>
        <View style={styles.View_I393_3693_304_1862}>
          <View style={styles.View_I393_3693_304_1862_304_1443}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a4e1467-a2e1-49d2-8b2a-0696da882a98"
              }}
              style={
                styles.ImageBackground_I393_3693_304_1862_304_1443_33437_5110
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 115, 92, 1)" },
  View_2: { height: hp("109%") },
  View_162_337: {
    width: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_162_337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_162_338: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 115, 92, 1)"
  },
  View_I162_338_5_40: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("3%")
  },
  View_I162_338_5_41: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I162_338_5_42: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I162_338_5_43: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I162_338_5_44: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  ImageBackground_I162_338_5_48: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("3%")
  },
  View_I162_338_5_53: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I162_338_5_53_138_112: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I162_338_5_53_138_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_162_339: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_162_340: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_162_341: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_162_343: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_162_345: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_162_346: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_162_347: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_162_349: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_162_350: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_162_351: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_162_353: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_162_354: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_162_355: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_159_367: {
    width: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_159_367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_372: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_164_372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_374: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("54%"),
    justifyContent: "center"
  },
  Text_164_374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_379: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_164_379: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_380: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("54%"),
    justifyContent: "center"
  },
  Text_164_380: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_164_381: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("49%")
  },
  ImageBackground_183_378: {
    width: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  View_164_382: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableOpacity_164_386: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_164_386: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  TouchableOpacity_164_387: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("81%"),
    justifyContent: "center"
  },
  Text_164_387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  TouchableOpacity_164_388: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("93%"),
    justifyContent: "center"
  },
  Text_164_388: {
    color: "rgba(248, 5, 5, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  ImageBackground_164_383: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%")
  },
  ImageBackground_164_384: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89%")
  },
  View_386_3972: {
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I386_3972_380_3630: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I386_3972_380_3646: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%")
  },
  ImageBackground_I386_3972_380_3647: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I386_3972_380_3649: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3972_380_3649: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I386_3972_380_3642: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("2%")
  },
  ImageBackground_I386_3972_380_3643: {
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3972_380_3645: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3972_380_3645: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  TouchableOpacity_I386_3972_380_3638: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%")
  },
  ImageBackground_I386_3972_380_3639: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3972_380_3641: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3972_380_3641: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  TouchableOpacity_I386_3972_380_3631: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%")
  },
  ImageBackground_I386_3972_380_3632: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3972_380_3637: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3972_380_3637: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_393_3693: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I393_3693_304_1862: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I393_3693_304_1862_304_1443: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I393_3693_304_1862_304_1443_33437_5110: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
