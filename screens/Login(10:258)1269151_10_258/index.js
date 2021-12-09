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
      <View style={styles.View_10_259}>
        <View style={styles.View_10_260} />
        <View style={styles.View_10_261}>
          <View style={styles.View_10_262}>
            <View style={styles.View_10_263}>
              <Text style={styles.Text_10_263}>Sign in</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a80/93af/62029f44fef67c86f4ceb41ee445bdd6"
              }}
              style={styles.ImageBackground_10_264}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_10_265}>
        <Text style={styles.Text_10_265}>Create an account</Text>
      </View>
      <View style={styles.View_10_266}>
        <Text style={styles.Text_10_266}>Use Social Login</Text>
      </View>
      <View style={styles.View_111_0} />
      <View style={styles.View_10_271}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e25e/cc9d/d22b9b2520768799372b169d12614dee"
          }}
          style={styles.ImageBackground_10_272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cf6/44ad/7ac2a3efe2d05860c70e3c647f896d10"
          }}
          style={styles.ImageBackground_10_273}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c2f/e5e2/557f4e5a82a16a50587bd60741e06a26"
          }}
          style={styles.ImageBackground_10_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c2f/e5e2/557f4e5a82a16a50587bd60741e06a26"
          }}
          style={styles.ImageBackground_10_275}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c2f/e5e2/557f4e5a82a16a50587bd60741e06a26"
          }}
          style={styles.ImageBackground_10_276}
        />
        <View style={styles.View_10_277}>
          <View style={styles.View_10_278}>
            <View style={styles.View_10_279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3aa/da13/97bb3d192e82b66794074656a319b930"
                }}
                style={styles.ImageBackground_10_280}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_372}>
        <View style={styles.View_10_373}>
          <View style={styles.View_10_374} />
        </View>
        <View style={styles.View_10_375}>
          <View style={styles.View_10_376}>
            <Text style={styles.Text_10_376}>Smart Id</Text>
          </View>
          <View style={styles.View_111_1} />
          <View style={styles.View_10_377}>
            <View style={styles.View_10_378}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/424a/e5c0/acd6f85a603e4f3eaa5bb98795fd2e83"
                }}
                style={styles.ImageBackground_10_379}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db1/56af/2b1a7204689527545de3a4a062cb9428"
        }}
        style={styles.ImageBackground_10_385}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c134/ab79/20d7141640986871f11622f5aeb3c7f1"
        }}
        style={styles.ImageBackground_10_387}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46a6/9c52/61d50fdb7625a547b8fe6e21a1b7f9a6"
        }}
        style={styles.ImageBackground_10_389}
      />
      <View style={styles.View_111_2}>
        <Text style={styles.Text_111_2}>ديفممفيد</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_10_259: {
    width: wp("40%"),
    height: hp("7%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_10_260: {
    width: wp("40%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)"
  },
  View_10_261: {
    width: wp("19%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_10_262: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_263: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_264: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_10_265: {
    width: wp("37%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_10_265: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_266: {
    width: wp("24%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_10_266: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_0: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_271: {
    width: wp("196%"),
    minWidth: wp("196%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49%"),
    top: hp("-32%")
  },
  ImageBackground_10_272: {
    width: wp("196%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_273: {
    width: wp("31%"),
    height: hp("9%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%")
  },
  ImageBackground_10_274: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("104%")
  },
  ImageBackground_10_275: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_10_276: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_10_277: {
    width: wp("46%"),
    height: hp("26%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_278: {
    width: wp("45%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_279: {
    width: wp("45%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_280: {
    width: wp("45%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_372: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("69%")
  },
  View_10_373: {
    width: wp("40%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_374: {
    width: wp("40%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 125, 244, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(86, 125, 244, 1)",
    borderWidth: 1
  },
  View_10_375: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_10_376: {
    width: wp("17%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_10_376: {
    color: "rgba(86, 125, 244, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_1: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_377: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_378: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_379: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_385: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_10_387: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_10_389: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_111_2: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_111_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
