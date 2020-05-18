import React, { Component } from "react";


export default class Location_data22 extends Component {
    state = {
        cont1: "",
        cont2: "",
        cont3: "",
    }

    ObjCount = () => {
        // 신호등, 횡단보도, 버스정류장 갯수 확인
        const tt = this.props.location_datas;
        console.log('배열객체 확인', tt);
        for(let i=0; i<tt.length; i++) {
            if(tt[i].location_type == "신호등") {   
                this.state.cont1++;
            } else if (tt[i].location_type == "횡단보도") {
                this.state.cont2++;
            } else if (tt[i].location_type == "버스정류장") {
                this.state.cont3++;
            }
        }
        console.log('cont1', this.state.cont1);
        console.log('cont2', this.state.cont2);
        console.log('cont3', this.state.cont3);
    }

    render() {
        const location_datas = this.props.location_datas;
        console.log('여기는 location_data22 컴포넌트입니다.', location_datas);
        
        return (
            <div className="data">
                {this.ff()}
                <div className="">
                    <label>신호등:{this.state.cont1}</label>      
                    <label>횡단보도 : {this.state.cont2}    </label>
                    <label>버스정류장 : {this.state.cont3}    </label>
                </div>
            </div>
        );
    }
}
