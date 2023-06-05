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
      <View style={styles.View_151_284}>
        <View style={styles.View_I151_284_5_40}>
          <View style={styles.View_I151_284_5_41} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16e43fc4-a97b-4d2c-9f1e-4718b317ca42"
            }}
            style={styles.ImageBackground_I151_284_5_42}
          />
          <View style={styles.View_I151_284_5_43} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c527b00d-424d-4c86-8415-50f7e4ac8f30"
          }}
          style={styles.ImageBackground_I151_284_5_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1f4df89-a0f2-499b-b922-07146b627ddb"
          }}
          style={styles.ImageBackground_I151_284_5_48}
        />
        <View style={styles.View_I151_284_5_53}>
          <View style={styles.View_I151_284_5_53_138_112}>
            <Text style={styles.Text_I151_284_5_53_138_112}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_151_283}>
        <Text style={styles.Text_151_283}>Shelf</Text>
      </View>
      <View style={styles.View_151_285}>
        <View style={styles.View_151_286}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4e38a2a-2485-4634-9a9a-f167409c7724"
            }}
            style={styles.ImageBackground_151_287}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cc69bf5-6ebe-405c-a884-1df2ecf6c6d8"
            }}
            style={styles.ImageBackground_151_289}
          />
        </View>
        <View style={styles.View_151_291}>
          <View style={styles.View_151_292}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7ae40f8-4227-4ce0-9838-d651d87acac5"
              }}
              style={styles.ImageBackground_151_293}
            />
          </View>
        </View>
        <View style={styles.View_151_295}>
          <View style={styles.View_151_296}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5faae22-6dbe-4d7b-94c1-a334a978766f"
              }}
              style={styles.ImageBackground_151_297}
            />
          </View>
        </View>
        <View style={styles.View_151_299}>
          <View style={styles.View_151_300}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/847f6c47-1eb5-43d2-8c8d-d64305d79b85"
              }}
              style={styles.ImageBackground_151_301}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_395_3805}>
        <TouchableOpacity
          style={styles.TouchableOpacity_151_322}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_351"))
          }
        >
          <View style={styles.View_151_319} />
          <View style={styles.View_151_320} />
          <View style={styles.View_151_323}>
            <Text style={styles.Text_151_323}>Read</Text>
          </View>
          <View style={styles.View_151_324}>
            <Text style={styles.Text_151_324}>Rent</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9651efa6-52fa-4eff-88a3-810aa216753d"
        }}
        style={styles.ImageBackground_151_325}
      />
      <View style={styles.View_151_332}>
        <Text style={styles.Text_151_332}>Title: Antares</Text>
      </View>
      <View style={styles.View_151_333}>
        <Text style={styles.Text_151_333}>Author: Anonymus</Text>
      </View>
      <View style={styles.View_151_334} />
      <View style={styles.View_151_335} />
      <View style={styles.View_151_336}>
        <Text style={styles.Text_151_336}>3/58 Chapter Completed</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64525098-bdfb-4953-989e-d628835a8f17"
        }}
        style={styles.ImageBackground_151_337}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b4d5c67-1747-4a2e-8a08-f1f1ec9476f8"
        }}
        style={styles.ImageBackground_151_346}
      />
      <View style={styles.View_151_340}>
        <Text style={styles.Text_151_340}>Title: With J</Text>
      </View>
      <View style={styles.View_151_341}>
        <Text style={styles.Text_151_341}>Author: LicaLullaby</Text>
      </View>
      <View style={styles.View_151_342} />
      <View style={styles.View_151_343} />
      <View style={styles.View_151_344}>
        <Text style={styles.Text_151_344}>99/104 Chapter Completed</Text>
      </View>
      <View style={styles.View_386_3846}>
        <View style={styles.View_I386_3846_380_3630} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3846_380_3646}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_254"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4212fbc8-a171-4437-a087-3dc50e1c9731"
            }}
            style={styles.ImageBackground_I386_3846_380_3647}
          />
          <View style={styles.View_I386_3846_380_3649}>
            <Text style={styles.Text_I386_3846_380_3649}>Account</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I386_3846_380_3642}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10a9420c-2dd4-457d-8ad8-cd5552fbab53"
            }}
            style={styles.ImageBackground_I386_3846_380_3643}
          />
          <View style={styles.View_I386_3846_380_3645}>
            <Text style={styles.Text_I386_3846_380_3645}>Shelf</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3846_380_3638}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("138_320"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec732bd7-1ba4-4790-b5f9-7cdf4ecc73af"
            }}
            style={styles.ImageBackground_I386_3846_380_3639}
          />
          <View style={styles.View_I386_3846_380_3641}>
            <Text style={styles.Text_I386_3846_380_3641}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3846_380_3631}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_571"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb0b91aa-3cfc-4e28-8203-800ebf396a96"
            }}
            style={styles.ImageBackground_I386_3846_380_3632}
          />
          <View style={styles.View_I386_3846_380_3637}>
            <Text style={styles.Text_I386_3846_380_3637}>Listen</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_151_284: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_284_5_40: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("3%")
  },
  View_I151_284_5_41: {
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
  ImageBackground_I151_284_5_42: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I151_284_5_43: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I151_284_5_44: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  ImageBackground_I151_284_5_48: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("3%")
  },
  View_I151_284_5_53: {
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
  View_I151_284_5_53_138_112: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_284_5_53_138_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_151_283: {
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_151_283: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_151_285: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_151_286: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_151_287: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_289: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_291: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_151_292: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_293: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_295: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_151_296: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_297: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_299: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_151_300: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_301: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_395_3805: {
    width: wp("86%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_151_322: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_319: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1
  },
  View_151_320: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 115, 92, 1)"
  },
  View_151_323: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_151_323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_151_324: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_151_324: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_151_325: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%"),
    resizeMode: "cover"
  },
  View_151_332: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("37%"),
    justifyContent: "center"
  },
  Text_151_332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_333: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("40%"),
    justifyContent: "center"
  },
  Text_151_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_334: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("45%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1
  },
  View_151_335: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("45%"),
    backgroundColor: "rgba(255, 115, 92, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1
  },
  View_151_336: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("47%"),
    justifyContent: "center"
  },
  Text_151_336: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_151_337: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59%")
  },
  ImageBackground_151_346: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("63%"),
    resizeMode: "cover"
  },
  View_151_340: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_151_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_341: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("72%"),
    justifyContent: "center"
  },
  Text_151_341: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_342: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("76%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1
  },
  View_151_343: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("76%"),
    backgroundColor: "rgba(255, 115, 92, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1
  },
  View_151_344: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_151_344: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_386_3846: {
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
  View_I386_3846_380_3630: {
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
  TouchableOpacity_I386_3846_380_3646: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%")
  },
  ImageBackground_I386_3846_380_3647: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I386_3846_380_3649: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3846_380_3649: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I386_3846_380_3642: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("2%")
  },
  ImageBackground_I386_3846_380_3643: {
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3846_380_3645: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3846_380_3645: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  TouchableOpacity_I386_3846_380_3638: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%")
  },
  ImageBackground_I386_3846_380_3639: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3846_380_3641: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3846_380_3641: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  TouchableOpacity_I386_3846_380_3631: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%")
  },
  ImageBackground_I386_3846_380_3632: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3846_380_3637: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3846_380_3637: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
