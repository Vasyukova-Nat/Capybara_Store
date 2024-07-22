import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [  // массив типов
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]  
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: "12 pro", price: 50000, rating: 5, img: "6d93287e-e59d-4400-95b5-fec7a959ab7d.jpg"},
            {id: 1, name: "super phone", price: 60000, rating: 4, img: "25005950-017a-403d-8554-4edef271746c.jpg"}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
