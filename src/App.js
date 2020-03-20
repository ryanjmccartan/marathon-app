import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1.js';
import Tab2 from './pages/Tab2.js';
import firebase from './firebaseconfig';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'react-calendar/dist/Calendar.css';

/* Theme variables */
import './theme/variables.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.rootRef = firebase.database().ref().child('tracker');
    this.state = {
      data: [],
      miles: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.rootRef.on('value', data => {
        data.forEach(milesnap => {
            const milekey = milesnap.key;
            const miledata = milesnap.val();
            this.setState({
              data: [...this.state.data, {
                id: milesnap.key,
                miles: miledata.miles,
                time: miledata.time,
                date: miledata.date
              }],
              miles: [...this.state.miles, Number(milesnap.val().miles)]
            })
        console.log(milekey, miledata);
        })
        console.log('this is tracker data', this.state)
    })
}

  render() {
    let total = 0;
    this.state.miles.forEach(mile => {
      total += mile;
      return total;
    })
    console.log('this is total', total)

    return(
      <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" render={() => <Tab1 data={this.state.data} getData={this.getData} exact={true}/>} />
          <Route path="/tab2" render={() => <Tab2 miles={this.state.miles} total={total} getData={this.getData} exact={true}/>} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            {/* <IonIcon icon={triangle} /> */}
            <IonLabel>Journal</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            {/* <IonIcon icon={ellipse} /> */}
            <IonLabel>Progress</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  )
}
  
};

export default App;
