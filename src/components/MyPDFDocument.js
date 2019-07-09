import React, { Component } from "react";
import { Document, Page } from 'react-pdf';

class MyPDFDocument extends Component {
    rednerWorkout(param) {
        switch(param){
            case("../images/workouts/ConditioningWeightLoss5V1.pdf"):
                return(
                    require("../images/workouts/ConditioningWeightLoss5V1.pdf")
                );
            case("../images/workouts/ConditioningWeightLoss4V1.pdf"):
                return(
                    require("../images/workouts/ConditioningWeightLoss4V1.pdf")
                );
            case("../images/workouts/ConditioningWeightLoss3V1.pdf"):
                return(
                    require("../images/workouts/ConditioningWeightLoss3V1.pdf")
                );
            case("../images/workouts/AtHomeTotalBody5V1.pdf"):
                return(
                    require("../images/workouts/AtHomeTotalBody5V1.pdf")
                );
            case("../images/workouts/AtHomeTotalBody4V1.pdf"):
                return(
                    require("../images/workouts/AtHomeTotalBody4V1.pdf")
                );
            case("../images/workouts/AtHomeTotalBody3V1.pdf"):
                return(
                    require("../images/workouts/AtHomeTotalBody3V1.pdf")
                );
            case("../images/workouts/FunctionalFitnessHIIT5V1.pdf"):
                return(
                    require("../images/workouts/FunctionalFitnessHIIT5V1.pdf")
                );
            case("../images/workouts/FunctionalFitnessHIIT4V1.pdf"):
                return(
                    require("../images/workouts/FunctionalFitnessHIIT4V1.pdf")
                );
            case("../images/workouts/FunctionalFitnessHIIT3V1.pdf"):
                return(
                    require("../images/workouts/FunctionalFitnessHIIT3V1.pdf")
                );
            case("../images/workouts/TotalBodyTransformation5V1.pdf"):
                return(
                    require("../images/workouts/TotalBodyTransformation5V1.pdf")
                );
            case("../images/workouts/TotalBodyTransformation4V1.pdf"):
                return(
                    require("../images/workouts/TotalBodyTransformation4V1.pdf")
                );
            case("../images/workouts/TotalBodyTransformation3V1.pdf"):
                return(
                    require("../images/workouts/TotalBodyTransformation3V1.pdf")
                );
            default:
                console.log("workout Not found in PDFdocument switch statement");
        }
    }

    render(){
        return(
            // file={require("../images/handout.pdf")}
            <Document file={this.rednerWorkout(this.props.file)}>
                <Page pageNumber={1} //how do this dynamically?
                onLoadError={console.error}
                />
          </Document>
        );
    }
}

export default MyPDFDocument;