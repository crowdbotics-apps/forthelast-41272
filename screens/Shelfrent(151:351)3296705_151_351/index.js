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
      <View style={styles.View_151_353}>
        <Text style={styles.Text_151_353}>Shelf</Text>
      </View>
      <View style={styles.View_151_354}>
        <View style={styles.View_I151_354_5_40}>
          <View style={styles.View_I151_354_5_41} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c05efd81-824b-429c-bb6f-8611559a7e86"
            }}
            style={styles.ImageBackground_I151_354_5_42}
          />
          <View style={styles.View_I151_354_5_43} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2e7be3e-a77c-489f-8b0b-79b9516b1cf7"
          }}
          style={styles.ImageBackground_I151_354_5_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09cb316a-5912-4d4e-94c2-0d58f38a7e58"
          }}
          style={styles.ImageBackground_I151_354_5_48}
        />
        <View style={styles.View_I151_354_5_53}>
          <View style={styles.View_I151_354_5_53_138_112}>
            <Text style={styles.Text_I151_354_5_53_138_112}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_151_355}>
        <View style={styles.View_151_356}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16afc55e-d8fa-4122-a257-4ee96e763978"
            }}
            style={styles.ImageBackground_151_357}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d84cb59-89a0-46a3-ac27-0fdb784cfd26"
            }}
            style={styles.ImageBackground_151_359}
          />
        </View>
        <View style={styles.View_151_361}>
          <View style={styles.View_151_362}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a9eb04f-0e0d-4f93-a8b7-ad067724f851"
              }}
              style={styles.ImageBackground_151_363}
            />
          </View>
        </View>
        <View style={styles.View_151_365}>
          <View style={styles.View_151_366}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/050560be-4c31-4257-aedf-9322a2550291"
              }}
              style={styles.ImageBackground_151_367}
            />
          </View>
        </View>
        <View style={styles.View_151_369}>
          <View style={styles.View_151_370}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c606a6a-69e6-4c45-b6ad-f2848ebfc3f5"
              }}
              style={styles.ImageBackground_151_371}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_386_3720}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("151_189"))
        }
      >
        <View style={styles.View_151_374} />
        <View style={styles.View_151_375} />
        <View style={styles.View_151_376}>
          <Text style={styles.Text_151_376}>Read</Text>
        </View>
        <View style={styles.View_151_377}>
          <Text style={styles.Text_151_377}>Rent</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_151_446}>
        <View style={styles.View_151_447}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c9f8325-7616-43c3-8a52-313a0e700c4f"
            }}
            style={styles.ImageBackground_151_448}
          />
          <View style={styles.View_151_449}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2248cff-2db0-467a-897e-d79ee7fc72e8"
              }}
              style={styles.ImageBackground_151_450}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34f35836-c671-47c9-89cb-05deda21ec39"
              }}
              style={styles.ImageBackground_151_453}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/166e670b-5364-499f-b8c0-8ecfa78067c0"
              }}
              style={styles.ImageBackground_151_456}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f265843-b02f-4bb0-a40b-597a12bdadd2"
              }}
              style={styles.ImageBackground_151_459}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96f90388-ecf4-4b40-9db8-4b7eca078bc5"
              }}
              style={styles.ImageBackground_151_462}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f727fb35-6a1a-4083-97bf-edb568d76daf"
              }}
              style={styles.ImageBackground_151_465}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9134e12-bac0-4064-99ff-e2a6e7b0ecb3"
              }}
              style={styles.ImageBackground_151_466}
            />
          </View>
          <View style={styles.View_151_467}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/207d034e-3eca-4aa8-a0a0-cd35b5f26fbd"
              }}
              style={styles.ImageBackground_151_468}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c57f59d-d749-49a4-8dbc-120ba791a691"
              }}
              style={styles.ImageBackground_151_469}
            />
          </View>
          <View style={styles.View_151_477}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/773fa791-7eef-4b27-85e5-6af6c7e08987"
              }}
              style={styles.ImageBackground_151_478}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0ec3a58-a48d-4822-aa67-a36eaa79dee7"
              }}
              style={styles.ImageBackground_151_479}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_151_569}>
        <Text style={styles.Text_151_569}>
          You haven&#39;t borrowed a book here
        </Text>
      </View>
      <View style={styles.View_386_3864}>
        <View style={styles.View_I386_3864_380_3630} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3864_380_3646}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_254"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c57dff75-7acb-471b-93bf-c70e150d1769"
            }}
            style={styles.ImageBackground_I386_3864_380_3647}
          />
          <View style={styles.View_I386_3864_380_3649}>
            <Text style={styles.Text_I386_3864_380_3649}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3864_380_3642}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_189"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/313031b1-b627-4537-8d71-ae69cd210ab2"
            }}
            style={styles.ImageBackground_I386_3864_380_3643}
          />
          <View style={styles.View_I386_3864_380_3645}>
            <Text style={styles.Text_I386_3864_380_3645}>Shelf</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3864_380_3638}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("138_320"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f9ec304-5ecc-46db-960e-54eedb790e92"
            }}
            style={styles.ImageBackground_I386_3864_380_3639}
          />
          <View style={styles.View_I386_3864_380_3641}>
            <Text style={styles.Text_I386_3864_380_3641}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I386_3864_380_3631}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_571"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbefe54e-fc7b-49c3-804c-dd13116acb9f"
            }}
            style={styles.ImageBackground_I386_3864_380_3632}
          />
          <View style={styles.View_I386_3864_380_3637}>
            <Text style={styles.Text_I386_3864_380_3637}>Listen</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_151_353: {
    width: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_151_353: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_151_354: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I151_354_5_40: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("3%")
  },
  View_I151_354_5_41: {
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
  ImageBackground_I151_354_5_42: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I151_354_5_43: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I151_354_5_44: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  ImageBackground_I151_354_5_48: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("3%")
  },
  View_I151_354_5_53: {
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
  View_I151_354_5_53_138_112: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I151_354_5_53_138_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_151_355: {
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
  View_151_356: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_151_357: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_359: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_361: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_151_362: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_363: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_365: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_151_366: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_367: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_369: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_151_370: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_371: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_386_3720: {
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
  View_151_374: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 115, 92, 1)",
    borderWidth: 1
  },
  View_151_375: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 115, 92, 1)"
  },
  View_151_376: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_151_376: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_151_377: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_151_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_151_446: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_151_447: {
    width: wp("84%"),
    height: hp("38%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_448: {
    width: wp("84%"),
    height: hp("37%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_449: {
    width: wp("71%"),
    height: hp("28%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_151_450: {
    width: wp("47%"),
    height: hp("16%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_151_453: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_151_456: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_151_459: {
    width: wp("36%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_462: {
    width: wp("36%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_151_465: {
    width: wp("47%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_151_466: {
    width: wp("0%"),
    height: hp("12%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_151_467: {
    width: wp("23%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_151_468: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_151_469: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_477: {
    width: wp("26%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_151_478: {
    width: wp("21%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_151_479: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_151_569: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("78%"),
    justifyContent: "center"
  },
  Text_151_569: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_386_3864: {
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
  View_I386_3864_380_3630: {
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
  TouchableOpacity_I386_3864_380_3646: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%")
  },
  ImageBackground_I386_3864_380_3647: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I386_3864_380_3649: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3864_380_3649: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I386_3864_380_3642: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("2%")
  },
  ImageBackground_I386_3864_380_3643: {
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3864_380_3645: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3864_380_3645: {
    color: "rgba(255, 115, 92, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  TouchableOpacity_I386_3864_380_3638: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%")
  },
  ImageBackground_I386_3864_380_3639: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3864_380_3641: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3864_380_3641: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  TouchableOpacity_I386_3864_380_3631: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%")
  },
  ImageBackground_I386_3864_380_3632: {
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I386_3864_380_3637: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I386_3864_380_3637: {
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
