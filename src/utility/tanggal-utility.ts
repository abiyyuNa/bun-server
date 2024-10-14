function convertDateFormatDMYToDate(dmyDate: string): string {
    const [day, month, year] = dmyDate.split("-").map(Number);
    const date = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date object
    return date.toISOString().split("T")[0]; // Extracting date part from ISO string
}

// Example usage:
// const dmyDateString = "02-04-2024";
// const convertedDate = convertDateFormatDMYToDate(dmyDateString);
// console.log(convertedDate); // Output: "2024-04-02"

function convertDateFormatYMDToDMY(ymdDate: string): string {
    const [year, month, day] = ymdDate.split("-");
    return `${day}-${month}-${year}`;
}

// Example usage:
// const ymdDateString = "2024-04-02";
// const convertedDate = convertDateFormatYMDToDMY(ymdDateString);
// console.log(convertedDate); // Output: "02-04-2024"

function convertDateFormatDMYToYMDT(dmyhisDate: string): string {
    const [datePart, timePart] = dmyhisDate.split(" ");
    const [day, month, year] = datePart.split("-");
    const [hours, minutes, seconds] = timePart.split(":");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Example usage:
// const dmyhisDateString = "02-04-2024 15:30:00";
// const convertedDate = convertDateFormatDMYToYMD(dmyhisDateString);
// console.log(convertedDate); // Output: "2024-04-02 15:30:00"

function convertDateFormatYMDToDMYT(ymdhisDate: string): string {
    const [datePart, timePart] = ymdhisDate.split(" ");
    const [year, month, day] = datePart.split("-");
    const [hours, minutes, seconds] = timePart.split(":");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Example usage:
// const ymdhisDateString = "2024-04-02 15:30:00";
// const convertedDate = convertDateFormatYMDToDMY(ymdhisDateString);
// console.log(convertedDate); // Output: "02-04-2024 15:30:00"

function getCurrentDateYMD(): string {
    const currentDate: Date = new Date();
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1; // Month is zero-based
    const day: number = currentDate.getDate();

    // Formatting month and day with leading zeros if needed
    const formattedMonth: string = month < 10 ? "0" + month : String(month);
    const formattedDay: string = day < 10 ? "0" + day : String(day);

    // Constructing the date string in YYYY-MM-DD format
    const formattedDate: string = `${year}-${formattedMonth}-${formattedDay}`;

    return formattedDate;
}

// Example usage:
// const currentDate: string = getCurrentDate();
// console.log(currentDate); // Output: "2024-04-02" (for example)

function getCurrentDateDMY(): string {
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year: number = currentDate.getFullYear();

    // Formatting day and month with leading zeros if needed
    const formattedDay: string = day < 10 ? "0" + day : String(day);
    const formattedMonth: string = month < 10 ? "0" + month : String(month);

    // Constructing the date string in "DD-MM-YYYY" format
    return `${formattedDay}-${formattedMonth}-${year}`;
}

// Example usage:
// const currentDateDMY: string = getCurrentDateDMY();
// console.log(currentDateDMY); // Output: Current date in "DD-MM-YYYY" format

function getCurrentDateDMYHIS(): string {
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year: number = currentDate.getFullYear();
    const hours: number = currentDate.getHours();
    const minutes: number = currentDate.getMinutes();
    const seconds: number = currentDate.getSeconds();

    // Formatting day, month, and year
    const formattedDay: string = day < 10 ? "0" + day : String(day);
    const formattedMonth: string = month < 10 ? "0" + month : String(month);
    const formattedYear: string = String(year);

    // Formatting hours, minutes, and seconds
    const formattedHours: string = hours < 10 ? "0" + hours : String(hours);
    const formattedMinutes: string =
        minutes < 10 ? "0" + minutes : String(minutes);
    const formattedSeconds: string =
        seconds < 10 ? "0" + seconds : String(seconds);

    // Constructing the date string in "DD-MM-YYYY HH:mm:ss" format
    return `${formattedDay}-${formattedMonth}-${formattedYear} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
// const currentDateDMYHIS: string = getCurrentDateDMYHIS();
// console.log(currentDateDMYHIS); // Output: Current date and time in "DD-MM-YYYY HH:mm:ss" format

function getCurrentDateDFY(): string {
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth(); // Months are zero-based
    const year: number = currentDate.getFullYear();

    // Array of month names
    const monthNames: string[] = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    // Formatting day, month, and year
    const formattedDay: string = day < 10 ? "0" + day : String(day);
    const formattedMonth: string = monthNames[month];
    const formattedYear: string = String(year);

    // Constructing the date string in "DD MMMM YYYY" format
    return `${formattedDay} ${formattedMonth} ${formattedYear}`;
}

// Example usage:
// const currentDateDFY: string = getCurrentDateDFY();
// console.log(currentDateDFY); // Output: Current date in "DD MMMM YYYY" format

function getCurrentDateTimeDFYHIS(): string {
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth(); // Months are zero-based
    const year: number = currentDate.getFullYear();
    const hours: number = currentDate.getHours();
    const minutes: number = currentDate.getMinutes();
    const seconds: number = currentDate.getSeconds();

    // Array of month names
    const monthNames: string[] = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    // Formatting day, month, and year
    const formattedDay: string = day < 10 ? "0" + day : String(day);
    const formattedMonth: string = monthNames[month];
    const formattedYear: string = String(year);

    // Formatting hours, minutes, and seconds
    const formattedHours: string = hours < 10 ? "0" + hours : String(hours);
    const formattedMinutes: string =
        minutes < 10 ? "0" + minutes : String(minutes);
    const formattedSeconds: string =
        seconds < 10 ? "0" + seconds : String(seconds);

    // Constructing the date string in "DD MMMM YYYY HH:mm:ss" format
    return `${formattedDay} ${formattedMonth} ${formattedYear} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
// const currentDateTimeDFYHIS: string = getCurrentDateTimeDFYHIS();
// console.log(currentDateTimeDFYHIS); // Output: Current date and time in "DD MMMM YYYY HH:mm:ss" format

export default {
    convertDateFormatDMYToDate,
    convertDateFormatYMDToDMY,
    convertDateFormatDMYToYMDT,
    convertDateFormatYMDToDMYT,
    getCurrentDateYMD,
    getCurrentDateDMY,
    getCurrentDateDMYHIS,
    getCurrentDateDFY,
    getCurrentDateTimeDFYHIS,
};
