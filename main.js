const firstRow = "Slow and steady wins the race";
const secondRow = "You can say that again";

// ЗАВДАННЯ 1

function countLetter(row, letter) {
    let count = 0;

    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

function getRow(firstRow, secondRow, letter = "a") {
    const firstCount = countLetter(firstRow, letter);
    const secondCount = countLetter(secondRow, letter);

    console.log("Перший рядок:", firstRow);
    console.log("Кількість:", firstCount);

    console.log("Другий рядок:", secondRow);
    console.log("Кількість:", secondCount);

    if (firstCount > secondCount) {
        return firstRow;
    } else if (secondCount > firstCount) {
        return secondRow;
    } else {
        return "Кількість літер однакова";
    }
}

function runTask1() {
    const letter = prompt("Введіть літеру:");

    if (!letter || letter.length !== 1) {
        alert("Введіть тільки одну літеру!");
        return;
    }

    const result = getRow(firstRow, secondRow, letter);

    alert("Результат:\n\n" + result);
}


// ЗАВДАННЯ 2

function formattedPhone(phone) {
    let cleanPhone = phone.replace(/[\s()-]/g, "");

    let digits;

    if (/^\+380\d{9}$/.test(cleanPhone)) {
        digits = cleanPhone.substring(1);
    }
    else if (/^\+80\d{9}$/.test(cleanPhone)) {
        digits = "3" + cleanPhone.substring(2);
    }
    else if (/^380\d{9}$/.test(cleanPhone)) {
        digits = cleanPhone;
    }
    else if (/^80\d{9}$/.test(cleanPhone)) {
        digits = "3" + cleanPhone;
    }
    else if (/^0\d{9}$/.test(cleanPhone)) {
        digits = "38" + cleanPhone;
    }
    else {
        return "Неправильний формат телефону";
    }

    return "+" +
        digits.substring(0, 2) + " (" +
        digits.substring(2, 5) + ") " +
        digits.substring(5, 8) + "-" +
        digits.substring(8, 10) + "-" +
        digits.substring(10, 12);
}

function runTask2() {
    const phone = prompt(
        "Введіть номер телефону:\n\n" +
        "Приклад: 80971234567"
    );

    if (phone === null) {
        return;
    }

    const result = formattedPhone(phone);

    alert("Результат:\n\n" + result);
}


// Перевірка

console.log(getRow(firstRow, secondRow));

console.log(formattedPhone("+80664567890"));
console.log(formattedPhone("80971234567"));
console.log(formattedPhone("0631234567"));