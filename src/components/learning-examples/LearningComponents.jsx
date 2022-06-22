import React, {Component} from "react";
import FirstComponent  from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
class LearningComponents extends Component {
    render(){
      return(
        <div class="LearningComponents">
           My Hello World From LearningComponents
          <FirstComponent/>
          <SecondComponent/>
          <ThirdComponent/>
        </div>
      );
    }
  }

export default LearningComponents  