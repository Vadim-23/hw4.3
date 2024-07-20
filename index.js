"use strict";

let birthYear = prompt("Введіть ваш рік народження:");
if (birthYear === null || birthYear.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("В якому місті ви живете?");
    if (city === null || city.trim() === "") {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        let sport = prompt("Ваш улюблений вид спорту?");
        if (sport === null || sport.trim() === "") {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;

            let cityMessage;
            if (city.toLowerCase() === "київ") {
                cityMessage = "Ти живеш у столиці України.";
            } else if (city.toLowerCase() === "вашингтон") {
                cityMessage = "Ти живеш у столиці США.";
            } else if (city.toLowerCase() === "лондон") {
                cityMessage = "Ти живеш у столиці Великобританії.";
            } else {
                cityMessage = `Ти живеш у місті ${city}.`;
            }

            let sportMessage;
            if (sport.toLowerCase() === "футбол") {
                sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
            } else if (sport.toLowerCase() === "баскетбол") {
                sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
            } else if (sport.toLowerCase() === "теніс") {
                sportMessage = "Круто! Хочеш стати як Роджер Федерер?";
            } else {
                sportMessage = `Ваш улюблений вид спорту - ${sport}.`;
            }
            alert(`Вік: ${age}\n${cityMessage}\n${sportMessage}`);
        }
    }
}
