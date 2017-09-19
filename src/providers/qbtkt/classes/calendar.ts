import { QbtktConstant } from '../qbtkt-constant';

export class Calendar {
    currentYear: number;
    currentMonth: number;
    monthsOfYear: number = 12;
    month: CalendarMonth;

    constructor(year: number, month: number) {
        this.onDataChange(month, year);
    }

    setYear(year: number) {
        this.currentYear = year;
    }

    getYear() {
        return this.currentYear;
    }

    setMonth(month: number) {
        this.currentMonth = month;
    }

    getMonth() {
        return this.currentMonth;
    }

    onDataChange(month: number, year: number) {
        this.currentMonth = month;
        this.currentYear = year;
        this.month = new CalendarMonth(month, year);
    }
}

export class CalendarMonth {
    year: number;
    monthInNumber: number;
    datesOfMonth: number;
    firstDate: number; // first date of month into day of week, 0:sunday 1:monday..
    dates: Array<CalendarDate> = [];

    constructor(monthInNumber: number, year: number) {
        this.monthInNumber = monthInNumber;
        this.year = year;

        this.onDataChange();
    }

    onDataChange() {
        this.calDatesOfMonth();
        this.firstDate = this.calculateFirstDayNumber();
        this.createMonth();
    }

    calculateFirstDayNumber(): number {
        let firstDate = new Date(this.year, this.monthInNumber - 1, 1);
        return firstDate.getDay();
    }

    calDatesOfMonth() {
        if (this.monthInNumber == 2) {
            if (this.year % 4 == 0) {
                this.datesOfMonth = 29;
            }
            else {
                this.datesOfMonth = 28;
            }
        }
        else if (this.monthInNumber <= 7) {
            if (this.monthInNumber % 2 != 0) {
                this.datesOfMonth = 31;
            }
            else {
                this.datesOfMonth = 30;
            }
        }
        else {
            if (this.monthInNumber % 2 != 0) {
                this.datesOfMonth = 30;
            }
            else {
                this.datesOfMonth = 31;
            }
        }
    }

    createMonth() {
        for (let i = 0; i < this.firstDate; i++) {
            let date = new CalendarDate(0, this.monthInNumber, this.year);
            this.dates.push(date);
        }

        for (let i = 1; i <= this.datesOfMonth; i++) {
            let date = new CalendarDate(i, this.monthInNumber, this.year);
            this.dates.push(date);
        }
        if (this.dates.length % 7) {
            let addmore = 7 - this.dates.length % 7
            for (let i = 0; i < addmore; i++) {

                let date = new CalendarDate(0, this.monthInNumber, this.year);
                this.dates.push(date);
            }
        }
    }
}

export class CalendarDate {
    date: number;
    month: number;
    year: number;
    price: string = '';
    isLowestPrice: boolean = false;
    specialDay: number = new QbtktConstant().NORMAL;
    
    constructor(date: number, month: number, year: number) {
        this.date = date;
        this.month = month;
        this.year = year;

        this.isAvailable();
        this.isToday();
    }

    setPrice(price: string){
        this.price = price;
    }    

    isAvailable(){
        if(this.month == new Date().getMonth() + 1 && this.year == new Date().getFullYear()){
            if(this.date < new Date().getDate()){
                this.specialDay = new QbtktConstant().UNAVAILABLE;
            }
        }
    }

    isToday(){
        if(this.month == new Date().getMonth() + 1 && this.year == new Date().getFullYear()){
            if(this.date == new Date().getDate()){
                this.specialDay = new QbtktConstant().TODAY;
            }
        }
    }

    onDataChange(specialDay: number){
        this.specialDay = specialDay;
        if(!specialDay){
            this.isToday();
        }
    }
}