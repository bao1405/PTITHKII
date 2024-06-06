import React, { Component } from 'react';

interface ExercisesProps {
    id:number,
    name:string,
    date:string,
    address:{
        province:string,
        city:string
    }
}

export default class Exercises01 extends Component<any,ExercisesProps> {
    constructor(props:ExercisesProps){
        super(props)
        this.state={
            id : 1,
            name : "Nguyễn Văn Sơn",
            date:"20/12/2023",
            address:{
                province:"Thanh Xuân",
                city:"Hà Nội"
            }
        }
    }
    render() {
        return (
            <div>
                Bài 2
                <p>id: {this.state.id}</p>
                <p>tên :{this.state.name} </p>
                <p>Ngày sinh : {this.state.date}</p>
                <p>địa chỉ : {this.state.address.province},{this.state.address.city}</p>
            </div>
        );
    }
}