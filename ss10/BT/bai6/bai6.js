"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let song = new Song(1, "Shape of You", 240);
console.log("Tên bài hát ban đầu:", song.name);
song.name = "Perfect";
console.log("Tên bài hát sau khi thay đổi:", song.name);
console.log("Độ dài ban đầu của bài hát:", song.length);
song.length = 210;
console.log("Độ dài sau khi thay đổi của bài hát:", song.length);
