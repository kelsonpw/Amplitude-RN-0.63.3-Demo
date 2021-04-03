import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {Amplitude} from '@amplitude/react-native';

const AMP_API_KEY = '5425542015f2cb7b4c99a24456cd2df7';
const ampInstance = Amplitude.getInstance();
ampInstance.init(AMP_API_KEY);
ampInstance.logEvent(`0.63.3 Mounted: ${Platform.OS}`);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button
                title={'Log Event'}
                onPress={() => {
                  ampInstance.logEvent(`0.63.3 Button Clicked: ${Platform.OS}`);
                }}
              />
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
