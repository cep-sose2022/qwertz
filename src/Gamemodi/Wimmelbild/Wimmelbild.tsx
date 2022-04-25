import React from "react";

const Wimmelbild = () => {
    let background = './Images/mountainBackground.jpg';


    class CurrencyInput extends React.Component{
        constructor(props:any) {
            super(props);
            this.handleChange=this.handleChange.bind;
        }

        handleChange(e:any){
            // @ts-ignore
            this.props.onCurrencyChange(e.target.value);
        }
    }



    return (
        <div id='picture container'>




        </div>
    );
};

export default Wimmelbild;
