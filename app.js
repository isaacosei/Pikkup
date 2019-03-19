import React, { Component } from "react";
import { View, Text, Image, FlatList, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          firstname: "Karen",
          lastname: "Calay",
          profession: "Optometrist",
          location: "calgary",
          proxColor: "green",
          image: require("./lady.png")
        },
        {
          firstname: "John",
          lastname: "Smith",
          profession: "Photographer",
          location: "Soweto",
          proxColor: "gray",
          image: require("./drake.png")
        },
        {
          firstname: "Zack",
          lastname: "Charles",
          profession: "Event Planner",
          location: "frankfurt",
          proxColor: "green",
          image: require("./man.jpg")
        },
        {
          firstname: "Mike",
          lastname: " ",
          profession: "Conplaince",
          location: "Lagos",
          proxColor: "red",
          image: require("./man2.jpg")
        },
        {
          firstname: "John",
          lastname: "Smith",
          profession: "Photographer",
          location: "Soweto",
          proxColor: "gray",
          image: require("./man3.png")
        },
        {
          firstname: "Zack",
          lastname: "Charles",
          profession: "Event Planner",
          location: "frankfurt",
          proxColor: "green",
          image: require("./man.jpg")
        },
        {
          firstname: "Mike",
          lastname: " ",
          profession: "Conplaince",
          location: "Lagos",
          proxColor: "red",
          image: require("./man2.jpg")
        }
      ]
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "86%",
          backgroundColor: "gray",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <View
          style={{
            //flex: 1,
            flexDirection: "row",
            backgroundColor: "#1e1477",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 25,
                width: 70,
                borderRadius: 5,
                backgroundColor: "white",
                color: "gray",
                margin: 20
              }}
            >
              LOGO
            </Text>
          </View>
          <View
            style={{
              //flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
              alignItems: "center"
              //justifyItems: "center"
            }}
          >
            <Image
              source={require("./scanning.png")}
              style={{ width: 120, height: 70 }}
            />
            <Text
              style={{
                fontSize: 20,
                width: 100,
                borderRadius: 5,
                backgroundColor: "white",
                color: "gray",
                marginLeft: -20
              }}
            >
              Scanning...
            </Text>
          </View>
        </View>
        <View style={{ flex: 4.5, backgroundColor: "transparent" }}>
          <View
            style={{
              backgroundColor: "#1e1477",
              alignItems: "center",
              justifyItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
                margin: 20
              }}
            >
              Context : Dating
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "lightgray",
                alignSelf: "center",
                marginLeft: 3,
                width: width / 2,
                fontSize: 18
              }}
            >
              User Nearby
            </Text>
            <Text
              style={{
                backgroundColor: "lightgray",
                alignSelf: "center",
                marginLeft: 3,
                width: width / 4,
                fontSize: 18
              }}
            >
              Prox
            </Text>
            <Text
              style={{
                backgroundColor: "lightgray",
                alignSelf: "center",
                marginLeft: 3,
                width: width / 4,
                fontSize: 18
              }}
            >
              Location
            </Text>
          </View>
          <FlatList
            data={this.state.people}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ flexDirection: "row", width: width / 2, margin: 10 }}
                >
                  <View>
                    <Image
                      source={item.image}
                      style={{ width: 80, height: 80, borderRadius: 40 }}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 20
                    }}
                  >
                    <Text style={{ fontSize: 18 }}>
                      {item.firstname} {item.lastname}
                    </Text>
                    <Text>{item.profession}</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: width / 4
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 80
                    }}
                  >
                    <Icon name="wifi" size={30} color={item.proxColor} />
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: width / 4
                  }}
                >
                  <Text>{item.location}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              margin: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                width: 80,
                height: 80,
                borderRadius: 40,
                borderColor: "gray"
              }}
            >
              <Icon name="times" size={70} color="#900" />
            </View>
            <Text>Drop</Text>
          </View>
          <View
            style={{
              margin: 20,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
              bottom: 30
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                width: 100,
                height: 100,
                borderRadius: 50,
                borderColor: "gray"
              }}
            >
              <Icon name="stack-exchange" size={100} color="#cdf3a2" />
            </View>
            <Text>Message</Text>
          </View>
          <View
            style={{
              margin: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                width: 80,
                height: 80,
                borderRadius: 40,
                borderColor: "gray"
              }}
            >
              <Icon name="star-o" size={70} color="aqua" />
            </View>
            <Text>Save Selected</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DemoScreen;

