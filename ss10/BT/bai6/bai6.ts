class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
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
