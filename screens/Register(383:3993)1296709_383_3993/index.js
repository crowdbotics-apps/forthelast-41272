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
      <View style={styles.View_383_4015}>
        <View style={styles.View_383_4016}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5d047a6-e47c-4fbf-8c5e-9d1ec00315de"
            }}
            style={styles.ImageBackground_383_4017}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ee1bbb1-21e2-4b6d-a40e-be23253e07e1"
            }}
            style={styles.ImageBackground_383_4019}
          />
        </View>
        <View style={styles.View_383_4021}>
          <View style={styles.View_383_4022}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ab6f41d-28da-4ca8-939c-0ca9debc8a31"
              }}
              style={styles.ImageBackground_383_4023}
            />
          </View>
        </View>
        <View style={styles.View_383_4025}>
          <View style={styles.View_383_4026}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e80565d7-12d2-41be-8c51-f2ee07b52c79"
              }}
              style={styles.ImageBackground_383_4027}
            />
          </View>
        </View>
        <View style={styles.View_383_4029}>
          <View style={styles.View_383_4030}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fade2f2-5b36-47c4-8aa6-232ee14d332e"
              }}
              style={styles.ImageBackground_383_4031}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_383_3994} />
      <View style={styles.View_383_3995}>
        <Text style={styles.Text_383_3995}>Please Sign Up</Text>
      </View>
      <View style={styles.View_383_3996}>
        <View style={styles.View_I383_3996_5_40}>
          <View style={styles.View_I383_3996_5_41} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90209021-262c-432f-af78-79fc6223bd37"
            }}
            style={styles.ImageBackground_I383_3996_5_42}
          />
          <View style={styles.View_I383_3996_5_43} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4162841b-fa9e-49e3-91c2-d623b4b5b0da"
          }}
          style={styles.ImageBackground_I383_3996_5_44}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beeb4935-3240-4894-a1e3-a616fea7135e"
          }}
          style={styles.ImageBackground_I383_3996_5_48}
        />
        <View style={styles.View_I383_3996_5_53}>
          <View style={styles.View_I383_3996_5_53_138_112}>
            <Text style={styles.Text_I383_3996_5_53_138_112}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_383_4085}>
        <View style={styles.View_I383_4085_13_6015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa33a4f-b16b-41f5-aca2-dc16f18cbc52"
            }}
            style={styles.ImageBackground_I383_4085_13_6016}
          />
          <View style={styles.View_I383_4085_13_6018}>
            <View style={styles.View_I383_4085_13_6019}>
              <Text style={styles.Text_I383_4085_13_6019}>ID</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73365419-0e30-4aa9-b44d-2bcb268e75bb"
              }}
              style={styles.ImageBackground_I383_4085_13_6020}
            />
          </View>
          <View style={styles.View_I383_4085_13_6022} />
        </View>
        <View style={styles.View_I383_4085_13_6097}>
          <Text style={styles.Text_I383_4085_13_6097}>Enter your ID</Text>
        </View>
      </View>
      <View style={styles.View_383_4086}>
        <View style={styles.View_I383_4086_13_6015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1bee84d-69d1-45c1-9cd9-3085a7e12f3b"
            }}
            style={styles.ImageBackground_I383_4086_13_6016}
          />
          <View style={styles.View_I383_4086_13_6018}>
            <View style={styles.View_I383_4086_13_6019}>
              <Text style={styles.Text_I383_4086_13_6019}>Full Name</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f99404d-143f-48cc-95ee-7316809ae0fc"
              }}
              style={styles.ImageBackground_I383_4086_13_6020}
            />
          </View>
          <View style={styles.View_I383_4086_13_6022} />
        </View>
        <View style={styles.View_I383_4086_13_6097}>
          <Text style={styles.Text_I383_4086_13_6097}>Enter your name</Text>
        </View>
      </View>
      <View style={styles.View_383_4087}>
        <View style={styles.View_I383_4087_13_6015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32b98fe4-4719-4594-ae82-b1cbef557457"
            }}
            style={styles.ImageBackground_I383_4087_13_6016}
          />
          <View style={styles.View_I383_4087_13_6018}>
            <View style={styles.View_I383_4087_13_6019}>
              <Text style={styles.Text_I383_4087_13_6019}>Email</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8782e103-2313-4869-ac49-8815285f3050"
              }}
              style={styles.ImageBackground_I383_4087_13_6020}
            />
          </View>
          <View style={styles.View_I383_4087_13_6022} />
        </View>
        <View style={styles.View_I383_4087_13_6097}>
          <Text style={styles.Text_I383_4087_13_6097}>Enter your email</Text>
        </View>
      </View>
      <View style={styles.View_383_4088}>
        <View style={styles.View_I383_4088_13_6015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8cd5d58-3a5d-4165-b874-234ab9e58585"
            }}
            style={styles.ImageBackground_I383_4088_13_6016}
          />
          <View style={styles.View_I383_4088_13_6018}>
            <View style={styles.View_I383_4088_13_6019}>
              <Text style={styles.Text_I383_4088_13_6019}>Birth of Date</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a1eebed-57cb-4810-a5f8-bf9f168650eb"
              }}
              style={styles.ImageBackground_I383_4088_13_6020}
            />
          </View>
          <View style={styles.View_I383_4088_13_6022} />
        </View>
        <View style={styles.View_I383_4088_13_6097}>
          <Text style={styles.Text_I383_4088_13_6097}>DD/MM/YYYY</Text>
        </View>
      </View>
      <View style={styles.View_383_4092}>
        <View style={styles.View_I383_4092_13_6015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3ae3348-70b6-4b24-a9a0-58a54778e612"
            }}
            style={styles.ImageBackground_I383_4092_13_6016}
          />
          <View style={styles.View_I383_4092_13_6018}>
            <View style={styles.View_I383_4092_13_6019}>
              <Text style={styles.Text_I383_4092_13_6019}>Password</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/988a168b-6426-4205-a79d-9756b6c03251"
              }}
              style={styles.ImageBackground_I383_4092_13_6020}
            />
          </View>
          <View style={styles.View_I383_4092_13_6022}>
            <View style={styles.View_I383_4092_13_6022_13_1051}>
              <View style={styles.View_I383_4092_13_6022_13_1051_33437_4761}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b947b8e3-c5e6-4b84-892a-fe535feb4616"
                  }}
                  style={
                    styles.ImageBackground_I383_4092_13_6022_13_1051_33437_4762
                  }
                />
                <View style={styles.View_I383_4092_13_6022_13_1051_33437_4765}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46ae639f-3f65-4147-8fce-68aacac79b1d"
                    }}
                    style={
                      styles.ImageBackground_I383_4092_13_6022_13_1051_33437_4766
                    }
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52e24b3e-e069-42fc-981a-ea9ea3745755"
                    }}
                    style={
                      styles.ImageBackground_I383_4092_13_6022_13_1051_33437_4767
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I383_4092_13_6097}>
          <Text style={styles.Text_I383_4092_13_6097}>Enter your password</Text>
        </View>
      </View>
      <View style={styles.View_383_4093}>
        <View style={styles.View_I383_4093_13_6015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/623dffe5-5ecb-4526-8a0b-295973939177"
            }}
            style={styles.ImageBackground_I383_4093_13_6016}
          />
          <View style={styles.View_I383_4093_13_6018}>
            <View style={styles.View_I383_4093_13_6019}>
              <Text style={styles.Text_I383_4093_13_6019}>
                Confirm Password
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd449095-1525-450c-b83f-bdcde44459bd"
              }}
              style={styles.ImageBackground_I383_4093_13_6020}
            />
          </View>
          <View style={styles.View_I383_4093_13_6022}>
            <View style={styles.View_I383_4093_13_6022_13_1051}>
              <View style={styles.View_I383_4093_13_6022_13_1051_33437_4761}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf3559d-fa81-4874-b59a-3562d8a7cbd7"
                  }}
                  style={
                    styles.ImageBackground_I383_4093_13_6022_13_1051_33437_4762
                  }
                />
                <View style={styles.View_I383_4093_13_6022_13_1051_33437_4765}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78b5919e-d935-4336-b88f-7277915d2a34"
                    }}
                    style={
                      styles.ImageBackground_I383_4093_13_6022_13_1051_33437_4766
                    }
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed8f79a1-a983-499a-99ea-e24f0436f262"
                    }}
                    style={
                      styles.ImageBackground_I383_4093_13_6022_13_1051_33437_4767
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I383_4093_13_6097}>
          <Text style={styles.Text_I383_4093_13_6097}>
            Confirm your password
          </Text>
        </View>
      </View>
      <View style={styles.View_383_4094}>
        <View style={styles.View_383_4095} />
        <View style={styles.View_383_4096}>
          <Text style={styles.Text_383_4096}>
            Agree with Term and Conditions
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_383_4179}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("138_320"))
        }
      >
        <View style={styles.View_I383_4179_304_1580}>
          <Text style={styles.Text_I383_4179_304_1580}>Register</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_383_4015: {
    width: wp("42%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_383_4016: {
    width: wp("33%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  ImageBackground_383_4017: {
    width: wp("33%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_383_4019: {
    width: wp("33%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_4021: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_383_4022: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_383_4023: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_4025: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_383_4026: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_383_4027: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_4029: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_383_4030: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_383_4031: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_3994: {
    width: wp("100%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(255, 115, 92, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_383_3995: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_383_3995: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_383_3996: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I383_3996_5_40: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("3%")
  },
  View_I383_3996_5_41: {
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
  ImageBackground_I383_3996_5_42: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I383_3996_5_43: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I383_3996_5_44: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%")
  },
  ImageBackground_I383_3996_5_48: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("3%")
  },
  View_I383_3996_5_53: {
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
  View_I383_3996_5_53_138_112: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I383_3996_5_53_138_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_383_4085: {
    width: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I383_4085_13_6015: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4085_13_6016: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4085_13_6018: {
    width: wp("79%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4085_13_6019: {
    width: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I383_4085_13_6019: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_I383_4085_13_6020: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_I383_4085_13_6022: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4085_13_6097: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I383_4085_13_6097: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_383_4086: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I383_4086_13_6015: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4086_13_6016: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4086_13_6018: {
    width: wp("79%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4086_13_6019: {
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I383_4086_13_6019: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_I383_4086_13_6020: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_I383_4086_13_6022: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4086_13_6097: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I383_4086_13_6097: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_383_4087: {
    width: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I383_4087_13_6015: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4087_13_6016: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4087_13_6018: {
    width: wp("79%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4087_13_6019: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I383_4087_13_6019: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_I383_4087_13_6020: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_I383_4087_13_6022: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4087_13_6097: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I383_4087_13_6097: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_383_4088: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I383_4088_13_6015: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4088_13_6016: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4088_13_6018: {
    width: wp("79%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4088_13_6019: {
    width: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I383_4088_13_6019: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_I383_4088_13_6020: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%")
  },
  View_I383_4088_13_6022: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4088_13_6097: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I383_4088_13_6097: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_383_4092: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I383_4092_13_6015: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4092_13_6016: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4092_13_6018: {
    width: wp("79%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4092_13_6019: {
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I383_4092_13_6019: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_I383_4092_13_6020: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I383_4092_13_6022: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4092_13_6022_13_1051: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4092_13_6022_13_1051_33437_4761: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4092_13_6022_13_1051_33437_4762: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I383_4092_13_6022_13_1051_33437_4765: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4092_13_6022_13_1051_33437_4766: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I383_4092_13_6022_13_1051_33437_4767: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4092_13_6097: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I383_4092_13_6097: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_383_4093: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I383_4093_13_6015: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4093_13_6016: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4093_13_6018: {
    width: wp("79%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4093_13_6019: {
    width: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I383_4093_13_6019: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_I383_4093_13_6020: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%")
  },
  View_I383_4093_13_6022: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4093_13_6022_13_1051: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I383_4093_13_6022_13_1051_33437_4761: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4093_13_6022_13_1051_33437_4762: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I383_4093_13_6022_13_1051_33437_4765: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I383_4093_13_6022_13_1051_33437_4766: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I383_4093_13_6022_13_1051_33437_4767: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I383_4093_13_6097: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I383_4093_13_6097: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_383_4094: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("90%")
  },
  View_383_4095: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(79, 79, 79, 1)",
    borderWidth: 1
  },
  View_383_4096: {
    width: wp("40%"),
    minWidth: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_383_4096: {
    color: "rgba(0, 22, 135, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_383_4179: {
    width: wp("82%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("96%"),
    backgroundColor: "rgba(64, 84, 177, 1)",
    overflow: "hidden"
  },
  View_I383_4179_304_1580: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I383_4179_304_1580: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
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
